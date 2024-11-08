import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Auth } from "src/auth/decorators/auth.decorator";
import { ROLES } from "src/auth/constants/roles.constants";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Employee } from "./entities/employee.entity";
import { ApiAuth } from "src/auth/decorators/api.decorator";

@ApiAuth()
@ApiTags("Employees")
@Controller("employees")
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService
    //private readonly awsService: AwsService
  ) {}

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
      employeeId: "uuid",
      employeeName: "Juan",
      employeeLastName: "Alvarez",
      employeeEmail: "example@gmail.com",
      phoneNumber: "1234567890",
    } as Employee,
  })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Post(":id/upload")
  @UseInterceptors(
    FileInterceptor("file", {
      dest: "./src/employees/employees-photos",
    })
  )
  async uploadPhoto(
    //@Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return "https://i.pinimg.com/originals/b0/70/1a/b0701aa6ae2a696e7caf2f4a57eef5e8.jpg";
    /* const response = await this.awsService.uploadFile(file);
    return this.employeesService.update(id, {
      employeePhoto: response
    })
    */
  }

  @Auth(ROLES.MANAGER)
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @Get(":id")
  findOne(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.employeesService.findOne(id);
  }

  @Auth(ROLES.MANAGER)
  @Get("location/:id")
  findAllLLocaction(@Param("id") id: string) {
    return this.employeesService.findAllByLocation(+id);
  }

  @Auth(ROLES.MANAGER, ROLES.EMPLOYEE)
  @Patch(":id")
  update(
    @Param("id", new ParseUUIDPipe({ version: "4" })) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Auth(ROLES.MANAGER)
  @Delete(":id")
  remove(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.employeesService.remove(id);
  }
}
