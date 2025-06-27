-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "bd_lead" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lead_name" TEXT NOT NULL,
    "lead_source" TEXT NOT NULL,
    "lead_description" TEXT NOT NULL,
    "lead_stage" TEXT NOT NULL,
    "lead_created_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "contact_no" TEXT NOT NULL,
    "secondary_no" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
