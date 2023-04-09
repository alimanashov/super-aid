<script setup lang="ts">
import MessageComponent from "@/components/MessageComponent.vue";
import {useAiChatStore} from "@/stores/ai-chat";

const props = defineProps({
  emergency: {
    default: false,
  }
})

const chatStore = useAiChatStore();
chatStore.initChat(props.emergency);
</script>

<template>
  <div class="chat" v-if="chatStore && chatStore.chat">
    <div class="chat-messages" v-if="chatStore.chat">
      <div v-for="message in chatStore.chat.messages" :key="message.timestamp">
        <MessageComponent :message="message" />
      </div>
    </div>
    <div class="user-input-zone" v-if="chatStore.userMessage">
      <textarea v-model="chatStore.userMessage.message" placeholder="How to make a CPR?"></textarea>
    </div>
    <div v-if="chatStore.errorMessage" class="error-message">{{ chatStore.errorMessage }}</div>
    <div class="chat-actions" v-if="chatStore">
<!--      <button v-if="chatStore.hasContinue" @click="chatStore.continueTheAnswering()" class="send-message-btn">CONTINUE</button>-->
      <button
          @click="chatStore.sendMessageToModel()"
          class="send-message-btn"
          :class="{'wait-btn': chatStore.waitingForModelResponse}"
      >
        {{ chatStore.waitingForModelResponse ? "WAIT" : "SEND" }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  min-height: 350px;
  border-radius: 20px 20px 10px 10px;
  .chat-messages {
    max-height: 300px;
    overflow: scroll;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: $white;
    border-radius: 20px 20px 0 0;
  }
  .user-input-zone {
    width: 100%;
    min-height: 50px;
    padding: 0.25rem;
    margin-top: auto;
    border-top: 2px solid $primary;
    border-radius: 0 0 20px 20px;
    background: $white;

    textarea {
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      width: 100%;
      min-height: 50px;
      resize: none;
    }
  }
  .error-message {
    margin-top: 0.25rem;
    padding: 1rem;
    background: yellow;
    color: black;
    border-radius: 20px;
  }
  .chat-actions {
    display: flex;
    justify-content: end;
    .send-message-btn {
      cursor: pointer;
      margin-top: 1rem;
      margin-left: 1rem;
      padding: 1rem 2rem;
      align-self: end;
      min-width: 100px;
      background: $primary;
      border: none;
      border-radius: 5px;
      color: $white;
      transition: background-color 300ms ease-in-out;

      &:hover {
        background: $light-blue;
      }
      &.wait-btn {
        background: $dark-blue;
      }
    }
  }
}
</style>
