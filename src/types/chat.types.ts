export interface Chat {
    messages: Array<UserMessage | ModelResponse>,
    emergency: boolean,
}

export interface UserMessage {
    message: string,
    timestamp: number,
    passedClassification: boolean,
    classificationResult: number,
    location?: GeolocationPosition,
}

export interface ModelResponse {
    message: string,
    timestamp: number,
}