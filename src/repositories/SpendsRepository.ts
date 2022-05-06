import { getRepository, Repository } from "typeorm";
import { Spend } from "../entities/spend";
import { AppError } from "../errors/AppError";

import { ICreateSpendsDTO, IDeleteSpendDTO, ISpendsRepository } from "./interfaces/ISpendsRepository";

class SpendsRepository implements ISpendsRepository {
  private repository :  Repository<Spend>;

  constructor() {
    this.repository = getRepository(Spend);
  }

  async findById(id: string): Promise<Spend> {
    const spend = await this.repository.findOne({ id });
    return spend;
  }

  async listSpends(): Promise<Spend[]> {
    const spends = await this.repository.find();
    return spends;
  }

  async createSpend({ name, description, cost, id_category, id_user }: ICreateSpendsDTO): Promise<void> {
    try{
      const spend = this.repository.create({
        name,
        description,
        cost,
        id_category,
        id_user
      })

      await this.repository.save(spend);

    } catch {
      throw new AppError("this category does not created.");
    }
  }

  async updateSpend({ id, name, description, cost, id_category, id_user }: ICreateSpendsDTO): Promise<void> {
    try{
      await this.repository.update({
        id,
      }, {
        name: name,
        description: description,
        cost: cost,
        id_category: id_category,
        id_user: id_user,
        updated_at: new Date(),
      });

    } catch {
      throw new AppError("This spends does not update"); 
    }  
  }

  async deleteSpend({ id }: IDeleteSpendDTO): Promise<void> {
    await this.repository.delete(id);
  }


}

export { SpendsRepository }