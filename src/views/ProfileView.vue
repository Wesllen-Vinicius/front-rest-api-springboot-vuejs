<template>
  <div class="flex justify-center w-auto h-auto">
    <div
      class="mt-5 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col items-center pb-10 p-8">
        <div class="flex items-center space-x-4">
          <img
          
            class="w-20 h-20 rounded-full"
            src="../assets/dogcoin.jpg"
            alt=""
          />
          <div class="space-y-1 font-medium dark:text-white">
            <div>
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                {{ currentUser?.username }}
              </h5>
            </div>
          </div>
        </div>

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
