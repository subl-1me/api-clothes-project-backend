// connection to db

import User from "../interfaces/user";

export default class userRepository {
  static async getAllUsers() {
    // TODO: db connection
    return {
      status: 200,
      message: "OK",
    };
  }
  static async getUserById(id: string) {
    return {
      status: 200,
      message: "OK",
    };
  }
  static async createUser(user: User) {
    return {
      status: 200,
      message: "OK",
    };
  }
  static async updateUser(id: string) {
    return {
      status: 200,
      message: "OK",
    };
  }
  static async destroyUser(id: string) {
    return {
      status: 200,
      message: "OK",
    };
  }
}
