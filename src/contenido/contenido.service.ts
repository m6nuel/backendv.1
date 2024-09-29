import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contenido } from './entities/contenido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContenidoService {
  constructor(
    @InjectRepository(Contenido)
    private readonly contenidoRepository: Repository<Contenido>,
  ) {}
  async create(createContenidoDto: CreateContenidoDto) {
    return await this.contenidoRepository.save(createContenidoDto);
  }

  async findAll() {
    return await this.contenidoRepository.find();
  }

  async findOne(id: number) {
    const search = await this.contenidoRepository.findOneBy({ id });
    if (!search) {
      throw new BadRequestException('No se encontro el contenido');
    }
    return search;
  }

  async update(id: number, updateContenidoDto: UpdateContenidoDto) {
    await this.findOne(id);
    return await this.contenidoRepository.update(id, updateContenidoDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.contenidoRepository.softDelete(id);
  }
}
