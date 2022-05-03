import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity,  PrimaryColumn } from "typeorm";

// - O usuário deve conseguir ter uma visão geral da sua saúde financeira a qualquer
//  momento. para isso, gere um extrato financeiro mostrando todos os gastos 
//  (seguindo as 5 áreas supracitadas),
//  seus ganhos e o saldo de sua carteira.

@Entity("profits")
class Profit {
  @PrimaryColumn()
  id?: string;
  @Column()
  title: string;
  @Column()
  gain: number;
  @Column()
  balance: number;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Profit }


