import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity,  JoinColumn,  ManyToOne,  OneToMany,  PrimaryColumn } from "typeorm";
import { Spend } from "./spend";
import { User } from "./user";

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
  gain: Number;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  @Column()
  id_user: string;
  @ManyToOne(() => User, userInfo => userInfo.profits, {onDelete: 'CASCADE'})
  @JoinColumn({name: "id_user"})
  user: User

 

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Profit }


