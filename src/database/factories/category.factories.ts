import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Category } from '../../entities/category'


define(Category, (faker: typeof Faker, context: { roles: string[] }) => {
  const name = faker.name.findName()
  const description = faker.name.jobDescriptor();

  const category = new Category();
  category.name = name;
  category.description = description;


  return category;
 });