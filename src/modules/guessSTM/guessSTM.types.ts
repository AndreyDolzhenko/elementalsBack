type LastTryT = {
    id: string,
    brandName: string;
    selectedOption: string;
    correctOption: string;
    answer_status: boolean;
    userId: number;
}

type DataOfLastTry = Omit<LastTryT, "id" | "userId">;

type AttemptsT = {
    id: number,
    correct: number,
    uncorrect: number,  
    userId: number,
}

type CreateAttempts = {    
    correct: number,
    uncorrect: number,  
    userId: number,
}

type AllAttempts = Omit<CreateAttempts, "userId">

export { LastTryT, DataOfLastTry, AttemptsT, CreateAttempts, AllAttempts };
