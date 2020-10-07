const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { snakeCase } = require('lodash');

const config = require('../../config/db');
const seedFunc = require('../../data/seed');

const {
    database,
    username,
    password,
    host,
    port,
    dialect,
    pool,
    force,
    seed
} = config;

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
    pool
});

const models = {};

sequelize.beforeDefine((attrs, options) => {
    for (let attr in attrs) {
        attrs[attr].field = snakeCase(attr); // Custom attributes.
    }

    options.tableName = snakeCase(options.name.plural);
    options.underscored = true; // Default attributes (ex. created_at).
});

fs.readdirSync(__dirname).forEach((file) => {
    if ((file.indexOf('.') === 0) || (file === 'index.js')) {
        return;
    }

    const model = sequelize.import(path.join(__dirname, file));

    console.log(`imported ${ file }`);

    models[model.name] = model;
});

// NOTE: Parent associations have to be created before child associations.
Object.keys(models).forEach((modelName) => {
    const model = models[modelName];

    if ('associateParents' in model) {
        model.associateParents(models);

        console.log(`created parent associations for ${ modelName }`);
    }
});

Object.keys(models).forEach((modelName) => {
    const model = models[modelName];

    if ('associateChildren' in model) {
        model.associateChildren(models);

        console.log(`created child associations for ${ modelName }`);
    }
});

sequelize.sync({ force }).then(() => {
    console.log("sync complete");

    if (force && seed) {
        seedFunc(models);
    }
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

models.sequelize = sequelize;
module.exports = models;