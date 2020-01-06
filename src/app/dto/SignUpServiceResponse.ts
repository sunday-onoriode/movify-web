import {UserDTO} from './UserDTO';

export class SignUpServiceResponse {
  code: number;
  message: string;
  data: UserDTO;
}

