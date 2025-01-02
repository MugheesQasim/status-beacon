// userService.ts

import { User } from "../models/user";
import { AppDataSource } from '../config/database'

class UserService {
  private userRepository;

  constructor() {
    this.userRepository = AppDataSource.manager.getRepository(User)
  }

  // Create a new user
  async createUser(email: string, firstName: string, lastName: string, password: string): Promise<User> {
    const user = this.userRepository.create({ email, first_name: firstName, last_name: lastName, password });
    await this.userRepository.save(user);
    return user;
  }

  // Get a user by email
  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Validate user credentials
  async validateUserCredentials(email: string, password: string): Promise<User | undefined> {
    const user = await this.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return undefined; // Return undefined if credentials do not match
  }
}

export default new UserService();
