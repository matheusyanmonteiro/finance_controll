import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";

@injectable()
class UpdateProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository,
  ) {}

  async execute({id, title, gain, id_user}): Promise<void> {
    if(! await this.profitRepository.findById(id)) {
      throw new AppError("Profit does not exists!");
    }

    this.profitRepository.updateProfit({id, title, gain, id_user});
  }
}

export { UpdateProfitsService }