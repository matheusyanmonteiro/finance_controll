import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfit1651543041487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // id,
        // title,
        //  gain
        // created_at
        // updated_at 
        // one-to-many?
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
