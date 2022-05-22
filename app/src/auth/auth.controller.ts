import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiParam, ApiProperty } from '@nestjs/swagger';
import { User, UserEmail } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { InfoJwtAuthGuard } from './guards/info-jwt-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

class UserLoginDto {
  @ApiProperty({ type: 'string' })
  email: UserEmail;
  @ApiProperty({ type: 'string' })
  password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: UserLoginDto,
  })
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/testLogin')
  /**
   * this is a simple route to test login!
   *
   * it should not be handled if it does not pass jwt basic guard
   */
  async testLogin() {
    return { statusCode: 200 };
  }

  @UseGuards(InfoJwtAuthGuard)
  @Get('/testInfoJwt')
  async testInfoJwt(@Request() req) {
    return { isUserLogged: req.user !== null, user: req.user };
  }
}
