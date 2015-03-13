-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'JobListings'
-- 
-- ---

DROP TABLE IF EXISTS `JobListings`;
		
CREATE TABLE `JobListings` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `location_id` INTEGER NULL DEFAULT NULL,
  `position_id` INTEGER NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  `employment_type` VARCHAR NULL DEFAULT NULL,
  `experience` VARCHAR NULL DEFAULT NULL,
  `salary` INTEGER NULL DEFAULT NULL,
  `response_type` INTEGER NULL DEFAULT NULL,
  `field_id` INTEGER NULL DEFAULT NULL,
  `source_id` INTEGER NULL DEFAULT NULL,
  `post_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Locations'
-- 
-- ---

DROP TABLE IF EXISTS `Locations`;
		
CREATE TABLE `Locations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `company_id` INTEGER NULL DEFAULT NULL,
  `address` VARCHAR NULL DEFAULT NULL,
  `city` VARCHAR NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Jobs to Users'
-- 
-- ---

DROP TABLE IF EXISTS `Jobs to Users`;
		
CREATE TABLE `Jobs to Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `job_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `application_status` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Companies'
-- 
-- ---

DROP TABLE IF EXISTS `Companies`;
		
CREATE TABLE `Companies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Industries` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Positions'
-- 
-- ---

DROP TABLE IF EXISTS `Positions`;
		
CREATE TABLE `Positions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `position` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Industries'
-- 
-- ---

DROP TABLE IF EXISTS `Industries`;
		
CREATE TABLE `Industries` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `industry` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Fields'
-- 
-- ---

DROP TABLE IF EXISTS `Fields`;
		
CREATE TABLE `Fields` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `field_name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Sources'
-- 
-- ---

DROP TABLE IF EXISTS `Sources`;
		
CREATE TABLE `Sources` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `source` VARCHAR NULL DEFAULT NULL,
  `source_url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `JobListings` ADD FOREIGN KEY (location_id) REFERENCES `Locations` (`id`);
ALTER TABLE `JobListings` ADD FOREIGN KEY (position_id) REFERENCES `Positions` (`id`);
ALTER TABLE `JobListings` ADD FOREIGN KEY (field_id) REFERENCES `Fields` (`id`);
ALTER TABLE `JobListings` ADD FOREIGN KEY (source_id) REFERENCES `Sources` (`id`);
ALTER TABLE `Locations` ADD FOREIGN KEY (company_id) REFERENCES `Companies` (`id`);
ALTER TABLE `Jobs to Users` ADD FOREIGN KEY (job_id) REFERENCES `JobListings` (`id`);
ALTER TABLE `Jobs to Users` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `Companies` ADD FOREIGN KEY (id_Industries) REFERENCES `Industries` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `JobListings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Jobs to Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Companies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Positions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Industries` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Fields` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Sources` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `JobListings` (`id`,`location_id`,`position_id`,`url`,`employment_type`,`experience`,`salary`,`response_type`,`field_id`,`source_id`,`post_date`) VALUES
-- ('','','','','','','','','','','');
-- INSERT INTO `Locations` (`id`,`company_id`,`address`,`city`,`url`) VALUES
-- ('','','','','');
-- INSERT INTO `Jobs to Users` (`id`,`job_id`,`user_id`,`timestamp`,`application_status`) VALUES
-- ('','','','','');
-- INSERT INTO `Companies` (`id`,`id_Industries`,`name`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `Positions` (`id`,`position`) VALUES
-- ('','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Industries` (`id`,`industry`) VALUES
-- ('','');
-- INSERT INTO `Fields` (`id`,`field_name`) VALUES
-- ('','');
-- INSERT INTO `Sources` (`id`,`source`,`source_url`) VALUES
-- ('','','');

