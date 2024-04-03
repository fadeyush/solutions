export interface ApiCounterProps {
    count: number;
}

export enum ApiCounterTypes {
    ADD_API = 'ADD_API'
}

export interface ApiCounterAction {
    type: ApiCounterTypes.ADD_API;
    payload: number,
}