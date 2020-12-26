/*
  Warnings:

  - The migration will change the primary key for the `transactions` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `transactionCategoryId` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `transaction_categories` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transaction_categories` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `transactionTypeId` on the `transaction_categories` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `transaction_types` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transaction_types` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `users` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `uuid` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `transaction_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `transaction_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_ibfk_1`;

-- DropForeignKey
ALTER TABLE `transactions` DROP FOREIGN KEY `transactions_ibfk_2`;

-- DropForeignKey
ALTER TABLE `transaction_categories` DROP FOREIGN KEY `transaction_categories_ibfk_1`;

-- AlterTable
ALTER TABLE `transactions` DROP PRIMARY KEY,
    ADD COLUMN     `uuid` VARCHAR(191) NOT NULL,
    MODIFY `id` INT NOT NULL AUTO_INCREMENT,
    MODIFY `userId` INT NOT NULL,
    MODIFY `transactionCategoryId` INT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transaction_categories` DROP PRIMARY KEY,
    ADD COLUMN     `uuid` VARCHAR(191) NOT NULL,
    MODIFY `id` INT NOT NULL AUTO_INCREMENT,
    MODIFY `transactionTypeId` INT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transaction_types` DROP PRIMARY KEY,
    ADD COLUMN     `uuid` VARCHAR(191) NOT NULL,
    MODIFY `id` INT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    ADD COLUMN     `uuid` VARCHAR(191) NOT NULL,
    MODIFY `id` INT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `transactions` ADD FOREIGN KEY (`transactionCategoryId`) REFERENCES `transaction_categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_categories` ADD FOREIGN KEY (`transactionTypeId`) REFERENCES `transaction_types`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
