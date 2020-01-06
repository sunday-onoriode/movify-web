import {UserDTO} from './UserDTO';

export class LoginServiceResponse {
  code: number;
  message: string;
  data: UserDetail;
}

class UserDetail {
  id: number;
  fullName: string;
  email: string;
  token: string;
}

