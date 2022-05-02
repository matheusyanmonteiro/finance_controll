import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
   if (! await this.spendsRepository.findById(id)){
     throw new AppError("This Spend does not exists");
   }

   this.spendsRepository.deleteSpend({ id });
  }
}

export { DeleteSpendsService }