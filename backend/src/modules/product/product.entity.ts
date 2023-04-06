import { Warehouse } from '../warehouse/warehouse.entity';
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
export class Product extends Model<Product> {
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
  sizeUnit: number;

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

  //TODO: Foreign Key + relationships
}
