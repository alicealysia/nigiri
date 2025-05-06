import Adw from 'gi://Adw'
import { astalify, type ConstructProps } from "astal/gtk4"

export type NavigationSplitViewProps = ConstructProps<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>
export const NavigationSplitView = astalify<Adw.NavigationSplitView, Adw.NavigationSplitView.ConstructorProps>(Adw.NavigationSplitView, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})

export type NavigationViewProps = ConstructProps<Adw.NavigationView, Adw.NavigationView.ConstructorProps>
export const NavigationView = astalify<Adw.NavigationView, Adw.NavigationView.ConstructorProps>(Adw.NavigationView, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})

export type NavigationPageProps = ConstructProps<Adw.NavigationPage, Adw.NavigationPage.ConstructorProps>
export const NavigationPage = astalify<Adw.NavigationPage, Adw.NavigationPage.ConstructorProps>(Adw.NavigationPage, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})


