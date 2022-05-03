import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class UpdateSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository,
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute({id, name, description, cost, id_category, id_profit}): Promise<void> {
    if(! await this.spendsRepository.findById(id)) {
      throw new AppError("Spends does not exists!");
    }

    if(! await this.categoryRepository.findById(id_category)) {
      throw new AppError("Category does not exists!");
    }

    this.spendsRepository.updateSpend({id, name, description, cost, id_category, id_profit});
  }
}

export { UpdateSpendsService }