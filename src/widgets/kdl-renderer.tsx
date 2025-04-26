// imports
import { App, Gtk } from 'astal/gtk4'
import { parse } from 'kdljs'
import * as fs from 'node:fs'

//module exports
export default async (kdlPath: string) => {
    const { ApplicationWindow, Text } = Gtk;

    const content = "";
    const doc = parse(content);
    console.log(JSON.stringify(doc));

    return (
        <ApplicationWindow
            visible={true}
            cssClasses={['kdl-renderer']}
            application={App}
        >
            <Text text={JSON.stringify(doc, null, 2)}></Text>
        </ApplicationWindow>
    )
}
