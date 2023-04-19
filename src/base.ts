import { TimeGranularity } from './granularity';

export abstract class TimeBase {
    public abstract isSameUnix(leftUnix: number, rightUnix: number, granularity?: TimeGranularity): boolean;
    public abstract startOf(unix: number, granularity?: TimeGranularity): Date;
    public abstract startOfUnix(unix: number, granularity?: TimeGranularity): number;
}