import { v4 as uuidV4 } from "uuid";
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { Category } from "./category";
import { Profit } from "./profit";
import { User } from "./user";

@Entity("spends")
class Spend {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  cost: Number; 
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  @Column()
  id_category: string;
  @OneToOne(() => Category, category => category.spendInfo, {onDelete: 'CASCADE'})
  @JoinColumn({name : "id_category"})
  category: Category;

  @Column()
  id_user: string;
  @ManyToOne(() => User, userInfo => userInfo.spends, {onDelete: 'CASCADE'})
  @JoinColumn({name: "id_user"})
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Spend }