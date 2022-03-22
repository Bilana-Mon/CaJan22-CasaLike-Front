<template>
<teleport to="#app-portal">
        <div>
            <div class="portal-content">
                <slot>im a modal</slot>
            </div>
        </div>
    </teleport>
</template>

<script>

export default {
    name:'app-modal',
  // props: [''],
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>