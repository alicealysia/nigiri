import { execNoErr } from './index';

export default (value: string) => {
    const outputStr = execNoErr(`/usr/bin/localectl list-x11-keymap-variants ${value}`);
    if (!outputStr || !value) {
        return [];
    }
    return outputStr.split('\n');
}