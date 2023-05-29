import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685033520138 implements MigrationInterface {
    name = 'InitialMigration1685033520138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "email" character varying NOT NULL, "telephone" character varying NOT NULL, "registerDate" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_b79874c8d411b839b9ccc301972" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "email" character varying NOT NULL, "telephone" character varying NOT NULL, "registerDate" date NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "password" character varying(30) NOT NULL, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Client" ADD CONSTRAINT "FK_a874c0f53826c8de98f7f1ca414" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_5fd03e19b188ee73637086b3657" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_5fd03e19b188ee73637086b3657"`);
        await queryRunner.query(`ALTER TABLE "Client" DROP CONSTRAINT "FK_a874c0f53826c8de98f7f1ca414"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Contact"`);
        await queryRunner.query(`DROP TABLE "Client"`);
    }

}
