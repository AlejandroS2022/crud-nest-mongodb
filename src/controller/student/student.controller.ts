import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { StudentService } from 'src/service/student/student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    
    @Post()
    async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDto) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'El estudiante fue registrado exitosamente',
                newStudent,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: No se pudo registrar al estudiante!',
                error: 'Solicitud incorrecta'
            });
        }
    }
    
    @Put('/:id')
    async updateStudent(@Res() response,@Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto) {
        try {
            const existingStudent = await this.studentService.updateStudent(id, updateStudentDto);
            return response.status(HttpStatus.OK).json({
                message: 'El estudiante fue actualizado exitosamente',
                existingStudent,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    
    @Get()
    async getStudents(@Res() response) {
        try {
            const data = await this.studentService.getAllStudents();
            return response.status(HttpStatus.OK).json({
                message: 'Listado de estudiantes cargado exitosamente', data,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    
    @Get('/:id')
    async getStudent(@Res() response, @Param('id') id: string) {
        try {
            const existingStudent = await this.studentService.getStudent(id);
            return response.status(HttpStatus.OK).json({
                message: 'Estudiante encontrado exitosamente', existingStudent,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteStudent(@Res() response, @Param('id') id: string) {
        try {
            const deletedStudent = await this.studentService.deleteStudent(id);
            return response.status(HttpStatus.OK).json({
                message: 'Estudiante eliminado exitosamente',
                deletedStudent,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
