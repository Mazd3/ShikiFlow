<script setup lang="ts">
export type UiTitleTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'

export type UiTitleSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'

export type UiTitleWeight =
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Black'

export interface UiTitleProps {
  tag?: UiTitleTag & keyof HTMLElementTagNameMap
  size?: UiTitleSize
  fw?: UiTitleWeight
}

const props = withDefaults(defineProps<UiTitleProps>(), {
  tag: 'h3',
  size: 'md',
  fw: 'Regular',
})
</script>

<template>
  <component
    :is="props.tag"
    :class="{
      // font size
      ['xs']: size === 'xs',
      ['sm']: size === 'sm',
      ['md']: size === 'md',
      ['lg']: size === 'lg',
      ['xl']: size === 'xl',
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
/* font size */
.xs {
  font-size: var(--fs-xs);
}
.sm {
  font-size: var(--fs-sm);
}
.md {
  font-size: var(--fs-md);
}
.lg {
  font-size: var(--fs-lg);
}
.xl {
  font-size: var(--fs-xl);
}
.h1 {
  font-size: var(--fs-h1);
}
.h2 {
  font-size: var(--fs-h2);
}
.h3 {
  font-size: var(--fs-h3);
}
.h4 {
  font-size: var(--fs-h4);
}
.h5 {
  font-size: var(--fs-h5);
}

/* font weight */
.thin {
  font-weight: 100;
}
.extra-light {
  font-weight: 200;
}
.light {
  font-weight: 300;
}
.regular {
  font-weight: 400;
}
.medium {
  font-weight: 500;
}
.semi-bold {
  font-weight: 600;
}
.bold {
  font-weight: 700;
}
.extra-bold {
  font-weight: 800;
}
.black {
  font-weight: 900;
}
</style>
