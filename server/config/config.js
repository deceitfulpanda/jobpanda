// IMPORTANT
// Bookshelf is pretty inflexible about column names and relationships.
// We didn't have time to test, but because we used 'tablename_id' instead of
// just 'id' for the primary key of each table, bookshelf-defined relationships
// did not work. There may be value in renaming all primary keys simply to 'id'
// and letting bookshelf do most of the relationship work. 

/*==================== REQUIRE DEPENDENCIES ====================*/
var Bookshelf = require('bookshelf');
var path = require('path');

/*====== INITIALIZE BOOKSHELF CONNECTION TO POSTGRESS DB ======*/
var db = Bookshelf.initialize({
	client: 'mysql',
	connection: {
		host: process.env.JAWSDB_URL || 'localhost'/*Local Host for testing, ENV host for deployment*/,
    port: process.env.JAWSDB_PORT || 8000,
		user: process.env.JAWSDB_USER || 'root',
		password: process.env.JAWSDB_PW || '',
		database: process.env.JAWSDB_DB || 'jobpanda',
		charset: 'utf8'
	}
});

//Bookshelf has poor out-of-box support for many-to-many relationships
//registry plug-in is needed for bookshelf defined many-to-many's
//besides plugin dependency, registry plugin code is not yet implemented in model files
db.plugin('registry');

/*================ INITIALIZE TABLES WITH KNEX ================*/
//Initialize listings table if it doesn't already exist
db.knex.schema.hasTable('listings').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('listings', function (listing) {
      listing.increments('id').primary();
      listing.integer('location_id');
      listing.integer('position_id');
      listing.integer('source_id');
      listing.integer('field_id');
      listing.string('url', 255);
      listing.string('app_url', 255);
      listing.string('employment_type', 50);
      listing.string('experience', 50);
      listing.string('salary', 100);
      listing.string('response_type', 100);
      listing.date('post_date');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize locations table if it doesn't already exist
db.knex.schema.hasTable('locations').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('locations', function (location) {
      location.increments('id').primary();
      location.integer('company_id');
      location.string('url', 255);
      location.string('address', 255);
      location.string('city', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize companies table if it doesn't already exist
db.knex.schema.hasTable('companies').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('companies', function (company) {
      company.increments('id').primary();
      company.integer('industry_id');
      company.string('url', 255);
      company.string('company_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize industries table if it doesn't already exist
db.knex.schema.hasTable('industries').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('industries', function (industry) {
      industry.increments('id').primary();
      industry.string('industry', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize positions table if it doesn't already exist
db.knex.schema.hasTable('positions').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('positions', function (position) {
      position.increments('id').primary();
      position.string('position_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize fields table if it doesn't already exist
db.knex.schema.hasTable('fields').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('fields', function (field) {
      field.increments('id').primary();
      field.string('field_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize sources table if it doesn't already exist
db.knex.schema.hasTable('sources').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('sources', function (source) {
      source.increments('id').primary();
      source.string('source_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize users table if it doesn't already exist
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('user_name', 255);
      user.string('password', 255);
      user.string('email', 255);
      user.string('first_name', 255);
      user.string('last_name', 255);
      user.string('token', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize listings_users table if it doesn't already exist
db.knex.schema.hasTable('listings_users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('listings_users', function (application) {
      application.increments('id').primary();
      application.integer('user_id');
      application.integer('listing_id');
      application.string('status', 100);
      application.timestamp('created');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize listings_skills table if it doesn't already exist
db.knex.schema.hasTable('listings_skills').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('listings_skills', function (application) {
      application.increments('id').primary();
      application.integer('listing_id');
      application.integer('skill_id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize skills table if it doesn't already exist
db.knex.schema.hasTable('skills').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('skills', function (skill) {
      skill.increments('id').primary();
      skill.string('skill', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/*================ EXPORT DATABASE CONNECTION ================*/
module.exports = db;