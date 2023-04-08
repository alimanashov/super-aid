import {cohere} from "@/api/index";
import axios from "axios";
import {firstAidClassificationExamples, randomQuestionsClassificationExample} from "@/api/classifiactions-examples";

export async function classifyQuestion(questionText: string): Promise<"help" | "non help"> {
    try {
        const res = await cohere.post("/classify", {
            inputs: [questionText],
            examples: [...firstAidClassificationExamples, ...randomQuestionsClassificationExample],
        });
        console.log(res.data);
        if (res.data.classifications[0].labels.help.confidence > res.data.classifications[0].labels["non help"].confidence)
            return "help";
        else
            return "non help";
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            console.log(err.response);
        }
        return "non help";
    }
}

export async function generateAnswerForQuestion(questionText: string) {
    try {
        const res = await cohere.post("");
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            console.log(err.response);
        }
    }
}
