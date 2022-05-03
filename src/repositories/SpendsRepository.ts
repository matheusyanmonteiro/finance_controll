import { getRepository, Repository } from "typeorm";
import { Spend } from "../entities/spend";
import { AppError } from "../errors/AppError";

import { ICreateSpendsDTO, IDeleteSpendDTO, ISpendsRepository } from "./interfaces/ISpendsRepository";

class SpendsRepository implements ISpendsRepository {
  private respository :  Repository<Spend>;

  constructor() {
    this.respository = getRepository(Spend);
  }

  async findById(id: string): Promise<Spend> {
    const spend = await this.respository.findOne({ id });
    return spend;
  }

  async listSpends(): Promise<Spend[]> {
    const spends = await this.respository.find();
    return spends;
  }

  async createSpend({ name, description, cost, id_category }: ICreateSpendsDTO): Promise<void> {
    try{
      const spend = this.respository.create({
        name,
        description,
        cost,
        id_category,
      })

      await this.respository.save(spend);

    } catch {
      throw new AppError("this category does not created.");
    }
  }

  async updateSpend({ id, name, description, cost, id_category }: ICreateSpendsDTO): Promise<void> {
    try{
      await this.respository.update({
        id,
      }, {
        name: name,
        description: description,
        cost: cost,
        id_category: id_category,
      });

    } catch {
      throw new AppError("This spends does not update"); 
    }  
  }

  async deleteSpend({ id }: IDeleteSpendDTO): Promise<void> {
    await this.respository.delete(id);
  }


}

export { SpendsRepository }