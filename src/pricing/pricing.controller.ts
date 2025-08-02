import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { PricingService } from './pricing.service';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post()
  create(@Body() dto: CreatePricingDto) {
    return this.pricingService.create(dto);
  }

  @Get()
  findAll() {
    return this.pricingService.findAll();
  }
}
