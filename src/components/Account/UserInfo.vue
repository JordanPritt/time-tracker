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
};
</script>

<style scoped>
</style>
