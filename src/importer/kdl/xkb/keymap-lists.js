import { listKeymaps, listKeymapVariants } from '../../../helpers/index.js';

const reduceVariants = (accumulator, current) => {
    accumulator[current] = listKeymapVariants(current)
    return accumulator;
}
export default {
    models: listKeymaps("models"),
    layouts: listKeymaps("layouts"),
    variants: listKeymaps("layouts").reduce(reduceVariants, {}),
    options: listKeymaps("options")
}