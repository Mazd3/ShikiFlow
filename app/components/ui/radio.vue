<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue'

interface UiRadioProps {
  label?: string
}

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<UiRadioProps>()
const inputModel = defineModel()
</script>

<template>
  <label class="radio">
    <input
      v-model="inputModel"
      class="radio__input"
      type="radio"
      v-bind="$attrs"
    >
    <span class="radio__checkmark">
      <IconCheck v-if="inputModel" size="16" stroke-width="2" />
    </span>
    <span class="radio__label">
      {{ label }}
    </span>
  </label>
</template>

<style scoped>
.radio {
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
}

.radio__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
  z-index: 10;
}

.radio__checkmark {
  position: relative;
  display: flex;
  width: 18px;
  height: 18px;
  color: rgb(var(--background));
  border: 1px solid rgba(var(--text), .25);
  border-radius: 4px;
  transition: all .3s ease-in-out;
}

.radio__input:checked + .radio__checkmark {
  border: 1px solid var(--c-primary-text);
  color: var(--c-primary-text);
}

.radio__label {
  cursor: pointer;
  font-size: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  word-break: break-all;
  -webkit-box-orient: vertical;
}
</style>
