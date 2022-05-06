import { inject, injectable } from "tsyringe";
import { Spend } from '../../entities/spend';
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class GetAllSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository
  ) {}

  async execute(): Promise<number> {
    const spends = await this.spendsRepository.getAllSpends();
    return spends;
  }
}


export { GetAllSpendsService }