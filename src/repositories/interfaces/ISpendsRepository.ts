import { Spend } from "../../entities/spend";

interface ICreateSpendsDTO {
  id?: string;
  name: string;
  description: string;
  cost: number;
  id_category: string;
  id_profit?: string;
}

interface IDeleteSpendDTO {
  id: string
}

interface ISpendsRepository {
    listSpends(): Promise<Spend[]>;
    createSpend( {name, description, cost, id_category, id_profit  }: ICreateSpendsDTO ): Promise<void>;
    updateSpend( {id, name, description, cost, id_category, id_profit }: ICreateSpendsDTO ): Promise<void>;
    deleteSpend( { id }: IDeleteSpendDTO): Promise<void>;
    findById( id: string): Promise<Spend>;
}

export { ICreateSpendsDTO, ISpendsRepository, IDeleteSpendDTO }