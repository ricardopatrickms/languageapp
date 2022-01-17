import { IAnswer } from "./IAnswer";
import { IQuestion } from "./IQuestion";

export interface IData {
    id: number;
    question: IQuestion;
    answers: IAnswer[];
}
