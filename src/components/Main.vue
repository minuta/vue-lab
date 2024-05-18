<!--<script setup lang="ts">-->

<!--</script>-->

<!--<template>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div>
    <form @submit.prevent="fetchUserData">
      <label for="id">ID:</label>
      <input type="text" v-model="id" @keyup.enter="fetchUserData" id="id" />

      <label for="first-name">First Name:</label>
      <input type="text" v-model="firstName" id="first-name" readonly />

      <label for="last-name">Last Name:</label>
      <input type="text" v-model="lastName" id="last-name" readonly />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'UserForm',
  setup() {
    const id = ref<string>('');
    const firstName = ref<string>('');
    const lastName = ref<string>('');

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.example.com/users/${id.value}`);
        // Assuming response data structure is { firstName: string, lastName: string }
        firstName.value = response.data.firstName;
        lastName.value = response.data.lastName;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    return {
      id,
      firstName,
      lastName,
      fetchUserData,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>