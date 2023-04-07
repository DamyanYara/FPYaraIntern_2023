import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../product/product.entity';
import { Warehouse } from '../warehouse/warehouse.entity';

@Table
export class Transfer extends Model<Transfer> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_import: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

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

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Warehouse,
      key: 'id',
    },
  })
  from_warehouseId: number;

  @BelongsTo(() => Warehouse, 'from_warehouseId')
  from_warehouse: Warehouse;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: Warehouse,
      key: 'id',
    },
  })
  to_warehouseId: number;

  @BelongsTo(() => Warehouse, 'to_warehouseId')
  to_warehouse: Warehouse;
}
