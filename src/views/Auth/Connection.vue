<template>
  <v-container class="fill-height">
    <v-card class="ma-auto">
      <v-form>
        <v-row>
          <v-col
            cols="10"
            offset="1"
            class="mt-3"
          >
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="10"
            offset="1"
          >
            <v-text-field
              v-model="form.password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="10"
            offset="1"
            class="mb-3"
          >
            <v-btn
              block
              @click="login(form)"
            >Connexion</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Connection",

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      passwordRules: [
        v => !!v || 'Name is required',
        v => v.length >= 8 || 'Password must be more than 8 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  mounted() {
    this.$store.watch(() => this.$store.state.status, status => {
      if (status == "401") {
        console.log('coucou');
      }
    });
  },

  methods: {
    login(form) {
      this.$store.dispatch('login', form)
    },

  },

  beforeMount() {
    localStorage.clear();
  }
}
</script>

<style scoped>
.login-logo {
  padding: 20px 0;
  min-height: 200px;
  text-align: center;
}
.login-logo img {
  max-width: 150px;
}
</style>
