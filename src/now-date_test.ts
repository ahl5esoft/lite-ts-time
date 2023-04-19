import { strictEqual } from 'assert';
import moment from 'moment';

import { NowDateTime as Self } from './now-date';

describe('src/now-date.ts', () => {
    describe('.unix()', () => {
        it('ok', async () => {
            const res = await new Self(null).unix();
            strictEqual(
                res,
                moment().unix(),
            );
        });
    });
})