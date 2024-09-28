import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSubtemaDto } from './dto/create-subtema.dto';
import { UpdateSubtemaDto } from './dto/update-subtema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubtemasService {
  constructor(
    @InjectRepository(Subtema)
    private readonly subtemaRepository: Repository<Subtema>,
  ) {}
  async create(createSubtemaDto: CreateSubtemaDto) {
    return await this.subtemaRepository.save(createSubtemaDto);
  }

  async findAll() {
    return await this.subtemaRepository.find();
  }

  async findOne(id: number) {
    const search = await this.subtemaRepository.findOneBy({ id });
    if (!search) {
      throw new BadRequestException('No se encontro');
    }
    return search;
  }

  async update(id: number, updateSubtemaDto: UpdateSubtemaDto) {
    await this.findOne(id);
    return await this.subtemaRepository.update(id, updateSubtemaDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.subtemaRepository.softDelete(id);
  }
}
