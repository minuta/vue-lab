<template>
  <div>
    <form @submit.prevent="fetchUserData">
      <label for="id">ID:</label>
      <input type="text" v-model="id" @keyup.enter="fetchUserData" id="id" />

      <label for="name">name:</label>
      <input type="text" v-model="name" id="name" readonly />

      <label for="role">role: </label>
      <input type="text" v-model="role" id="role" readonly />
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
    const name = ref<string>('');
    const role = ref<string>('');

    const fetchUserData = async () => {
      try {
        // const response = await axios.get(`http://localhost:3000/api/users/${id.value}`);
        const response = await axios.get('http://localhost:3000/api/users/1');
        console.log('XXX: ' + response);
        // Assuming response data structure is { firstName: string, lastName: string }
        // id.value = response.data.id;
        // name.value = response.data.name;
        // role.value = response.data.role;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    return {
      id,
      name,
      role,
      fetchUserData,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */

form {
  max-width: 300px;
  margin: 40px auto;
  padding: 20px;
  //background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
label {
  display: block;
  margin-bottom: 10px;
}
input[type="text"] {
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>