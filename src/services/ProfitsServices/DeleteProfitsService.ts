import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { IProfitRepository } from '../../repositories/interfaces/IProfitRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteProfitsService {
  constructor(
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
   if (! await this.profitRepository.findById(id)){
     throw new AppError("This Spend does not exists");
   }

   this.profitRepository.deleteSpend({ id });
  }
}

export { DeleteProfitsService }