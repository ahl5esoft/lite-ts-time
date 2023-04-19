import { NowTimeBase } from './now-base';

export class NowDateTime extends NowTimeBase {
    public async unix() {
        return Math.floor(
            Date.now() / 1000
        );
    }
}