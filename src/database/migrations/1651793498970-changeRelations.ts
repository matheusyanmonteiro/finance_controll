import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class changeRelations1651793498970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("spends");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("id_profit") !== -1,
        );

        await queryRunner.dropForeignKey("spends", foreignKey);
        await queryRunner.dropColumn("spends", "id_profit");

        await queryRunner.addColumn(
            "spends",
            new TableColumn({
                name: "id_user",
                type: "uuid",
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            "spends",
            new TableForeignKey({
                columnNames: ["id_user"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        );

        await queryRunner.addColumn(
            "profits",
            new TableColumn({
                name: "id_user",
                type: "uuid",
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            "profits",
            new TableForeignKey({
                columnNames: ["id_user"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        );
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableSpend = await queryRunner.getTable("spends");
        const foreignKeySpend = tableSpend.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("id_user") !== -1,
        );

        await queryRunner.dropForeignKey("spends", foreignKeySpend);
        await queryRunner.dropColumn("spends", "id_user");

        const tableProfit = await queryRunner.getTable("profits");
        const foreignKeyProfit = tableProfit.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("id_user") !== -1,
        );

        await queryRunner.dropForeignKey("profits", foreignKeyProfit);
        await queryRunner.dropColumn("profits", "id_user");
    }

}
