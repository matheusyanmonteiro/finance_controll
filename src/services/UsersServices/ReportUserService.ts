import { json } from "express";
import { JsonObject } from "swagger-ui-express";
import { inject, injectable } from "tsyringe";

import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
class ReportUserService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository,
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository,

  ) {}

  async execute(): Promise<string> {
    const spends = await this.spendsRepository.listSpends();
    const profits = await this.profitRepository.listProfits();
    const result =  await this.spendsRepository.getAllSpends() - await this.profitRepository.getAllProfits();
  

    if(result < 0 ) {
      return `all spends: ${spends} \n
      all profits: ${profits}\n
      you still owe: ${-1 * result}`
    }

    if(result > 0 ) {
      return `all spends: ${spends} \n
      all profits: ${profits}\n
      you still have: ${result}`
    }

    return `all spends: ${spends} \n
    all profits: ${profits} \n
    you dont have money`
  }
}


export { ReportUserService }