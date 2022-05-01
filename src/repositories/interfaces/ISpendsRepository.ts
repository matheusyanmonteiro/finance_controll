import { Spend } from "../../entities/spend";

interface ICreateSpendsDTO {
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
    updateSpend( {name, description, cost, id_category }: ICreateSpendsDTO ): Promise<void>;
    deleteSpend( { id }: IDeleteSpendDTO): Promise<void>;
}

export { ICreateSpendsDTO, ISpendsRepository, IDeleteSpendDTO }