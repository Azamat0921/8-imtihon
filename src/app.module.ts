
import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { PricingModule } from './pricing/pricing.module';
import { AboutUsModule } from './about-us/about-us.module';
import { PrismaService } from './prisma/prisma.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [HeroModule, PricingModule, AboutUsModule, UploadModule],
  providers: [PrismaService],
})
export class AppModule {}
