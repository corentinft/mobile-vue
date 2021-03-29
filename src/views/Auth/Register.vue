<template>
  <v-container fill-height>
    <v-card class="ma-auto">
      <v-form>
        <v-row>
          <v-col
            cols="10"
            offset="1"
            class="mt-3"
          >
            <v-text-field
              v-model="form.firstname"
              :rules="nameRules"
              :counter="10"
              label="Prénom"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="10"
            offset="1"
          >
            <v-text-field
              v-model="form.lastname"
              :rules="nameRules"
              :counter="10"
              label="Nom"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="10"
            offset="1"
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
              @click="register(form)"
            >Inscription</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {

  name: "Register",

  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        password: ""
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Name is required',
        v => v.length >= 8 || 'Password must be more than 8 characters',
      ],
    }
  },

  mounted() {
    this.$store.watch(() => this.$store.state.status, status => {
      if (status == "401") {
        console.log('coucou');
      } else if (status == "200" && this.form.email != "") {
        // On réinitialise les champs a vide ""
        this.form.email = "";
        this.form.firstname = "";
        this.form.lastname = "";
        this.form.password = "";
      }
    })
  },
  methods: {
    register(form) {
      this.$store.dispatch('register', form)
    }
  }
}
</script>

<style scoped>
</style>
