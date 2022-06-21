<template>
  <div class="mt-10">
    <div class="flex justify-center sm:mt-0 h-full w-full">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <h3>{{ content }}</h3>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="username"
                      class="block text-sm font-medium text-gray-700"
                      >UserName</label
                    >
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Password</label
                    >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="roles"
                      class="block text-sm font-medium text-gray-700"
                      >Roles</label
                    >
                    <select
                      id="roles"
                      name="roles"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>User</option>
                      <option>Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";
import * as yup from "yup";
import UserService from "../services/user.service";
export default {
  name: "Admin",
  components: {
    VForm: Form,
    VField: Field,
    VErrorMessage: ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      content: "",
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    ...mapActions(["register"]),
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.register(user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },

        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
