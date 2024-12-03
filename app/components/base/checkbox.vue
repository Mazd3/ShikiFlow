<script setup lang="ts" generic="T">
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
    <span class="checkbox__checkmark" />
    <label class="checkbox__label" :for="id">{{ label }}</label>
  </div>
</template>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 20px;
    width: 20px;
    z-index: 10;
  }

  &__checkmark {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgb(var(--accent));
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
  }

  &__input:checked + &__checkmark {
    background-color: rgb(var(--accent));
    border: 5px solid rgb(var(--accent));
  }

  &__label {
    cursor: pointer;
    font-size: 16px;
  }
}
</style>
