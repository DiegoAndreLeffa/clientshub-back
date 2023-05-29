import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685035166434 implements MigrationInterface {
    name = 'InitialMigration1685035166434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "password" character varying(30) NOT NULL`);
    }

}
