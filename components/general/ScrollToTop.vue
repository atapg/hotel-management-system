<template>
  <div class="scroller-container" ref="scrollerRef" @click="scrollToTop">
    <v-btn color="primary" fab>
      <v-icon> mdi-chevron-up </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollHeight: 300,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.top.scrollY > this.scrollHeight) {
        this.$refs.scrollerRef.classList.add('show')
      } else {
        this.$refs.scrollerRef.classList.remove('show')
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped lang="scss">
.scroller-container {
  position: fixed;
  right: 40px;
  bottom: -100px;
  z-index: 20;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 40px !important;
    color: white !important;
    font-weight: bolder;
  }
}

.scroller-container.show {
  bottom: 40px;
}
</style>
