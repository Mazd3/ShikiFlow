<script setup lang="ts" generic="T">
import { IconCheck } from '@tabler/icons-vue'

interface CheckboxProps {
  id: string
  value: string | number | boolean
  label: string
  name: string
  disabled?: boolean
}
defineProps<CheckboxProps>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const modelValue = defineModel<T>()
</script>

<template>
  <div class="checkbox">
    <input
      :id="id"
      v-model="modelValue"
      class="checkbox__input"
      type="checkbox"
      :name="name"
      :value="value"
    >
    <span class="checkbox__checkmark"><IconCheck size="16" stroke-width="2" /></span>
    <label class="checkbox__label" :for="id">{{ label }}</label>
  </div>
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
  border: 1px solid var(--accent);
  color: var(--accent);
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
