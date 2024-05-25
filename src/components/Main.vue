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

  <div>
    <form @submit.prevent="submitForm">
    <label for="mail">Mail:</label>
    <input type="text" v-model="mail" id="mail" />

    <label for="city">City:</label>
    <input type="text" v-model="city" id="city" />

    <button type="submit">Submit</button>
    </form>
  </div>>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import {Logger} from '../tools/logger.ts';

const logger = new Logger('frontend');

export default defineComponent({
  name: 'UserForm',
  setup() {
    const id = ref<string>('');
    const name = ref<string>('');
    const role = ref<string>('');
    const mail = ref<string>('');
    const city = ref<string>('');


    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id.value}`);
        logger.log('Sending a request')
        name.value = response.data.name;
        role.value = response.data.role;
        logger.log('Response data:', JSON.stringify(response.data, null, 2));

      } catch (error) {
        logger.error('Error fetching user data:', error);
      }
    };

    const submitForm = async () => {
      try {
        const payload = {
          id: id.value,
          name: name.value,
          role: role.value,
          mail: mail.value,
          city: city.value,
        };
        logger.log('Sending POST request with payload:', JSON.stringify(payload, null, 2));
        const response = await axios.post('http://localhost:3000/api/users', payload);
        logger.log('Response from POST request:', JSON.stringify(response.data, null, 2));
        alert('Form submitted successfully!');
      } catch (error) {
        logger.error('Error submitting form:', error);
        alert('Failed to submit the form. Please try again.');
      }
    };


    return {
      id,
      name,
      role,
      mail,
      city,
      fetchUserData,
      submitForm,
    };
  },
});
</script>

<!--------------------------------------------------------------------------------------------------------------------->


<style scoped>
/* Add your styles here */

form {
  max-width: 300px;
  margin: 40px auto;
  padding: 20px;
  //background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

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
  border-radius: 10px;
}
button[type="submit"] {
  background-color: #2e90a0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

</style>