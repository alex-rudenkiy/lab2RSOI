import { Sequelize } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.db_host || 'localhost',
        port: 5432,
        username: process.env.db_user || 'postgres',
        password: process.env.db_password || 'postgres',
        database: process.env.db_database || 'services',
      });

      await sequelize.sync();

      const _rating = require('./models/rating')
      const rating = _rating(sequelize, DataTypes);

      const models = {
        rating,
      };

      return sequelize;
    },
  },
];
