import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class UpdateSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository,
  ) {}

  async execute({id, name, description, cost, id_category, id_user}): Promise<void> {
    if(! await this.spendsRepository.findById(id)) {
      throw new AppError("Spends does not exists!");
    }


    this.spendsRepository.updateSpend({id, name, description, cost, id_category, id_user});
  }
}

export { UpdateSpendsService }