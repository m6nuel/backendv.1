import { Module } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contenido } from './entities/contenido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contenido])],
  controllers: [ContenidoController],
  providers: [ContenidoService],
})
export class ContenidoModule {}
