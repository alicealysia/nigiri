import Adw from 'gi://Adw'
import { astalify, type ConstructProps, Gtk } from "astal/gtk4"

export type ListBoxProps = ConstructProps<Gtk.ListBox, Gtk.ListBox.ConstructorProps>
export const ListBox = astalify<Gtk.ListBox, Gtk.ListBox.ConstructorProps>(Gtk.ListBox, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})
