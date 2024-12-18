import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    readonly nombre: string;
    
    @IsString()
    @MaxLength(25)
    @IsNotEmpty()
    readonly genero: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly clase: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly nota: number;
}