export type THttpRequest = {
    body: any,
    query: any,
    params: any,
    ip: string,
    method: string,
    path: string,
    headers: any
}

export type THttpResponse = {
    headers?: any
    statusCode: number
    body: THttpResponseBody
}

type THttpResponseBody = {
    statusCode: number
    success: boolean
    result?: any
    message?: string
}