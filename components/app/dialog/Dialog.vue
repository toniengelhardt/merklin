
<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  size: 'md',
})
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
  (event: 'close'): void
}>()

const closeBtnRef = ref(null)

function close() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <HeadlessTransitionRoot
    :show="modelValue"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <HeadlessDialog
      as="div"
      :open="modelValue"
      :initial-focus="closeBtnRef"
      relative z-50
      text-base
      @close="close()"
    >
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div fixed inset-0 bg-black bg-opacity-40 />
      </HeadlessTransitionChild>
      <div fixed inset-0 overflow-y-auto>
        <div flex min-h-full items-center justify-center p-4>
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              w-full max-w-xl transform overflow-hidden rounded-2xl bg-base
              p-4 shadow-xl transition-all
            >
              <HeadlessDialogTitle mt-0>
                <div flex>
                  <div flex-1 flex items-center>
                    <slot name="title" />
                  </div>
                  <a ref="closeBtnRef" flex-center w-6 h-6 cursor-pointer @click="close()">
                    <Icon name="cross" text-lg text-dim />
                  </a>
                </div>
              </HeadlessDialogTitle>
              <HeadlessDialogDescription>
                <slot name="description" />
              </HeadlessDialogDescription>
              <slot />
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
