import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;
  @IsNotEmpty()
  @IsStrongPassword()
  @IsString()
  @Field()
  password: string;
}
