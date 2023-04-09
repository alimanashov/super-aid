<script lang="ts" setup>
import type {PropType} from "vue";
import type {ModelResponse, UserMessage} from "@/types/chat.types";

const props = defineProps({
  message: {
    type: Object as PropType<UserMessage | ModelResponse | null>,
    default: null,
  },
});
</script>

<template>
  <div class="message" v-if="message">
    <div class="message-header">
      <span v-if="typeof message.passedClassification === 'undefined'" class="material-icons">smart_toy</span>
      <span v-else class="material-icons">person</span>
    </div>
    <p class="message-text">{{ message.message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.message {
  margin-bottom: 0.5rem;
  max-width: 70%;
  min-width: 100px;
  align-self: start;
  padding: 0.5rem;
  background: $light-blue;
  color: $white;
  border-radius: 10px;
}
@media screen and (max-width: 620px) {
  .message {
    max-width: 100%;
    border-radius: 5px;
  }
}
</style>
