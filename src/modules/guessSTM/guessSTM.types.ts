type LastTryT = {
    id: string,
    brandName: string;
    selectedOption: string;
    correctOption: string;
    answer_status: boolean;
    userId: number;
}

type DataOfLastTry = Omit<LastTryT, "id" | "userId">;

export { LastTryT, DataOfLastTry };
