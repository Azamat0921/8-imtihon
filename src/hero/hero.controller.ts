// import { Controller, Get } from '@nestjs/common';
// import { heroService } from './hero.service';

// @Controller('hero')
// export class HeroController {
//     constructor(private heroService: heroService){}
//     @Get()

//     getHeroDetails(){
//         return this.heroService.getHeroDetails();
//     }
// }




// import {
//   Controller,
//   Post,
//   Body,
//   UploadedFile,
//   UseInterceptors,
//   Get,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { CreateHeroDto } from './dto/create-hero.dto';
// import { HeroService } from './hero.service';
// import { UploadService } from '../upload/upload.service';
// import { Express } from 'express';

// @Controller('hero')
// export class HeroController {
//   constructor(private readonly heroService: HeroService) {}

//   @Post()
//   @UseInterceptors(FileInterceptor('image', UploadService.multerOptions))
//   create(@Body() dto: CreateHeroDto, @UploadedFile() file: Express.Multer.File) {
//     return this.heroService.create(dto, file.filename);
//   }

//   @Get()
//   findAll() {
//     return this.heroService.findAll();
//   }
// }


import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UploadService } from '../upload/upload.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', UploadService.multerOptions))
  async create(
    @Body() dto: CreateHeroDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new HttpException('Image fayl yuborilmadi', HttpStatus.BAD_REQUEST);
    }

    return this.heroService.create(dto, file.filename);
  }

  @Get()
  findAll() {
    return this.heroService.findAll();
  }
}
