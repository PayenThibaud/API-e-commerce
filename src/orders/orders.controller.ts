import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.ordersService.findOne(+uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+uuid, updateOrderDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.ordersService.remove(+uuid);
  }
}
