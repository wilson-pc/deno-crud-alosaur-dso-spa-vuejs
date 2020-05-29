import { UserModel } from "../models/user.ts";
import {
  dso,
  Where,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

const userModel = dso.define(UserModel);

export class UserService {
  async getAll() {
    return await userModel.findAll({});
  }
  async getOne(id: number) {
    return await userModel.findById(id);
  }
  async create(user: UserModel) {
    return await userModel.insert(user);
  }
  async update(id: number, user: UserModel) {
    return await userModel.update(user, Where.from({ id: id }));
  }
  async delete(id: number) {
    return await userModel.delete(Where.from({ id: id }));
  }
}
