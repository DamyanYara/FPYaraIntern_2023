import { User } from '../users/user.entity';
import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Stock } from '../stock/stock.entity';
import { Transfer } from '../transfer/transfer.entity';

@Table
export class Warehouse extends Model<Warehouse> {
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
  name: string;

  @AllowNull
  @Column({
    type: DataType.INTEGER,
  })
  size: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Stock)
  stock: Stock;

  @HasMany(() => Transfer, 'from_warehouseId')
  transfers_from: Transfer[];

  @HasMany(() => Transfer, 'to_warehouseId')
  transfers_to: Transfer[];

  //TODO: Foreign Key + relationships
}
