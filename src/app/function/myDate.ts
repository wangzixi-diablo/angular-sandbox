export interface MyDate {
    toString(): string;
    setTime(time: number): number;
}

export type GeneralFunction<T,V> = {
    (T, V): T
}