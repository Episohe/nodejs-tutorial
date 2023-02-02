import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositivePipe } from '../common/pipes/positive.pipe';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'get all cat ';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositivePipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
