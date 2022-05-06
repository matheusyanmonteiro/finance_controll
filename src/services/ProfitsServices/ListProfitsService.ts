import { inject, injectable } from "tsyringe";
import { Profit } from "../../entities/profit";
import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";

@injectable()
class ListProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository
  ) {}

  async execute(): Promise<Profit[]> {
    const profit = await this.profitRepository.listProfits();
    return profit;
  }
}


export { ListProfitsService }