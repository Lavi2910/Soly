/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber,role]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_phoneNumber_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_role_key" ON "User"("phoneNumber", "role");
