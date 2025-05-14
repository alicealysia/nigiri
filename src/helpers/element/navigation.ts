import Adw from 'gi://Adw'
import { astalify, type ConstructProps } from "astal/gtk4"
import { Box } from 'astal/gtk4/widget'

export type NavigationSplitViewProps = ConstructProps<Adw.PreferencesGroup, Adw.PreferencesGroup.ConstructorProps>
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
    setChildren(self, children) {
        if (children.length > 1) {
            self.child = Box({}, children)
        } else {
            self.child = children[0];
        }
    },
})


