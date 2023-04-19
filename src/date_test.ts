import { strictEqual } from 'assert';
import moment from 'moment';

import { DateTime, TimeGranularity } from './date';

moment.locale('en', {
    week: {
        dow: 1,
    }
});

describe('src/date.ts', () => {
    describe('.isSameUnix(leftUnix: number, rightUnix: number, granularity?: any)', () => {
        it('ok', () => {
            const self = new DateTime();
            const now = moment();
            const res = self.isSameUnix(
                now.unix(),
                now.endOf('day').unix(),
            );
            strictEqual(res, true);
        });
    });

    describe('startOf(unix: number, granularity: any)', () => {
        it(TimeGranularity.day, () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOf').bind(self) as (_: number, __: any) => Date;
            const now = moment();
            const left = fn(
                now.unix(),
                TimeGranularity.day,
            );
            strictEqual(
                left.getTime(),
                now.startOf('day').valueOf(),
            );
        });

        it(TimeGranularity.hour, () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOf').bind(self) as (_: number, __: any) => Date;
            const now = moment();
            const left = fn(
                now.unix(),
                TimeGranularity.hour,
            );
            strictEqual(
                left.getTime(),
                now.startOf('hour').valueOf(),
            );
        });

        it(TimeGranularity.minute, () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOf').bind(self) as (_: number, __: any) => Date;
            const now = moment();
            const left = fn(
                now.unix(),
                TimeGranularity.minute,
            );
            strictEqual(
                left.getTime(),
                now.startOf('minute').valueOf(),
            );
        });

        it(TimeGranularity.week, () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOf').bind(self) as (_: number, __: any) => Date;
            const now = moment();
            const left = fn(
                now.unix(),
                TimeGranularity.week,
            );
            strictEqual(
                left.getTime(),
                now.startOf('week').valueOf(),
            );
        });

        it(TimeGranularity.year, () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOf').bind(self) as (_: number, __: any) => Date;
            const now = moment();
            const left = fn(
                now.unix(),
                TimeGranularity.year,
            );
            strictEqual(
                left.getTime(),
                now.startOf('year').valueOf(),
            );
        });
    });

    describe('.startOfMonth(date: Date)[private]', () => {
        it('ok', () => {
            const self = new DateTime();
            const fn = Reflect.get(self, 'startOfMonth').bind(self) as (_: Date) => void;
            const left = new Date();
            const right = moment(left).startOf('month');
            fn(left);
            strictEqual(
                left.getTime(),
                right.valueOf(),
            );
        });
    });
});