import { UUID } from "crypto";

type UserT = { 
    id: number,
    login: string,
    fio: string,
    mail: string,
    password: string,
    salt: string,

}

type LastTryT = {
    id: string,
    brandName: string;
    selectedOption: string;
    correctOption: string;
    answer_status: boolean;
    userId: number;
}

type CreateUser = Omit<UserT, "id">

type SignUpUser = Omit<UserT, "id" | "salt">

export { UserT, CreateUser, SignUpUser, LastTryT };
