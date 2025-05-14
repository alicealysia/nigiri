import { astalify, type ConstructProps, Gtk } from "astal/gtk4"
import Adw from 'gi://Adw'

export type PreferencesGroupProps = ConstructProps<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>

export const PreferencesGroup = astalify<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>(Adw.PreferencesGroup)

export type PreferencesRowProps = ConstructProps<Adw.PreferencesRow, Adw.PreferencesRow.ConstructorProps>
export const PreferencesRow = astalify<Adw.PreferencesRow, Adw.PreferencesRow.ConstructorProps>(Adw.PreferencesRow)

export type PreferencesPageProps = ConstructProps<Adw.PreferencesPage, Adw.PreferencesPage.ConstructorProps>
export const PreferencesPage = astalify<Adw.PreferencesPage, Adw.PreferencesPage.ConstructorProps>(
    Adw.PreferencesPage, {
        getChildren(self) { return [] },
        setChildren(self, children) {},
    }
)
