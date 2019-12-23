<template>
  <nav>
    <v-toolbar>
      <v-toolbar-title>Time Tracker</v-toolbar-title>
      <v-spacer />
      <v-btn class="ml-4 mr-4 primary">
        <span>Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list-item class="pa-1">
        <v-list-item-avatar>
          <v-img src="/images/logo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Time Tracker</v-list-item-title>
      </v-list-item>

      <v-list shaped class="list-center">
        <v-list-item-group color="primary">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Reports', icon: 'mdi-chart-bar' },
        { title: 'Current Week', icon: 'mdi-calendar-clock' },
        { title: 'Running Total', icon: 'mdi-timetable' },
      ],
    };
  },
};
</script>

<style scoped>
.list-center {
  margin-top: 50%;
}
</style>
