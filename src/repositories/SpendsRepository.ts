import { getRepository, Repository } from "typeorm";
import { Spend } from "../entities/spend";

import { ICreateSpendsDTO, IDeleteSpendDTO, ISpendsRepository } from "./interfaces/ISpendsRepository";

class SpendsRepository implements ISpendsRepository {
  private respository :  Repository<Spend>;

  constructor() {
    this.respository = getRepository(Spend);
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
  async updateSpend({ name, description, cost, id_category }: ICreateSpendsDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteSpend({ id }: IDeleteSpendDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }


}

export { SpendsRepository }