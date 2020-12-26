/*
  Warnings:

  - You are about to drop the column `type` on the `transaction_categories` table. All the data in the column will be lost.
  - Added the required column `transactionTypeId` to the `transaction_categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction_categories` DROP COLUMN `type`,
    ADD COLUMN     `transactionTypeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `transaction_types` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transaction_categories` ADD FOREIGN KEY (`transactionTypeId`) REFERENCES `transaction_types`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
