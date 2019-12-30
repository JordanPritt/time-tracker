<template>
  <v-container>
    <v-row>
      <v-col class="login-card">
        <v-card>
          <v-card-title>
            <h4>Login</h4>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="password-input"
                label="Password"
                hint="At least 6 characters"
                counter
                @click:append="show = !show"></v-text-field>
              <v-btn color="success" @click="handleLogin">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      username: '',
      password: '',
      show: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
  methods: {
    handleLogin() {
      const { username, password } = this;

      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>
.login-card {
  margin: 1em 25em 0em 25em;
}
</style>
