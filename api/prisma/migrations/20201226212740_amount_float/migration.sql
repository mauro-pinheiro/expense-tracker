/*
  Warnings:

  - You are about to alter the column `amount` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE `transactions` MODIFY `amount` DECIMAL(65,30) NOT NULL;

-- CreateTable
CREATE TABLE `personal_access_tokens` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `tokenable_type` VARCHAR(191) NOT NULL,
    `tokenable_id` INT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `abilities` VARCHAR(191),
    `last_used_at` DATETIME(3),
    `created_at` DATETIME(3),
    `updated_at` DATETIME(3),
UNIQUE INDEX `personal_access_tokens.token_unique`(`token`),
INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
