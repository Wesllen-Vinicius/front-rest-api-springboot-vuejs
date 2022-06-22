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
          <div v-if="currentUser" @click.prevent="logOut">
            <h1 class="p-2">LogOut</h1>
          </div>
          <RouterLink class="p-2" to="/">Home</RouterLink>
          <RouterLink class="p-2" to="/register">Register</RouterLink>
          <RouterLink class="p-2" to="/login">Login</RouterLink>
          <RouterLink class="p-2" to="/profile">Profile</RouterLink>
          <a v-if="showAdminBoard" class="p-2">
            <RouterLink to="/admin" class="nav-link">Admin Board</RouterLink>
          </a>
          <RouterLink v-if="currentUser" to="/user" class="p-2"
            >User</RouterLink
          >
        </nav>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["logout"]),
    async logOut() {
      await this.logout();
      this.$router.push("/login");
    },
  },
};
</script>
