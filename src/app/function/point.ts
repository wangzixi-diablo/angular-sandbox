export type Point = {
    x: number;
    y: number;
}

export interface MyFunc {
    (arg: string): string //a call signature
    funcName: (arg: string) => string //express of function in object literal
}