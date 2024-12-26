<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue'

interface UiCheckboxProps {
  label?: string
}

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<UiCheckboxProps>()
const inputModel = defineModel()
</script>

<template>
  <label class="checkbox">
    <input
      v-model="inputModel"
      class="checkbox__input"
      type="checkbox"
      v-bind="$attrs"
    >
    <span class="checkbox__checkmark">
      <IconCheck v-if="inputModel" size="16" stroke-width="2" />
    </span>
    <span class="checkbox__label">
      {{ label }}
    </span>
  </label>
</template>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
  z-index: 10;
}

.checkbox__checkmark {
  position: relative;
  display: flex;
  width: 18px;
  height: 18px;
  color: rgb(var(--background));
  border: 1px solid rgba(var(--text), .25);
  border-radius: 4px;
  transition: all .3s ease-in-out;
}

.checkbox__input:checked + .checkbox__checkmark {
  border: 1px solid var(--c-primary-text);
  color: var(--c-primary-text);
}

.checkbox__label {
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
