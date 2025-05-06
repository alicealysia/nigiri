import {Gtk} from 'astal/gtk4'
export default (strings: string[]) => Gtk.DropDown.new_from_strings(strings);
