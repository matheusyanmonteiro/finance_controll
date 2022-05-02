import { inject, injectable } from "tsyringe";
import { AppError } from '../../errors/AppError';
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string,
  description: string,
}

@injectable()
class CreateCategoriesService {
    constructor(
      @inject("CategoriesRepository")
      private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
      const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

      if (categoryAlreadyExists) {
        throw new AppError("Category already Exists!");
      }

      this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoriesService }; 