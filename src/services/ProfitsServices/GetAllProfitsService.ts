import { inject, injectable } from "tsyringe";
import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";


@injectable()
class GetAllProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository
  ) {}

  async execute(): Promise<number> {
    const profits = await this.profitRepository.getAllProfits();
    return profits;
  }
}


export { GetAllProfitsService }