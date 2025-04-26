// imports
import { App, Gtk } from 'astal/gtk4'
import { readFileAsync } from 'astal/file'

import { parse } from 'kdljs'

//module exports
export default async (kdlPath: string) => {
    const { ApplicationWindow, Text } = Gtk;
    const content = await readFileAsync(kdlPath);
    const doc = parse(content.replaceAll('\n', ''));
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
