import UserType from "./types/UserType";

class User {
  id?: string = "";
  fullName: string;
  mobileNumber: number;
  password: string;
  type: UserType = "user";
  username?: string;

  constructor(
    fullName: string,
    mobileNumber: number,
    password: string,
    type: UserType
  ) {
    this.fullName = fullName;
    this.mobileNumber = mobileNumber;
    this.password = password;
    this.type = type;
  }

  setId(id: string) {
    this.id = id;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

export default User;
