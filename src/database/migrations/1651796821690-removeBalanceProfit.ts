import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class removeBalanceProfit1651796821690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("profits", "balance");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "profits",
            new TableColumn({
                name: "balance",
                type: "decimal",
                isNullable: true,
            }),
        );
    }

}
