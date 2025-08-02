import { Module } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { AboutUsController } from './about-us.controller';
import { UploadModule } from '../upload/upload.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UploadModule,PrismaModule],
  controllers: [AboutUsController],
  providers: [AboutUsService],
})
export class AboutUsModule {}
