import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { StockModule } from './modules/stock/stock.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { TransferModule } from './modules/transfer/transfer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    ProductModule,
    WarehouseModule,
    StockModule,
    TransferModule, //Adding service to the Users module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
