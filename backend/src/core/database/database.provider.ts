import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST } from '../constants/index';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/users/user.entity';
import { Product } from 'src/modules/product/product.entity';
import { Warehouse } from 'src/modules/warehouse/warehouse.entity';
import { Stock } from 'src/modules/stock/stock.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Product, Warehouse, Stock]); //here are the models (User etc.)
      await sequelize.sync();
      return sequelize;
    },
  },
];
