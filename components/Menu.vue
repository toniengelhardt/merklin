<script setup lang="ts">
</script>

<template>
  <HeadlessMenu>
    <HeadlessMenuButton btn>
      <Icon name="menu" />
    </HeadlessMenuButton>
    <HeadlessMenuItems>
      <HeadlessMenuItem>
        <a href="/account-settings">
          Account settings
        </a>
      </HeadlessMenuItem>
      <HeadlessMenuItem>
        <a href="/account-settings">
          Documentation
        </a>
      </HeadlessMenuItem>
      <HeadlessMenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </HeadlessMenuItem>
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>
