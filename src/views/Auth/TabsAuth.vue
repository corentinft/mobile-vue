<template>
  <div>
    <v-app-bar
      color="blue lighten-2"
      dense
      dark
    >

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    
    <router-view/>

    <v-bottom-navigation
      absolute
      hide-on-scroll
      horizontal
    >
      <v-btn
        to="/auth/login"
        color="blue lighten-2"
        text
      >
        <span>Connection</span>

        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn
        to="/auth/register"
        color="blue lighten-2"
        text
      >
        <span>Inscription</span>

        <v-icon>mdi-account-multiple-plus</v-icon>
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
      return this.$route.path === "/auth/register" ? "Inscription" : "Connexion"
    }
  }
}
</script>

<style scoped>
</style>
