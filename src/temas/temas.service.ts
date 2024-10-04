import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TemasService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createTemaDto: CreateTemaDto) {
    const user = await this.userRepository.findOne({
      where: { id: createTemaDto.userId },
      relations: ['user'],
    });

    // const user = await this.userRepository.findOne({
    //   where: { email: createTemaDto. },
    // });
    if (!user) {
      throw new BadRequestException('No existe el usuario');
    }
    console.log(user);
    return await this.temaRepository.save(createTemaDto);
  }

  async findAll() {
    return await this.temaRepository.find();
  }

  async findOne(id: number) {
    const search = await this.temaRepository.findOneBy({ id });
    if (!search) {
      throw new BadRequestException('No se encontro el tema solicitado');
    }
    return search;
  }

  async update(id: number, updateTemaDto: UpdateTemaDto) {
    await this.findOne(id);
    return await this.temaRepository.update(id, updateTemaDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.temaRepository.softDelete(id);
  }
}
