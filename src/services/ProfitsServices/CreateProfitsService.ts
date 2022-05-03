import { inject, injectable } from "tsyringe";
import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";

interface IRequest {
  title: string;
  gain: Number;
}

@injectable()
class CreateProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository,
  ) {}

  async execute({ title, gain }: IRequest): Promise<void> {
    this.profitRepository.createSpend({title, gain });
  }
}

export { CreateProfitsService }