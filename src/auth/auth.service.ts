import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as Jwt from 'jsonwebtoken';
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-user.dto";


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }
  registerUser(createUserDto: CreateUserDto) {
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
    return this.userRepository.save(createUserDto);
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        userEmail: loginUserDto.userEmail,
      },
    });
    const match = await bcrypt.compare(
      loginUserDto.userPassword,
      user.userPassword,
    );
    if (!match) throw new UnauthorizedException('Invalid credentials')
    const payload = {
      user: user.userEmail,
      password: user.userPassword,
    };
    const token = this.jwtService.sign(payload);
    return token;
  }
}
