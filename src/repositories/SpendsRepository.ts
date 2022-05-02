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
    
    const spend = this.respository.create({
      name,
      description,
      cost,
      id_category,
    })

    await this.respository.save(spend);
  }
  async updateSpend({ id, name, description, cost, id_category }: ICreateSpendsDTO): Promise<void> {
    const spend = this.respository.findOne(id);

    if (!spend) {
      throw new AppError("This Spends does not exists");
    }

   (await spend).name = name ? name : (await spend).name;
   (await spend).description = description ? description : (await spend).description;
   (await spend).cost = cost ? cost : (await spend).cost;
   (await spend).id_category = id_category ? id_category: (await spend).id_category;

   (await spend).updated_at = new Date();

  
  }

  async deleteSpend({ id }: IDeleteSpendDTO): Promise<void> {
    await this.respository.delete(id);
  }


}

export { SpendsRepository }