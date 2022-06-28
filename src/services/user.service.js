import axios from "axios";
import { api } from "../utils/api";
import authHeader from "./auth-header";
class UserService {
  getPublicContent() {
    return api.get("test/all");
  }

  getUserBoard() {
    return api.get("test/user", { headers: authHeader() });
  }

  getAdminBoard() {
    return api.get("test/admin", { headers: authHeader() });
  }

  getUsers(){
    return api.get("get/user", {headers: authHeader() });
  }
}

export const userService = new UserService();
