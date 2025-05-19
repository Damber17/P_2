/*
  Warnings:

  - You are about to drop the column `img` on the `Event` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "img",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
