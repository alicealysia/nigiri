import { astalify } from "astal/gtk4"
import Adw from 'gi://Adw'
import { Box } from 'astal/gtk4/widget'

export const ComboRow = astalify<Adw.ComboRow, Adw.ComboRow.ConstructorProps>(Adw.ComboRow, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {},
})

export const NavigationSplitView = astalify<Adw.NavigationSplitView, Adw.NavigationSplitView.ConstructorProps>(Adw.NavigationSplitView, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [self.sidebar, self.content] },
    setChildren(self, children: Adw.NavigationPage[]) {
        switch (children.length) {
            case 1: {
                self.set_content(children[0]);
                break;
            }
            case 2: {
                self.set_sidebar(children.find((value, index) => (value.title).toLowerCase() === 'sidebar' || index === 0));
                self.set_content(children.find((value, index) => (value.title).toLowerCase() === 'content' || index === 1));
                break;
            }
            default: {
                const sidebar = children.find((value, index) => (value.name ?? value.title).toLowerCase() === 'sidebar');
                if (sidebar) {
                    self.set_sidebar(sidebar);
                    self.set_content(Adw.NavigationPage.new(Box({}, children.filter(value => value !== sidebar)), "content"));
                }
                self.set_sidebar(children[0]);
                self.set_content(Adw.NavigationPage.new(Box({}, children.slice(1)), "content"));
                break;
            }
        }
    },
})
export const NavigationPage = astalify<Adw.NavigationPage, Adw.NavigationPage.ConstructorProps>(Adw.NavigationPage, {
    // if it is a container widget, define children setter and getter here
    getChildren(self) { return [] },
    setChildren(self, children) {
        if (children.length > 1) {
            self.child = Box({}, children)
        } else {
            self.child = children[0];
        }
    },
})

export const PreferencesGroup = astalify<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>(Adw.PreferencesGroup)
export const PreferencesPage = astalify<Adw.PreferencesPage, Adw.PreferencesPage.ConstructorProps>(
    Adw.PreferencesPage, {
        getChildren(self) { return [] },
        setChildren(self, children) {},
    }
)
