// imports
import { App, Gtk } from 'astal/gtk4';
import importKdl, { KdlVersion } from '../libs/import-kdl';
import { KdlRenderer } from '../styles/kdl-renderer.module.scss';

//module exports
export default async (path: string) => {
    const { ApplicationWindow, Label } = Gtk;
    const doc = await importKdl(path, KdlVersion.V1);
    console.log(KdlRenderer);
    return (
        <ApplicationWindow
            visible={true}
            cssClasses={ [KdlRenderer] }
            application={App}
        >
            <Label  label={doc.nodes.map(value => value.getName()).join(' ')} />
        </ApplicationWindow>
    )
}
