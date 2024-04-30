import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
  @Field()
  id: number;

  @Field()
  quantity: number;
}
