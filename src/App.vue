<template>
  <div class="sticky top-0 z-50 bg-gray-200 p-2">
    <div class="flex items-center justify-center">
      <img
        alt="Vue logo"
        class="w-14"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <div>
        <nav>
          <div v-if="currentUser">
            <li>
              <router-link to="/profile">
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="w-auto">
              <a @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" /> LogOut
              </a>
            </li>
          </div>
          <RouterLink class="p-2" to="/">Home</RouterLink>
          <RouterLink class="p-2" to="/register">Register</RouterLink>
          <RouterLink class="p-2" to="/login">Login</RouterLink>
          <RouterLink class="p-2" to="/profile">Profile</RouterLink>
          <li v-if="showAdminBoard" class="p-2">
            <router-link to="/admin" class="nav-link">Admin Board</router-link>
          </li>
          <router-link v-if="currentUser" to="/user" class="p-2"
            >User</router-link
          >
        </nav>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
