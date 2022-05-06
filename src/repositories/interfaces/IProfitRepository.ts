import { Profit } from "../../entities/profit";

interface ICreateProfitDTO {
  id?: string;
  title: string;
  gain: Number;
  id_user?: string
}

interface IDeleteProfitDTO {
  id: string
}

interface IProfitRepository {
    listSpends(): Promise<Profit[]>;
    createSpend( { title, gain }: ICreateProfitDTO ): Promise<void>;
    updateSpend( { id, title, gain }: ICreateProfitDTO ): Promise<void>;
    deleteSpend( { id }: IDeleteProfitDTO): Promise<void>;
    findById( id: string): Promise<Profit>;
    getAllProfits(): Promise<number>;
}

export { ICreateProfitDTO, IProfitRepository, IDeleteProfitDTO }