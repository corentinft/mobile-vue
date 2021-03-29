<template>
  <div>
    <v-app-bar
      color="blue lighten-2"
      dense
      dark
    >

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="disconnect"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    
    <router-view/>

    <v-bottom-navigation
      absolute
      hide-on-scroll
      horizontal
    >
      <v-btn
        to="/app/promotions"
        color="blue lighten-2"
        text
      >
        <span>Promotions</span>

        <v-icon>mdi-piggy-bank</v-icon>
      </v-btn>

      <v-btn
        to="/app/scan"
        color="blue lighten-2"
        text
      >
        <span>Scan</span>

        <v-icon>mdi-qrcode-scan</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
  
</template>

<script>
export default {
  name: "TabAuth",
  data: () => (
    {}
  ),

  computed: {
    title() {
      return this.$route.path === "/app/promotions" ? "Promotions" : this.$route.path === "/app/scan" ? "Scan Qr Code" : ""
    }
  },

  methods: {
    disconnect() {
      this.$router.push('/auth/login');
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
</style>
