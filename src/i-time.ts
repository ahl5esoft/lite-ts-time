export interface ITime {
    isSameUnix(leftUnix: number, rightUnix: number, granularity?: any): boolean;
}