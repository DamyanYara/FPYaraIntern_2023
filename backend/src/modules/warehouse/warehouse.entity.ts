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
} from 'sequelize-typescript';

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

  //TODO: Foreign Key + relationships
}
