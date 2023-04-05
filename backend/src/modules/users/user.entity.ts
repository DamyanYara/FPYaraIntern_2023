import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript';

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
  })
  email: string;

  @AllowNull
  @Column({
    type: DataType.TEXT,
  })
  password: string;
}
