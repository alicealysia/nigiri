import { astalify, type ConstructProps } from "astal/gtk4"
import Adw from 'gi://Adw'

export type PreferencesGroupProps = ConstructProps<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>
export const PreferencesGroup = astalify<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>(Adw.PreferencesGroup, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})

export type PreferencesRowProps = ConstructProps<Adw.PreferencesRow, Adw.PreferencesRow.ConstructorProps>
export const PreferencesRow = astalify<Adw.PreferencesRow, Adw.PreferencesRow.ConstructorProps>(Adw.PreferencesRow, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})

export type PreferencesPageProps = ConstructProps<Adw.PreferencesPage, Adw.PreferencesPage.ConstructorProps>
export const PreferencesPage = astalify<Adw.PreferencesPage, Adw.PreferencesPage.ConstructorProps>(
    Adw.PreferencesPage, {
        getChildren(self) { return [] },
        setChildren(self, children) {},
    }
)
