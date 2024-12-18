import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import { StudentController } from './controller/student/student.controller';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_ROOT ?? 'mongodb://localhost:27017/estudiantes_nestjs'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
