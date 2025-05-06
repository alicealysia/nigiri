import { execNoErr } from './index';

export default (value: string) => execNoErr(`/usr/bin/localectl list-x11-keymap-${value}`).split('\n');