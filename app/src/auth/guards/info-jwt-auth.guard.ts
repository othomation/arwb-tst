import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class InfoJwtAuthGuard extends JwtAuthGuard {
  handleRequest(err, user) {
    // return null instead of throw error
    if (err || !user) return null;
    return user;
  }
}
