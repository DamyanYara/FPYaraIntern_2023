import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { Warehouse } from '../warehouse/warehouse.entity';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull
  @Column({
    type: DataType.TEXT,
  })
  firstName: string;

  @AllowNull
  @Column({
    type: DataType.TEXT,
  })
  lastName: string;

  @AllowNull
  @Column({
    type: DataType.TEXT,
    unique: true,
  })
  email: string;

  @AllowNull
  @Column({
    type: DataType.TEXT,
  })
  password: string;

  @HasMany(() => Warehouse)
  warehouses: Warehouse[];
}
