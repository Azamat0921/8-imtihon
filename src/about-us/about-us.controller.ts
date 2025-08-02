import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AboutUsService } from './about-us.service';
import { UploadService } from '../upload/upload.service';
import { CreateAboutUsDto } from './dto/create-about-us.dto';
import { Express } from 'express';

@Controller('about-us')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', UploadService.multerOptions))
  create(@Body() dto: CreateAboutUsDto, @UploadedFile() file: Express.Multer.File) {
    return this.aboutUsService.create(dto, file.filename);
  }

  @Get()
  findAll() {
    return this.aboutUsService.findAll();
  }
}
