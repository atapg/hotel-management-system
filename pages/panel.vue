<template>
  <div style="height: 100vh" class="panel-container">
    <div class="fill-height sidebar">
      <v-card class="fill-height" width="300">
        <v-list shaped>
          <v-subheader>Admin Panel</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="pa-5" style="width: 100%">
      <v-card width="100%">
        <v-card-text> items </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'panel',
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.panel-container {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
