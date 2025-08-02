
import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { UploadModule } from '../upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UploadModule,PrismaModule],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
