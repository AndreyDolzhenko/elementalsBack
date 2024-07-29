type UserT = { 
    id: number,
    login: string,
    fio: string,
    mail: string,
    password: string,
    salt: string,    
}

type CreateUser = Omit<UserT, "id">

type SignUpUser = Omit<UserT, "id" | "salt">

export { UserT, CreateUser, SignUpUser };
