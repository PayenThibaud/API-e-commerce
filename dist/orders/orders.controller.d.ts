import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(uuid: string): string;
    update(uuid: string, updateOrderDto: UpdateOrderDto): string;
    remove(uuid: string): string;
}
