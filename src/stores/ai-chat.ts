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
        initChat() {
            this.chat = {
                messages: [],
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

            const res = await classifyQuestion(this.userMessage.message);
            if (res < 0.2) {
                this.errorMessage = "Question is not properly given, please try again";
                setTimeout(() => {
                    this.errorMessage = "";
                }, 10000)
                return;
            }
            this.userMessage.classificationResult = res;
            this.userMessage.passedClassification = true;
            this.userMessage.timestamp = Date.now();
            this.chat.messages.push(this.userMessage);

            const result = await generateAnswerForQuestion(this.userMessage.message);
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
