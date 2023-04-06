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
import { Product } from '../product/product.entity';
import { Stock } from '../stock/stock.entity';

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

  @Column({ defaultValue: false })
  is_hazardous: boolean;

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

  @HasMany(() => Product)
  products: Product;

  @HasMany(() => Stock)
  stocks: Stock;

  //TODO: Foreign Key + relationships
}
