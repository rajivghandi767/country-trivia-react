export type GameDataItems = {
    data: GameDataItem[]
}

export type GameDataItem = {
    country: string;
    capital: string[] | string;
    continent: string;
}