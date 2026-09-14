-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'ADMIN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wedding_sites` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `groomName` VARCHAR(191) NOT NULL,
    `brideName` VARCHAR(191) NOT NULL,
    `groomFullName` VARCHAR(191) NOT NULL,
    `brideFullName` VARCHAR(191) NOT NULL,
    `groomParents` VARCHAR(191) NOT NULL,
    `brideParents` VARCHAR(191) NOT NULL,
    `groomInstagram` VARCHAR(191) NULL,
    `brideInstagram` VARCHAR(191) NULL,
    `weddingDate` DATETIME(3) NOT NULL,
    `weddingTime` VARCHAR(191) NOT NULL,
    `venueName` VARCHAR(191) NOT NULL,
    `venueAddress` VARCHAR(191) NOT NULL,
    `coverImage` TEXT NULL,
    `quote` TEXT NULL,
    `loveStory` TEXT NULL,
    `galleryImages` JSON NULL,
    `eventSchedule` JSON NULL,
    `bankAccounts` JSON NULL,
    `donationLink` VARCHAR(191) NULL,
    `themeSlug` VARCHAR(191) NOT NULL,
    `songUrl` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `expiredDate` DATETIME(3) NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `wedding_sites_userId_key`(`userId`),
    UNIQUE INDEX `wedding_sites_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `wedding_sites` ADD CONSTRAINT `wedding_sites_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
