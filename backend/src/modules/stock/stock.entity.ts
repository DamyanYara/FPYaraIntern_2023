import { Warehouse } from '../warehouse/warehouse.entity';
import { Product } from '../product/product.entity';
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
} from 'sequelize-typescript';

@Table
export class Stock extends Model<Stock> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull
  @Column({
    type: DataType.INTEGER,
  })
  amount: number;

  @AllowNull
  @Column({
    type: DataType.DATE,
  })
  date: Date;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Warehouse,
      key: 'id',
    },
  })
  warehouseId: number;

  @BelongsTo(() => Warehouse)
  warehouse: Warehouse;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  //TODO: Foreign Key + relationships
}
