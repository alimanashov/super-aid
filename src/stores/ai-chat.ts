import {defineStore} from "pinia";

export const useAiChatStore = defineStore({
    id: "aiChatStore",
    state: () => ({
        chat: [],
        userInput: "",
    }),
    actions: {
        async sendMessageToModel() {
            console.log("SENT");
        },
    },
});
