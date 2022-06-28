<template>
  <div class="w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">User Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="bg-white dark:bg-gray-800"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ user.id }}
          </th>
          <td class="px-6 py-4">{{ user.username }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">{{ user.roles }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {userService} from '../services/user.service' 
export default {
  name: "TableUser",
  components: {},
  data() {
    return { users: [] };
  },
  methods: {
    loadUsers() {
      userService.getUsers()
        .then((response) => (this.users = response.data))
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    async handleCreateUser() {
      //criar um novo usuario
      
      //Atualizar lista de usuarios
      await this.loadUsers();
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>
