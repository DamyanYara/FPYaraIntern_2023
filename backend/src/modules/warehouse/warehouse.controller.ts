import {
  Controller,
  Body,
  Post,
  Get,
  UseGuards,
  Request,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WarehouseDto } from './dto/warehouse.dto';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';
import { User } from '../users/user.entity';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  // Using the users token from the create user, to authenticate for the creating of the warehouse
  // akspecific user can create, delete, update specific warehouse
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(
    @Body() warehouse: WarehouseDto,
    @Request() req,
  ): Promise<Warehouse> {
    return await this.warehouseService.create(warehouse, req.user.id);
  }
  // Retrieving all Wahrehouses By user Id after login token authentication
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req): Promise<Warehouse[]> {
    return await this.warehouseService.findAll(req.user.id);
  }

  // Edit
  //Deleting warehouse by id, after token authentication from sertain user
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteWarehouse(@Param('id') id: number, @Request() req) {
    return await this.warehouseService.delete(id, req.user.id);
  }
}
