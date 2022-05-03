import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateProfit1651543041487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profits",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "gain",
                        type: "decimal",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ], 
            }),
        );

        await queryRunner.addColumn(
            "spends",
            new TableColumn({
                name: "id_profit",
                type: "uuid",
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            "spends",
            new TableForeignKey({
                columnNames: ["id_profit"],
                referencedColumnNames: ["id"],
                referencedTableName: "profits",
                onDelete: "SET NULL",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("spends");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("id_profit") !== -1,
        );

        await queryRunner.dropForeignKey("spends", foreignKey);
        await queryRunner.dropColumn("spends", "id_profit");
        await queryRunner.dropTable("profits");
    }

}
