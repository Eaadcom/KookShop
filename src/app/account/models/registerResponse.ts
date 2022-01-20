import {Account} from "./account";

export class RegisterResponse{

  constructor(
    public account?: Account,
    public message?: string,
  ) {}

}
