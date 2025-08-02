import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePricingDto } from './dto/create-pricing.dto';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePricingDto) {
    return this.prisma.pricing.create({ data: dto });
  }

  findAll() {
    return this.prisma.pricing.findMany();
  }
}
