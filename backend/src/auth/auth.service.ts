import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as dotenv from 'dotenv';
import { JwtService } from '@nestjs/jwt';
import { UserAuthenticate } from './interface/auth-user.authenticate';

dotenv.config();

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async authenticateUser(data: UserAuthenticate) {
    const payload = {
      sub: data.nonce,
      target_adr: data.target_adr,
      uri: data.uri,
      wallet_name: data.wallet_name,
      auth_adr: data.auth_adr,
      auth_sig: data.auth_sig,
      salt: data.salt,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  generateQrcode(): { url: string; nonce: string } {
    const nonce = crypto.randomBytes(16).toString('hex');
    return {
      url: `https://zeniq.id/${process.env.BACKEND_API}/auth/authenticated?n=${nonce}&r=/auth/scanning&t=1&tETH&d=1&w=1`,
      nonce,
    };
  }
}
