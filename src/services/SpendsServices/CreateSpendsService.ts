import { inject, injectable } from "tsyringe";
import { AppError } from '../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

interface IRequest {
  name: string;
  description: string;
  cost: number;
  id_category: string;
  id_profit?: string;

}

@injectable()
class CreateSpendsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository,
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute({name, description, cost, id_category, id_profit}: IRequest): Promise<void> {
    if(! await this.categoryRepository.findById(id_category)) {
      throw new AppError("Category does not exists!");
    }
    this.spendsRepository.createSpend({name, description, cost, id_category, id_profit});
  }
}

export { CreateSpendsService }