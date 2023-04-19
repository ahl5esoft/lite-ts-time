import { ITime } from './i-time';

export enum TimeGranularity {
    minute = 'minute',
    hour = 'hour',
    day = 'day',
    week = 'week',
    month = 'month',
    year = 'year',
}

export class DateTime implements ITime {
    public isSameUnix(leftUnix: number, rightUnix: number, granularity?: any) {
        granularity ??= TimeGranularity.day;
        const left = this.startOf(leftUnix, granularity);
        const right = this.startOf(rightUnix, granularity);
        return left.getTime() == right.getTime();
    }

    private startOf(unix: number, granularity: any) {
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

    private startOfMonth(date: Date) {
        date.setDate(1);
        date.setHours(0, 0, 0, 0);
    }
}