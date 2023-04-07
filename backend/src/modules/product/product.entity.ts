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

  @AllowNull
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({ defaultValue: false })
  is_hazardous: boolean;

  @AllowNull
  @Column({
    type: DataType.INTEGER,
  })
  sizeUnit: number;

  @HasMany(() => Stock)
  stock: Stock;

  //TODO: Foreign Key + relationships to Table Transfers
  // One-To Many relationship with "Stock" wich
}
