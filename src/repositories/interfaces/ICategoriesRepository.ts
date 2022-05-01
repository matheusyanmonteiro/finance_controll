import { Category } from "../../entities/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  findById( id: string): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO }