import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateSpend1651195185065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "spends",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "cost",
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
            })
        );

        await queryRunner.addColumn(
            "spends",
            new TableColumn({
                name: "id_category",
                type: "uuid",
            }),
        );

        await queryRunner.createForeignKey(
            "spends",
            new TableForeignKey({
                columnNames: ["id_category"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
                onDelete: "CASCADE",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("spends");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("id_category") !== -1,
        );

        await queryRunner.dropForeignKey("spends", foreignKey);
        await queryRunner.dropColumn("spends", "id_category");
        await queryRunner.dropTable("spends");
    }

}
