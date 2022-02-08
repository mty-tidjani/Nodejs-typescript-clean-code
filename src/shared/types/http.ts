export type THttpRequest = {
    body: Record<string, any>,
    query: Record<string, any>,
    params: Record<string, any>,
    ip: string,
    method: string,
    path: string,
    headers: Record<string, any>
}

export type THttpResponse = {
    headers: Record<string, any>
    statusCode: number
    body: THttpResponseBody
}

type THttpResponseBody = {
    statusCode: number
    success: boolean
    result: any
    message?: string
}