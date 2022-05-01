import { inject, injectable } from 'tsyringe';
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

interface IRequest {
  name: string;
  description: string;
  cost: number;
  id_category: string;
}

@injectable()
class CreateSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository
  ) {}

  async execute({name, description, cost, id_category}: IRequest): Promise<void> {
    this.spendsRepository.createSpend({name, description, cost, id_category});
  }
}

export { CreateSpendsService }