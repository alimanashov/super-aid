import {defineStore} from "pinia";
import type {Chat, UserMessage} from "@/types/chat.types";
import {classifyQuestion, continueAnswerForQuestion, generateAnswerForQuestion} from "@/api/question";

export const useAiChatStore = defineStore({
    id: "aiChatStore",
    state: () => ({
        chat: null as Chat | null,
        userMessage: null as UserMessage | null,
        waitingForModelResponse: false as boolean,
        errorMessage: "",
    }),
    getters: {
        hasContinue: (state) => {
            if (!state.chat || !state.chat.messages.length)
                return false;
            const lastMessage = state.chat.messages[state.chat.messages.length - 1];
            // @ts-ignore
            return typeof lastMessage.passedClassification === 'undefined';
        },
    },
    actions: {
        initChat(emergency: boolean = false) {
            this.chat = {
                messages: [],
                emergency: emergency,
            };
            this.userMessage = {
                message: "",
                timestamp: Date.now(),
                passedClassification: false,
                classificationResult: 0,
            };
        },
        updateUserInput(value: string) {
            if (!this.userMessage) return;
            this.userMessage.message = value;
        },
        async sendMessageToModel() {
            if (!this.chat || !this.userMessage || this.waitingForModelResponse) return;
            this.waitingForModelResponse = true;
            let promptForGeneration = "Shortly answer a question about first aid";

            if (!this.chat.emergency) {
                const res = await classifyQuestion(this.userMessage.message);
                if (res < 0.2) {
                    this.errorMessage = "The question was asked incorrectly, please try again";
                    setTimeout(() => {
                        this.errorMessage = "";
                    }, 10000)
                    return;
                }
                this.userMessage.classificationResult = res;
                this.userMessage.passedClassification = true;
                this.userMessage.timestamp = Date.now();
                this.chat.messages.push(this.userMessage);
            } else {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (this.userMessage && this.chat) {
                        this.userMessage.location = position;
                        this.userMessage.passedClassification = true;
                        this.userMessage.timestamp = Date.now();
                        this.chat.messages.push(this.userMessage);
                    }
                });
                promptForGeneration = "Emergency!";
            }

            const result = await generateAnswerForQuestion(promptForGeneration, this.userMessage.message);
            this.waitingForModelResponse = false;
            if (result !== "Error occurred!") {
                this.chat.messages.push(
                    {
                        message: result,
                        timestamp: Date.now(),
                    }
                );
            } else {
                this.errorMessage = "An Error, please try again";
                setTimeout(() => {
                    this.errorMessage = "";
                }, 10000);
            }
            this.userMessage = {
                message: "",
                timestamp: Date.now(),
                passedClassification: false,
                classificationResult: 0,
            };
        },
        async continueTheAnswering() {
            if (!this.chat || !this.userMessage || this.waitingForModelResponse) return;
            this.waitingForModelResponse = true;

            const result = await continueAnswerForQuestion();
            this.waitingForModelResponse = false;
            if (result !== "Error occurred!") {
                this.chat.messages.push(
                    {
                        message: result,
                        timestamp: Date.now(),
                    }
                );
            } else {
                this.errorMessage = "An Error, please try again";
                setTimeout(() => {
                    this.errorMessage = "";
                }, 10000);
            }
        },
    },
});
