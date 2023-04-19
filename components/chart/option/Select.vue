<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  options: ChartOptionsItem[]
}>()
defineEmits(['update:modelValue'])

const selectedOption = computed(() => props.options.find(option => option.value === props.modelValue) || props.options[0])
</script>

<template>
  <HeadlessMenu as="div" relative>
    <HeadlessMenuButton
      flex items-center px-2 py-1 bg-element text-dim border-1 border-base
      hover:border-highlight rounded-md cursor-pointer
    >
      <Icon name="dropdown" size="0.5rem" text-faint />
      <div ml-1>
        {{ selectedOption.label }}
      </div>
    </HeadlessMenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        absolute w-max-content mt-1 divide-y divide-gray-100
        bg-base rounded-md shadow-lg
        ring-0 ring-zinc-900 ring-opacity-5
        focus:outline-none z-12 right-0 origin-top-right
      >
        <div p-0.5>
          <HeadlessMenuItem
            v-for="option in options"
            :key="option.value"
            v-slot="{ active }"
            px-2 py-0.75 text-sm text-right rounded
          >
            <div
              :class="[active ? 'bg-element-active' : undefined]"
              text-dim cursor-pointer
              @click="$emit('update:modelValue', option.value)"
            >
              {{ option.label }}
            </div>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>
