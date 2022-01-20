export class LoginResponse{

  constructor(
    public token?: string,
    public tokentype?: string,
    public expires_in?: string,
  ) {}

}
