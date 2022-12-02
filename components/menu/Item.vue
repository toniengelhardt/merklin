<template>
  <HeadlessMenuItem v-slot="{ active }">
    <slot>
      <button
        :class="[
          active ? 'bg-violet-500 text-white' : 'text-gray-900',
          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
        ]"
      >
        <EditIcon
          :active="active"
          class="mr-2 h-5 w-5 text-violet-400"
          aria-hidden="true"
        />
        Edit
      </button>
    </slot>
  </HeadlessMenuItem>
</template>
