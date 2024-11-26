export interface UserTokenDtoModel {
  accessToken: string;
  user: User
}

export interface User{
  id: number;
  email: string;
}
