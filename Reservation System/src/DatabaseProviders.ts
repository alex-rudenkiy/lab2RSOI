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

      const _reservation = require('./models/reservation');
      const reservation = _reservation(sequelize, DataTypes);

      const models = {
        reservation,
      };


      return sequelize;
    },
  },
];
