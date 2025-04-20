// imports
import { App, Gtk, Gdk } from 'astal/gtk4'
import { bind } from 'astal/binding'
import { parse } from '../kdljs'
import NiriTest from '../niri-test.kdl'

// declarations
const { ApplicationWindow, CenterBox, Text } = Gtk
const doc = parse(NiriTest).output

// html
export default () => (
    <ApplicationWindow
        visible={true}
        cssClasses={['kdl-renderer']}
        application={App}>
        <CenterBox cssName='center-box'>
            <Text>
                {
                    JSON.stringify(doc)
                }
            </Text>
        </CenterBox>
    </ApplicationWindow>
)
