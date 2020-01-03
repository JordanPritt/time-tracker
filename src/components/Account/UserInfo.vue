<template>
 <div>
   <v-card>
       <v-card-title>User Information</v-card-title>
       <v-container>
        <v-row>
            <v-col>
                <v-text-field
                    label="First Name"
                    :value="this.firstname" />
                <v-text-field
                    label="Last Name"
                    :value="this.lastname" />
                <v-text-field
                    label="Email"
                    :value="this.email" />
                <v-select
                    :items="statuses"
                    label="Status"
                    :value="status" />
                <v-btn color="info">Save Changes</v-btn>
            </v-col>
        </v-row>
       </v-container>
   </v-card>
 </div>
</template>

<script>
export default {
  name: 'userinfo',
  data() {
    return {
      loading: false,
      firstname: 'admin',
      lastname: 'admin',
      email: 'fake@test.com',
      status: 'active',
      statuses: [
        'active',
        'inactive',
        'deactivated',
        'hold',
      ],
    };
  },
  created() {
    this.getAccountDetails();
  },
  watch: {
    $route: 'getAccountDetails',
  },
  methods: {
    async getAccountDetails() {
      try {
        this.loading = true;
        // { headers: { Authorization: `Bearer ${this.$store.getters.token}` } }
        const details = await this.$http.get('http://localhost:5000/api/v1/account')
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        if (details) {
          this.firstname = details.firstName;
          this.lastname = details.lastName;
          this.email = details.email;
          this.status = details.status;
          this.loading = false;
        } else {
          this.loading = true;
        }
      } catch (e) {
        const err = e.toString();
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
</style>
