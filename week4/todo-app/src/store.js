import { v4 as uuid4} from "uuid";

export const listoftodos = [
    {
        id: uuid4(),
        text: "goto gym",
        isCompleted: true
    },
    {
        id: uuid4(),
        text: "do landury",
        isCompleted: false
    }
]