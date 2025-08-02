
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateHeroDto, image: string) {
    return this.prisma.hero.create({
      data: {
        title: dto.title,
        subtitle: dto.subtitle,
        imageUrl: `/uploads/${image}`,
      },
    });
  }

  findAll() {
    return this.prisma.hero.findMany();
  }
}
