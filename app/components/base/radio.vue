<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue'

export interface RadioProps {
  id?: string
  value?: string
  disabled?: boolean
  required?: boolean
  checked?: boolean
  name?: string
}

defineProps<RadioProps>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const modelValue = defineModel()
</script>

<template>
  <label class="label" :for="id">
    <input :id="id" v-model="modelValue" class="input" type="radio" :value="value" :disabled="disabled" :required="required" :checked="checked" :name="name">
    <span class="checkmark" />
    <slot />
  </label>
</template>

<style scoped>
.label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.input {
  display: none;
}

.checkmark {
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(var(--text), .25);
  border-radius: 50%;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(var(--background));
    cursor: pointer;
  }
}

.input:checked + .checkmark {
  &::before {
    color: var(--accent);
    background-color: var(--accent);
  }
}
</style>
