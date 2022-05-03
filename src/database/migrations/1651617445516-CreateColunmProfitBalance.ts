import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateColunmProfitBalance1651617445516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "profits",
            new TableColumn({
                name: "balance",
                type: "decimal",
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("profits", "balance");
    }

}
