import { getRepository, Repository } from "typeorm";
import { Profit } from "../entities/profit";
import { AppError } from "../errors/AppError";
import { ICreateProfitDTO, IDeleteProfitDTO, IProfitRepository } from "./interfaces/IProfitRepository";

class ProfitRepository implements IProfitRepository {
  private repository: Repository<Profit>

  constructor() {
    this.repository = getRepository(Profit);
  }

  async findById(id: string): Promise<Profit> {
    const profit = await this.repository.findOne({ id });
    return profit;
  }

  async listSpends(): Promise<Profit[]> {
    const profits = await this.repository.find();
    return profits;
  }

  async createSpend({ title, gain }: ICreateProfitDTO): Promise<void> {
    try{
      const profit = this.repository.create({
        title,
        gain,
      })

      await this.repository.save(profit);

    } catch {
      throw new AppError("this profit does not created.");
    }
  }

  async updateSpend({ id, title, gain }: ICreateProfitDTO): Promise<void> {
    try{
      await this.repository.update({
        id,
      }, {
        title,
        gain,
        updated_at: new Date(),
      });

    } catch {
      throw new AppError("This profit does not update"); 
    }  
  }

  async deleteSpend({ id }: IDeleteProfitDTO): Promise<void> {
    await this.repository.delete(id);
  }

  

}

export { ProfitRepository };