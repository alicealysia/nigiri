import { Node } from '@bgotink/kdl'
import Xkb from './xkb'
import { Gtk } from 'astal/gtk4'
import { Box } from 'astal/gtk4/widget'

const { Expander, Label, Orientation } =  Gtk

export default class {
    public readonly Tab = (
        <Label label={"Input"}/>
    );
    private _xkb: Xkb;

    public constructor(node?: Node) {
        if (node) {
            this._xkb = new Xkb(node.children.findNodeByName("xkb"));
        } else {
            this._xkb = new Xkb();
        }
    }

    public get Page () {
        const sections = {
            xkb: this._xkb.Section,
            test: <Label label={"test"}/>
        }
        return (
            <Box orientation={Orientation.VERTICAL}>
                {
                    Object.entries(sections).map(([key, value]) => (
                        <Expander label={key} expanded={true}>
                            {value}
                        </Expander>
                    ))
                }
            </Box>
        )
    }
}
