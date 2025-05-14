import { parseWithoutFormatting as ParseWithoutFormatting, parseAndTransform as ParseAndTransform } from '@bgotink/kdl/v1-compat'
import { parse as Parse } from '@bgotink/kdl';
import Xkb from './xkb'

export const ParserList = {
    ['v1 Transformed']: ParseAndTransform,
    ['v1']: ParseWithoutFormatting,
    ['v2']: Parse
};

export default (fileContent: string) => (kdlVersion: 'v1 Transformed' | 'v1' | 'v2') => {
    return ParserList[kdlVersion](fileContent);
}

export { Xkb }
