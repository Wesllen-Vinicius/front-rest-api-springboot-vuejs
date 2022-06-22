import { api } from "../utils/api";


class AuthService {
  async login(user) {
    try {
      const response = await api.post("auth/signin", {
        username: user.username,
        password: user.password,
      });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(user) {
    return api.post("auth/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
