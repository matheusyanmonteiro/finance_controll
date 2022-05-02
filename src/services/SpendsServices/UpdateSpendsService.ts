import { inject, injectable } from "tsyringe";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class UpdateSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository
  ) {}

  async execute({id, name, description, cost, id_category}): Promise<void> {
    this.spendsRepository.updateSpend({id, name, description, cost, id_category});
  }
}

export { UpdateSpendsService }