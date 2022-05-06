import { getRepository, Repository } from "typeorm";
import { Profit } from "../entities/profit";
import { AppError } from "../errors/AppError";
import { ICreateProfitDTO, IDeleteProfitDTO, IProfitRepository } from "./interfaces/IProfitRepository";

class ProfitRepository implements IProfitRepository {
  private repository: Repository<Profit>

  constructor() {
    this.repository = getRepository(Profit);
  }

  async getAllProfits(): Promise<number> {
    const allSpends = await this.repository.find({select: ["gain"]})
    var valor = 0;

    allSpends.forEach((index) => {
       valor += Number(index.gain);
    })

    return valor;
  }

  async findById(id: string): Promise<Profit> {
    const profit = await this.repository.findOne({ id });
    return profit;
  }

  async listProfits(): Promise<Profit[]> {
    const profits = await this.repository.find();
    return profits;
  }

  async createProfit({ title, gain, id_user }: ICreateProfitDTO): Promise<void> {
    try{
      const profit = this.repository.create({
        title,
        gain,
        id_user
      })

      await this.repository.save(profit);

    } catch {
      throw new AppError("this profit does not created.");
    }
  }

  async updateProfit({ id, title, gain, id_user }: ICreateProfitDTO): Promise<void> {
    try{
      await this.repository.update({
        id,
      }, {
        title,
        gain,
        id_user,
        updated_at: new Date(),
      });

    } catch {
      throw new AppError("This profit does not update"); 
    }  
  }

  async deleteProfit({ id }: IDeleteProfitDTO): Promise<void> {
    await this.repository.delete(id);
  }

  

}

export { ProfitRepository };