import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }
  
}


export { CategoriesRepository }