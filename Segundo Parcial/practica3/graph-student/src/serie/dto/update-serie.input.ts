import { IsUUID } from 'class-validator';
import { CreateSerieInput } from './create-serie.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSerieInput extends PartialType(CreateSerieInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
