import { Request, Response } from "express";
import userRepository from "../repositories/userRepository";

export default class UserController {
  static async insert(req: Request, res: Response): Promise<any> {
    const user = req.body;
    const repoResponse = await userRepository.createUser(user);
    return res.send(repoResponse);
  }
  static async remove(req: Request, res: Response): Promise<any> {
    const { id } = req.body;
    const repoResponse = await userRepository.destroyUser(id);
    return res.send(repoResponse);
  }
  static async update(req: Request, res: Response): Promise<any> {
    const { id } = req.body;
    const repoResponse = await userRepository.updateUser(id);
    return res.send(repoResponse);
  }
  static async getList(req: Request, res: Response): Promise<any> {
    const repoResponse = await userRepository.getAllUsers();
    return res.send(repoResponse);
  }
  static async getById(req: Request, res: Response): Promise<any> {
    const { id } = req.body;
    const repoResponse = await userRepository.getUserById(id);
    return res.send(repoResponse);
  }
}
