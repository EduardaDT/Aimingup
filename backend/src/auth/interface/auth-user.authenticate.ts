import { IsNotEmpty, IsObject, IsString, isObject } from "class-validator";

export class UserAuthenticate {

    @IsString()
    auth_adr: string;

    @IsString()
    auth_sig: string;

    @IsString()
    device: string;

    @IsString()
    nonce: string;

    @IsString()
    salt: string;

    @IsString()
    sig_domain: string;

    sig_target: {
        ETH: string
    };

    @IsString()
    signatures: any;

    @IsString()
    uri: string;

    @IsString()
    wallet_name: string;

    @IsString()
    xauth_adr: string;

    @IsString()
    xauth_sig: string;

    target_adr: { ETH: string };

    @IsString()
    client_version: string
}