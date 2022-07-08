<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  asyncData({ params }) {
    return params
  },
}
</script>

<style scoped></style>
