import {cohere} from "@/api/index";
import axios from "axios";
import {firstAidClassificationExamples, randomQuestionsClassificationExample} from "@/api/classifiactions-examples";

export async function classifyQuestion(questionText: string): Promise<number> {
    try {
        const res = await cohere.post("/classify", {
            inputs: [questionText],
            examples: [...firstAidClassificationExamples, ...randomQuestionsClassificationExample],
        });
        console.log(res.data);
        return res.data.classifications[0].labels.help.confidence;
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            console.log(err.response);
        }
        return 0;
    }
}

export async function generateAnswerForQuestion(
    prompt: string,
    questionText: string
): Promise<string> {
    try {
        const res = await cohere.post("/generate", {
            max_tokens: 300,
            prompt: `${prompt}. ${questionText}`,
        });
        console.log(res.data)
        return res.data.generations[0].text;
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            console.log(err.response);
        }
        return "Error occurred!";
    }
}

export async function continueAnswerForQuestion(): Promise<string> {
    try {
        const res = await cohere.post("/generate", {
            max_tokens: 300,
            prompt: "Continue the answer",
        });
        console.log(res.data);
        return res.data.generations[0].text;
    } catch (err) {
        console.log(err)
        if (axios.isAxiosError(err)) {
            console.log(err.response)
        }
        return "Error occurred!";
    }
}
