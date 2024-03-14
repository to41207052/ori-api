import { IsNotEmpty } from 'class-validator';

export class findAccountDto {
  @IsNotEmpty()
  id!: string;

  @IsNotEmpty()
  pass!: string;
}
