import Adw from 'gi://Adw'
import { astalify, type ConstructProps, Gtk } from "astal/gtk4"

export type ComboBoxProps = ConstructProps<Adw.ComboRow, Adw.ComboRow.ConstructorProps>
export const ComboRow = astalify<Adw.ComboRow, Adw.ComboRow.ConstructorProps>(Adw.ComboRow, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})
