/*
  Warnings:

  - You are about to drop the column `test` on the `post` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `test`,
    ADD COLUMN `content` TEXT NOT NULL,
    MODIFY `createdAt` TIMESTAMP NULL;
