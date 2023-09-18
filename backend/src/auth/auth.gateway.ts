import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';

@WebSocketGateway(8443,{
  cors: {
    origin: ['https://defischool.atitude247.com.br'],
    credentials: true,
  },
})
export class AuthGateway {
  private connectedSessions: Map<string, any> = new Map();

  constructor(
    private readonly authService: AuthService
  ) { }

  @SubscribeMessage("auth_emit_qr")
  handleQrcodeMessage(client: any, payload: any): string {
    const data = this.authService.generateQrcode()

    this.connectedSessions.set(data.nonce, client);

    return data.url
  }

  // Function to retrieve socket instance by nonce ID
  getSocketByNonce(nonceId: string): any {
    return this.connectedSessions.get(nonceId);
  }

  sendMessageByNonce(nonceId: string, message: string, payload: any) {
    const socket = this.getSocketByNonce(nonceId)

    socket.emit(message, { message: payload })
  }
}
