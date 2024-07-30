type UserT = { 
    id: number,
    login: string,
    fio: string,
    mail: string,
    password: string,
    salt: string, 
    profile?: string | null,   
}

type UpdateUser = Partial<Omit<UserT, "id" | "salt" | "password">>

type CreateUser = Omit<UserT, "id">

type SignUpUser = Omit<UserT, "id" | "salt" | "profile">

export { UserT, CreateUser, SignUpUser, UpdateUser };
