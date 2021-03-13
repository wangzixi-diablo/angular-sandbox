export type AnyFn = (...args: any[]) => any;

export type MemoizedProjection = {
    memoized: AnyFn;
    reset: () => void;
    setResult: (result?: any) => void;
    clearResult: () => void;
};
export type MemoizeFn = (t: AnyFn) => MemoizedProjection;
export type ComparatorFn = (a: any, b: any) => boolean;
export type DefaultProjectorFn<T> = (...args: any[]) => T;

export declare type Selector<T, V> = (state: T) => V;

export interface MemoizedSelector<State, Result, ProjectorFn = 

DefaultProjectorFn<Result>> extends Selector<State, Result> {
    release(): void;
    projector: ProjectorFn;
    setResult: (result?: Result) => void;
    clearResult: () => void;
}

export interface JerryState {
    name: string,
    age: number
}

let jerryProjector = (data: string) => data.length;

let jerryOriginFn = (data: JerryState) => data.name.length;

let jerrySelector: MemoizedSelector<JerryState, number, DefaultProjectorFn<number>>;

let oExtended = {
    release: () => {},
    projector: jerryProjector,
    setResult: (data: number) => {},
    clearResult: () => {}
};

jerrySelector = Object.assign(jerryOriginFn, oExtended);

console.log('Ethan', jerrySelector({ name: 'Jerry', age: 31}));



