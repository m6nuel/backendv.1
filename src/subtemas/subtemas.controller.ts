import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubtemasService } from './subtemas.service';
import { CreateSubtemaDto } from './dto/create-subtema.dto';
import { UpdateSubtemaDto } from './dto/update-subtema.dto';

@Controller('subtemas')
export class SubtemasController {
  constructor(private readonly subtemasService: SubtemasService) {}

  @Post()
  create(@Body() createSubtemaDto: CreateSubtemaDto) {
    return this.subtemasService.create(createSubtemaDto);
  }

  @Get()
  findAll() {
    return this.subtemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtemasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubtemaDto: UpdateSubtemaDto) {
    return this.subtemasService.update(+id, updateSubtemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtemasService.remove(+id);
  }
}
