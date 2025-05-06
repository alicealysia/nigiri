import { exec } from 'astal';

export default (cmd: string): string | null => {
    try {
        return exec(cmd);
    } catch {}
    return null;
}