type UserT = { 
    id: number,
    login: string,
    fio: string,
    mail: string,
    password: string,
    salt: string,

}

type CreateUser = Omit<UserT, "id">

export { UserT, CreateUser };
