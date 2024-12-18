import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Student {
   @Prop()
   nombre: string;

   @Prop()
   genero: string;

   @Prop()
   clase: number;

   @Prop()
   nota: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);