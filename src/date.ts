import { TimeBase } from './base';
import { TimeGranularity } from './granularity';

export class DateTime extends TimeBase {
    public isSameUnix(leftUnix: number, rightUnix: number, granularity?: TimeGranularity) {
        const left = this.startOf(leftUnix, granularity);
        const right = this.startOf(rightUnix, granularity);
        return left.getTime() == right.getTime();
    }

    public startOf(unix: number, granularity?: TimeGranularity) {
        granularity ??= TimeGranularity.day;

        const date = new Date(unix * 1000);
        switch (granularity) {
            case TimeGranularity.day:
                date.setHours(0, 0, 0, 0);
                break;
            case TimeGranularity.hour:
                date.setMinutes(0, 0, 0);
                break;
            case TimeGranularity.minute:
                date.setSeconds(0, 0);
                break;
            case TimeGranularity.month:
                this.startOfMonth(date);
                break;
            case TimeGranularity.week:
                date.setDate(
                    date.getDate() - (date.getDay() || 7) + 1,
                );
                date.setHours(0, 0, 0, 0);
                break;
            case TimeGranularity.year:
                date.setMonth(0);
                this.startOfMonth(date);
                break;
        }
        return date;
    }

    public startOfUnix(unix: number, granularity: TimeGranularity) {
        return Math.floor(
            this.startOf(unix, granularity).getTime() / 1000
        );
    }

    private startOfMonth(date: Date) {
        date.setDate(1);
        date.setHours(0, 0, 0, 0);
    }
}