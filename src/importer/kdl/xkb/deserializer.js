import KeymapLists from './keymap-lists.js';
import Serializer from './serializer.js';
import { deserialize } from '@bgotink/kdl/dessert';


export default (node) => deserialize( node, (context, keymapLists) => {
    const getProp = (key) => context.property.if(key, 'string');
    return {
        layout: keymapLists.layouts.indexOf(getProp('layout')),
        options: getProp('options')?.split(',').map(option => keymapLists.options.indexOf(option)),
        model: keymapLists.models.indexOf(getProp('model')),
        variant: keymapLists.variants[getProp('layout')]?.indexOf(getProp('variant')),
        serialize: Serializer({
            layout: this.layout,
            options: this.options,
            model: this.model,
            variant: this.variant,
        })
    }
}, KeymapLists)