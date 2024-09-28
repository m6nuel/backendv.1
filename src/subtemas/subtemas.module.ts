import { Module } from '@nestjs/common';
import { SubtemasService } from './subtemas.service';
import { SubtemasController } from './subtemas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subtema])],
  controllers: [SubtemasController],
  providers: [SubtemasService],
})
export class SubtemasModule {}
