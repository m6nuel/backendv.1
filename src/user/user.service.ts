import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const search = await this.userRepository.findOneBy({ id });
    if (!search) {
      throw new BadGatewayException(
        `El usuario con el id: ${id} no se encontro`,
      );
    }
    return search;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.userRepository.softDelete(id);
  }
}
