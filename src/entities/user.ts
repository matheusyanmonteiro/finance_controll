import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, Unique } from "typeorm";
import { Spend } from "./spend";
import { Profit } from "./profit";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Spend, spendinfo => spendinfo.user)
  spends: Spend[];

  @OneToMany(() => Profit, profitinfo => profitinfo.user)
  profits: Profit[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };