import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateFlowDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  region: string


  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  day: number
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  month: number
  
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  total: number
}
