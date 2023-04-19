import { ITime } from './i-time';

export abstract class NowTimeBase {
    public constructor(
        private m_Time: ITime,
    ) { }

    public async isSameUnix(unix: number, granularity?: any) {
        const nowUnix = await this.unix();
        return this.m_Time.isSameUnix(nowUnix, unix, granularity);
    }

    public async unixNano() {
        const unix = await this.unix();
        return unix * 1_000_000;
    }

    public abstract unix(): Promise<number>;
}