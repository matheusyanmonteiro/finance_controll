import { inject, injectable } from 'tsyringe';
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
      this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoriesService }; 