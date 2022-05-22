import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as md5 from 'md5';
import { User, UserEmail } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /** Hash plain password to md5 */
  private hashPassword = (password: string) => {
    const hashed = md5(password);
    return hashed;
  };

  async validateUser(
    email: UserEmail,
    pass: string,
  ): Promise<Omit<User, 'password_hash'> | null> {
    const user = await this.usersService.findOne(email);
    if (user && this.hashPassword(pass) === user.password_hash) {
      // exclude password_hash from result
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Pick<User, 'email' | 'id'>) {
    const payload = { email: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
