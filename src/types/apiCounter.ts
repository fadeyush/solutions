export interface ApiCounterProps {
    count: number;
}

export enum ApiCounterTypes {
    ADD_API = 'ADD_API'
}

export interface CommentsAction {
    type: ApiCounterTypes.ADD_API;
    payload: number,
}