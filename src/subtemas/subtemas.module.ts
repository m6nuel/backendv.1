import { Module } from '@nestjs/common';
import { SubtemasService } from './subtemas.service';
import { SubtemasController } from './subtemas.controller';

@Module({
  controllers: [SubtemasController],
  providers: [SubtemasService],
})
export class SubtemasModule {}
