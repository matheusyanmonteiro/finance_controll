import { Spend } from "../../entities/spend";

interface ICreateSpendsDTO {
  id?: string;
  name: string;
  description: string;
  cost: number;
  id_category: string;
}

interface IDeleteSpendDTO {
  id: string
}

interface ISpendsRepository {
    listSpends(): Promise<Spend[]>;
    createSpend( {name, description, cost, id_category }: ICreateSpendsDTO ): Promise<void>;
    updateSpend( {id, name, description, cost, id_category }: ICreateSpendsDTO ): Promise<void>;
    deleteSpend( { id }: IDeleteSpendDTO): Promise<void>;
    findById( id: string): Promise<Spend>;
}

export { ICreateSpendsDTO, ISpendsRepository, IDeleteSpendDTO }