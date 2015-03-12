/*==================== REQUIRE DEPENDENCIES ====================*/
var Bookshelf = require('bookshelf');
var path = require('path');

/*====== INITIALIZE BOOKSHELF CONNECTION TO POSTGRESS DB ======*/
var db = Bookshelf.initialize({
	client: 'postgres',
	connection: {
		host: process.env.DB_HOST || '127.0.0.1'/*Local Host for testing, ENV host for deployment*/,
		user: process.env.DB_USER || 'test_user',
		password: process.env.DB_PW || 'password',
		database: 'jobpanda',
		charset: 'utf8',
    port: ''//,
		//filename: path.join(__dirname, '../../db/jobpanda.postgres')
	}
});

/*================ INITIALIZE TABLES WITH KNEX ================*/
//Initialize listings table if it doesn't already exist
db.knex.schema.hasTable('listings').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('listings', function (listing) {
      listing.increments('listing_id').primary();
      listing.integer('location_id');
      listing.integer('position_id');
      listing.string('url', 255);
      listing.string('employment_type', 50);
      listing.string('experience', 50);
      listing.string('salary/wage', 100);
      listing.string('response_type', 100);
      listing.integer('field_id');
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
      location.increments('location_id').primary();
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
      company.increments('company_id').primary();
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
      industry.increments('industry_id').primary();
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
      position.increments('position_id').primary();
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
      field.increments('field_id').primary();
      field.string('field_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize users table if it doesn't already exist
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('user_id').primary();
      user.string('user_name', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

//Initialize jobs_users table if it doesn't already exist
db.knex.schema.hasTable('jobs_users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('jobs_users', function (application) {
      application.increments('id').primary();
      application.integer('user_id', 255);
      application.integer('job_id', 255);
      application.string('status', 100);
      application.timestamp();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/*================ EXPORT DATABASE CONNECTION ================*/
module.exports = db;