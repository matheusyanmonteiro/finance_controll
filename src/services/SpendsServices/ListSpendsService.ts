import { inject, injectable } from 'tsyringe';
import { Spend } from '../../entities/spend';
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class ListSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository
  ) {}

  async execute(): Promise<Spend[]> {
    const spends = await this.spendsRepository.listSpends();
    return spends;
  }
}


export { ListSpendsService }