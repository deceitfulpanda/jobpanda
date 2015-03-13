-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'listings'
-- 
-- ---

DROP TABLE IF EXISTS `listings`;
    
CREATE TABLE `listings` (
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
  `id_Skills` INTEGER NULL DEFAULT NULL,
  `post_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'locations'
-- 
-- ---

DROP TABLE IF EXISTS `locations`;
    
CREATE TABLE `locations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `company_id` INTEGER NULL DEFAULT NULL,
  `address` VARCHAR NULL DEFAULT NULL,
  `city` VARCHAR NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listings_users'
-- 
-- ---

DROP TABLE IF EXISTS `listings_users`;
    
CREATE TABLE `listings_users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listing_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `application_status` VARCHAR NULL DEFAULT NULL,
  `favorite` bit NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'compoanies'
-- 
-- ---

DROP TABLE IF EXISTS `compoanies`;
    
CREATE TABLE `compoanies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Industries` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'positions'
-- 
-- ---

DROP TABLE IF EXISTS `positions`;
    
CREATE TABLE `positions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `position` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'industries'
-- 
-- ---

DROP TABLE IF EXISTS `industries`;
    
CREATE TABLE `industries` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `industry` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'fields'
-- 
-- ---

DROP TABLE IF EXISTS `fields`;
    
CREATE TABLE `fields` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `field_name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sources'
-- 
-- ---

DROP TABLE IF EXISTS `sources`;
    
CREATE TABLE `sources` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `source` VARCHAR NULL DEFAULT NULL,
  `source_url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'skills'
-- 
-- ---

DROP TABLE IF EXISTS `skills`;
    
CREATE TABLE `skills` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `skill` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'listings_skills'
-- 
-- ---

DROP TABLE IF EXISTS `listings_skills`;
    
CREATE TABLE `listings_skills` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `skill_id` INTEGER NULL DEFAULT NULL,
  `listing_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `listings` ADD FOREIGN KEY (location_id) REFERENCES `locations` (`id`);
ALTER TABLE `listings` ADD FOREIGN KEY (position_id) REFERENCES `positions` (`id`);
ALTER TABLE `listings` ADD FOREIGN KEY (field_id) REFERENCES `fields` (`id`);
ALTER TABLE `listings` ADD FOREIGN KEY (source_id) REFERENCES `sources` (`id`);
ALTER TABLE `locations` ADD FOREIGN KEY (company_id) REFERENCES `compoanies` (`id`);
ALTER TABLE `listings_users` ADD FOREIGN KEY (listing_id) REFERENCES `listings` (`id`);
ALTER TABLE `listings_users` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `compoanies` ADD FOREIGN KEY (id_Industries) REFERENCES `industries` (`id`);
ALTER TABLE `listings_skills` ADD FOREIGN KEY (skill_id) REFERENCES `skills` (`id`);
ALTER TABLE `listings_skills` ADD FOREIGN KEY (listing_id) REFERENCES `listings` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listings_users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `compoanies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `positions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `industries` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `fields` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sources` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `skills` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listings_skills` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `listings` (`id`,`location_id`,`position_id`,`url`,`employment_type`,`experience`,`salary`,`response_type`,`field_id`,`source_id`,`id_Skills`,`post_date`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `locations` (`id`,`company_id`,`address`,`city`,`url`) VALUES
-- ('','','','','');
-- INSERT INTO `listings_users` (`id`,`listing_id`,`user_id`,`timestamp`,`application_status`,`favorite`) VALUES
-- ('','','','','','');
-- INSERT INTO `compoanies` (`id`,`id_Industries`,`name`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `positions` (`id`,`position`) VALUES
-- ('','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `industries` (`id`,`industry`) VALUES
-- ('','');
-- INSERT INTO `fields` (`id`,`field_name`) VALUES
-- ('','');
-- INSERT INTO `sources` (`id`,`source`,`source_url`) VALUES
-- ('','','');
-- INSERT INTO `skills` (`id`,`skill`) VALUES
-- ('','');
-- INSERT INTO `listings_skills` (`id`,`skill_id`,`listing_id`) VALUES
-- ('','','');