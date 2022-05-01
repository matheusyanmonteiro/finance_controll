import { container } from "tsyringe";

import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

import { ISpendsRepository } from "../../repositories/interfaces/ISpendsRepository";
import { SpendsRepository } from "../../repositories/SpendsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpendsRepository>(
  "SpendsRepository",
  SpendsRepository
);