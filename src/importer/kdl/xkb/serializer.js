import { serialize } from '@bgotink/kdl/dessert';
import KeymapLists from './keymap-lists.js';

export default (node) => serialize('xkb', (context, node, keymapLists) => {
    if (node.layout) {
        context.property('layout', keymapLists.layouts[node.layout]);
    }
    if (node.model) {
        context.property('model', keymapLists.models[node.model]);
    }
    if (node.layout && node.variant) {
        context.property('variant', keymapLists.variants[keymapLists.layouts[node.layout]][node.variant]);
    }
    if (node.options) {
        context.property('options', node.options.map(option => keymapLists.options[option])?.join(','));
    }
}, node, KeymapLists);