export interface Chat {
    messages: Array<UserMessage | ModelResponse>,
}

export interface UserMessage {
    message: string,
    timestamp: number,
    passedClassification: boolean,
    classificationResult: number,
}

export interface ModelResponse {
    message: string,
    timestamp: number,
}