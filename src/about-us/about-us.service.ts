import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAboutUsDto } from './dto/create-about-us.dto';

@Injectable()
export class AboutUsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAboutUsDto, image: string) {
    return this.prisma.aboutUs.create({
      data: {
        description: dto.description,
        imageUrl: `/uploads/${image}`,
      },
    });
  }

  findAll() {
    return this.prisma.aboutUs.findMany();
  }
}
