import { inject, injectable } from "tsyringe";
import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";

interface IRequest {
  title: string;
  gain: Number;
  id_user: string;
}

@injectable()
class CreateProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository,
  ) {}

  async execute({ title, gain, id_user }: IRequest): Promise<void> {
    this.profitRepository.createProfit({title, gain, id_user });
  }
}

export { CreateProfitsService }