export type UserType = {
    name: string,
    id: number,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

export type ApiGetUsersType = {
    items: UserType[]
    totalCount: number,
    error: any
}

export type ApiResponse = {
    resultCode: number;
    messages: string[],
    data: any
}

export type ApiLogin = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
