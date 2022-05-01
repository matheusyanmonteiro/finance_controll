import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Spend } from "./spend";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Spend, spendInfo => spendInfo.category)
  spendInfo: Spend;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category }