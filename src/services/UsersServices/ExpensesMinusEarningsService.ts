import { json } from "express";
import { JsonObject } from "swagger-ui-express";
import { inject, injectable } from "tsyringe";

import { IProfitRepository } from "../../repositories/interfaces/IProfitRepository";
import { ISpendsRepository } from '../../repositories/interfaces/ISpendsRepository';

@injectable()
class ExpensesMinusEarningsService {
  constructor(
    @inject("SpendsRepository")
    private spendsRepository: ISpendsRepository,
    @inject("ProfitRepository")
    private profitRepository: IProfitRepository
  ) {}

  async execute(): Promise<string> {
    const spends = await this.spendsRepository.getAllSpends();
    const profits = await this.profitRepository.getAllProfits();
    const result = spends - profits;

    if(result < 0 ) {
      return `you still owe: ${-1 * result}`
    }

    if(result > 0 ) {
      return `you still have: ${result}`
    }

    return "you dont have more money";
  }
}


export { ExpensesMinusEarningsService }