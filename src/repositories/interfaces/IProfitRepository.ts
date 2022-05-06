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
    listProfits(): Promise<Profit[]>;
    createProfit( { title, gain }: ICreateProfitDTO ): Promise<void>;
    updateProfit( { id, title, gain }: ICreateProfitDTO ): Promise<void>;
    deleteProfit( { id }: IDeleteProfitDTO): Promise<void>;
    findById( id: string): Promise<Profit>;
    getAllProfits(): Promise<number>;
}

export { ICreateProfitDTO, IProfitRepository, IDeleteProfitDTO }