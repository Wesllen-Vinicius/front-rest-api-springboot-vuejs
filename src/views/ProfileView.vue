<template>
  <div
    class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-col items-center pb-10 p-8">
      <svg
        class="w-40 h-40 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        ></path>
      </svg>

      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ currentUser?.username }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >{IDUser} {{ currentUser?.id }}</span
      >
      <span class="text-md text-gray-500 dark:text-gray-400">
        {TokenUser} {{ currentUser?.accessToken.substring(0, 20) }} ...
        {{
          currentUser?.accessToken.substr(currentUser.accessToken.length - 20)
        }}</span
      >
      <span class="text-sm text-gray-500 dark:text-gray-400">
        {UserEmail} {{ currentUser?.email }}
      </span>
      <ul v-if="currentUser?.roles">
        <span
          v-for="role in currentUser.roles"
          :key="role"
          class="text-sm text-gray-500 dark:text-gray-400"
        >
          {Roles} {{ role }}
        </span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
