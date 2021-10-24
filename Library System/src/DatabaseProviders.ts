import { Sequelize } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'services',
      });

      await sequelize.sync();

      const _books = require('./models/books');
      const _library = require('./models/library');
      const _library_books = require('./models/library_books');
      const books = _books(sequelize, DataTypes);
      const library = _library(sequelize, DataTypes);
      const library_books = _library_books(sequelize, DataTypes);

      const models = {
        books,
        library,
        library_books,
      };

      return sequelize;
    },
  },
];
