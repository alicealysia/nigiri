import { Gtk } from 'astal/gtk4';
import { PreferencesGroup, ComboRow } from '../astalified';
import { deserialize, serialize } from '@bgotink/kdl/dessert';
import { Node } from '@bgotink/kdl';
import { exec } from 'astal';

export default class Xkb {
    layout = 0;
    options: number[] = [];
    model = 0;
    variant = 0;
    modelList = listKeymaps('xkb_model')
    layoutList = listKeymaps('xkb_layout')
    variantList = listKeymaps('xkb_layout').reduce(reduceVariants, {})
    optionList = listKeymaps('xkb_options')
    constructor (node?: Node) {
        if (node) {
            deserialize(node, context => {
                const getProp = (key: string) => context.property.if(key, 'string');
                this.layout = this.layoutList.indexOf(getProp('layout'));
                this.options = getProp('options')?.split(',').map(option => this.optionList.indexOf(option));
                this.model = this.modelList.indexOf(getProp('model'));
                this.variant = this.variantList[getProp('layout')]?.indexOf(getProp('variant'));
            });
        }
    }
    get serialized () {
        return serialize('xkb', (context) => {
            context.property('layout', this.layoutList[this.layout]);
            context.property('model', this.modelList[this.model]);
            context.property('variant', this.variantList[this.layoutList[this.layout]][this.variant]);
            context.property('options', this.options.map(option => this.optionList[option])?.join(','));
        });
    }
    public get Section () {
        return (
            <PreferencesGroup title={"Keyboard"}
              setup={self => {
                  self.add(<ComboRow title={"model"} visible={true} model={ Gtk.StringList.new(this.modelList) } setup={row => {
                      row.selected = this.model;
                      row.connect('activated', () => {
                          this.model = row.selected;
                          console.log(this.model);
                      })
                  }} />)
                  self.add(<ComboRow title={"layouts"} visible={true} model={ Gtk.StringList.new(this.layoutList) } />)
                  self.add(<ComboRow title={"options"} visible={true} model={ Gtk.StringList.new(this.optionList) } />)
              }}
            />
        )
    }
}

const reduceVariants = (accumulator: {
    [key: string]: string[]
}, current: string) => {
    accumulator[current] = listKeymapVariants(current)
    return accumulator;
}

export const listKeymapVariants = (value: string) => {
    try {
        return exec(`/usr/bin/localectl list-x11-keymap-variants ${value}`).split('\n');
    } catch {
        return [];
    }
}

export const listKeymaps = (value: string) => {
    try {
        return exec(`/usr/bin/localectl list-x11-keymap-${value}`).split('\n');
    } catch {
        return [];
    }
}
