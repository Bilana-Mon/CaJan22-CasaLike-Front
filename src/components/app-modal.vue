<template>
  <teleport to="#app-portal">
    <div class="portal-bg">
      <div class="portal-content">
        <slot>im a modal</slot>
      </div>
    </div>
  </teleport>
</template>

<script>

export default {
  name: 'app-modal',
}
</script>