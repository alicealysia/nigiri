import { createRenderer } from '@vue/runtime-core';
export * from '@vue/runtime-core';
import Gtk from 'gi://Gtk?version=4.0';
export { default as Gtk } from 'gi://Gtk?version=4.0';
export { default as Gio } from 'gi://Gio?version=2.0';
import GObject from 'gi://GObject?version=2.0';
import Adw from 'gi://Adw?version=1';
import Gdk from 'gi://Gdk?version=4.0';

class CommentC extends Gtk.Widget {
  constructor(comment) {
    super({
      visible: false,
      name: comment
    });
    this.comment = comment;
  }
}
const Comment = GObject.registerClass(CommentC);

const createComment = (text) => new Comment(text);

var Type = /* @__PURE__ */ ((Type2) => {
  Type2["String"] = "String";
  Type2["Boolean"] = "Boolean";
  Type2["Number"] = "Number";
  Type2["Object"] = "Object";
  Type2["StringArray"] = "StringArray";
  return Type2;
})(Type || {});
const defineElement = ({
  tagName,
  constructorClass,
  props,
  parentElementDefinition
}) => {
  const createProperties = (vnodeProps) => {
    const properties = parentElementDefinition ? parentElementDefinition.createProperties(vnodeProps) : {};
    for (const key in vnodeProps) {
      if (key in props) {
        const descriptor = props[key];
        properties[descriptor.key] = vnodeProps[key];
      } else if (key === "class") {
        properties.css_classes = vnodeProps[key].split(" ");
      } else if (!(key in properties) && !key.startsWith("on") && key !== "key" && key !== "ref" && key !== "ref_key") ;
    }
    return properties;
  };
  const patchProperty = (el, key, prevValue, nextValue) => {
    const setParent = parentElementDefinition && parentElementDefinition.patchProperty(el, key, prevValue, nextValue);
    if (setParent) {
      return true;
    }
    const propDetails = props[key];
    if (propDetails) {
      const setter = propDetails.setter;
      if (setter in el) {
        el[setter](nextValue);
        return true;
      }
    } else if (key === "class") {
      el.set_css_classes(nextValue.split(" "));
      return true;
    } else if (key.startsWith("on")) {
      const widget = el;
      if (widget._eventHandlersIds == null) {
        widget._eventHandlersIds = {};
      }
      const eventName = key[2].toLowerCase() + key.substring(3);
      if (prevValue != null) {
        const handlersIds = widget._eventHandlersIds[eventName];
        if (handlersIds) {
          const id = handlersIds.get(prevValue);
          if (id != null) {
            widget.disconnect(id);
          }
        }
      }
      if (nextValue != null) {
        const id = widget.connect(eventName, nextValue);
        if (widget._eventHandlersIds[eventName] == null) {
          widget._eventHandlersIds[eventName] = /* @__PURE__ */ new Map();
        }
        widget._eventHandlersIds[eventName].set(nextValue, id);
      }
      return true;
    } else ;
    return false;
  };
  const createElement = (vnodeProps) => {
    const initialProps = createProperties(vnodeProps);
    const instance = new constructorClass(initialProps);
    if (initialProps.visible !== false) {
      instance.show();
    }
    return instance;
  };
  return {
    tagName,
    constructorClass,
    props,
    parentElementDefinition,
    createProperties,
    patchProperty,
    createElement
  };
};

const gtkWidget = defineElement({
  tagName: "gtk-widget",
  constructorClass: Gtk.Widget,
  props: {
    canFocus: {
      key: "can_focus",
      type: Type.Boolean,
      setter: "set_can_focus"
    },
    canTarget: {
      key: "can_target",
      type: Type.Boolean,
      setter: "set_can_target"
    },
    cssClasses: {
      key: "css_classes",
      type: Type.StringArray,
      setter: "set_css_classes"
    },
    cursor: {
      key: "cursor",
      type: Type.Object,
      setter: "set_cursor"
    },
    focusOnClick: {
      key: "focus_on_click",
      type: Type.Boolean,
      setter: "set_focus_on_click"
    },
    focusable: {
      key: "focusable",
      type: Type.Boolean,
      setter: "set_focusable"
    },
    halign: {
      key: "halign",
      type: Type.Object,
      setter: "set_halign"
    },
    hasTooltip: {
      key: "has_tooltip",
      type: Type.Boolean,
      setter: "set_has_tooltip"
    },
    hexpand: {
      key: "hexpand",
      type: Type.Boolean,
      setter: "set_hexpand"
    },
    hexpandSet: {
      key: "hexpand_set",
      type: Type.Boolean,
      setter: "set_hexpand_set"
    },
    layoutManager: {
      key: "layout_manager",
      type: Type.Object,
      setter: "set_layout_manager"
    },
    marginBottom: {
      key: "margin_bottom",
      type: Type.Number,
      setter: "set_margin_bottom"
    },
    marginEnd: {
      key: "margin_end",
      type: Type.Number,
      setter: "set_margin_end"
    },
    marginStart: {
      key: "margin_start",
      type: Type.Number,
      setter: "set_margin_start"
    },
    marginTop: {
      key: "margin_top",
      type: Type.Number,
      setter: "set_margin_top"
    },
    name: {
      key: "name",
      type: Type.String,
      setter: "set_name"
    },
    opacity: {
      key: "opacity",
      type: Type.Number,
      setter: "set_opacity"
    },
    overflow: {
      key: "overflow",
      type: Type.Object,
      setter: "set_overflow"
    },
    receivesDefault: {
      key: "receives_default",
      type: Type.Boolean,
      setter: "set_receives_default"
    },
    sensitive: {
      key: "sensitive",
      type: Type.Boolean,
      setter: "set_sensitive"
    },
    tooltipMarkup: {
      key: "tooltip_markup",
      type: Type.String,
      setter: "set_tooltip_markup"
    },
    tooltipText: {
      key: "tooltip_text",
      type: Type.String,
      setter: "set_tooltip_text"
    },
    valign: {
      key: "valign",
      type: Type.Object,
      setter: "set_valign"
    },
    vexpand: {
      key: "vexpand",
      type: Type.Boolean,
      setter: "set_vexpand"
    },
    vexpandSet: {
      key: "vexpand_set",
      type: Type.Boolean,
      setter: "set_vexpand_set"
    },
    visible: {
      key: "visible",
      type: Type.Boolean,
      setter: "set_visible"
    }
  }
});

const gtkListBoxRow = defineElement({
  tagName: "gtk-list-box-row",
  constructorClass: Gtk.ListBoxRow,
  props: {
    activatable: {
      key: "activatable",
      type: Type.Boolean,
      setter: "set_activatable"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    selectable: {
      key: "selectable",
      type: Type.Boolean,
      setter: "set_selectable"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwPreferencesRow = defineElement({
  tagName: "adw-preferences-row",
  constructorClass: Adw.PreferencesRow,
  props: {
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    titleSelectable: {
      key: "title_selectable",
      type: Type.Boolean,
      setter: "set_title_selectable"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkListBoxRow
});

const adwActionRow = defineElement({
  tagName: "adw-action-row",
  constructorClass: Adw.ActionRow,
  props: {
    activatableWidget: {
      key: "activatable_widget",
      type: Type.Object,
      setter: "set_activatable_widget"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    subtitleLines: {
      key: "subtitle_lines",
      type: Type.Number,
      setter: "set_subtitle_lines"
    },
    titleLines: {
      key: "title_lines",
      type: Type.Number,
      setter: "set_title_lines"
    }
  },
  parentElementDefinition: adwPreferencesRow
});

const gtkWindow = defineElement({
  tagName: "gtk-window",
  constructorClass: Gtk.Window,
  props: {
    application: {
      key: "application",
      type: Type.Object,
      setter: "set_application"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    decorated: {
      key: "decorated",
      type: Type.Boolean,
      setter: "set_decorated"
    },
    defaultWidget: {
      key: "default_widget",
      type: Type.Object,
      setter: "set_default_widget"
    },
    deletable: {
      key: "deletable",
      type: Type.Boolean,
      setter: "set_deletable"
    },
    destroyWithParent: {
      key: "destroy_with_parent",
      type: Type.Boolean,
      setter: "set_destroy_with_parent"
    },
    focusVisible: {
      key: "focus_visible",
      type: Type.Boolean,
      setter: "set_focus_visible"
    },
    handleMenubarAccel: {
      key: "handle_menubar_accel",
      type: Type.Boolean,
      setter: "set_handle_menubar_accel"
    },
    hideOnClose: {
      key: "hide_on_close",
      type: Type.Boolean,
      setter: "set_hide_on_close"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    mnemonicsVisible: {
      key: "mnemonics_visible",
      type: Type.Boolean,
      setter: "set_mnemonics_visible"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    resizable: {
      key: "resizable",
      type: Type.Boolean,
      setter: "set_resizable"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    titlebar: {
      key: "titlebar",
      type: Type.Object,
      setter: "set_titlebar"
    },
    transientFor: {
      key: "transient_for",
      type: Type.Object,
      setter: "set_transient_for"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkApplicationWindow = defineElement({
  tagName: "gtk-application-window",
  constructorClass: Gtk.ApplicationWindow,
  props: {
    showMenubar: {
      key: "show_menubar",
      type: Type.Boolean,
      setter: "set_show_menubar"
    }
  },
  parentElementDefinition: gtkWindow
});

const adwApplicationWindow = defineElement({
  tagName: "adw-application-window",
  constructorClass: Adw.ApplicationWindow,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    }
  },
  parentElementDefinition: gtkApplicationWindow
});

const adwAvatar = defineElement({
  tagName: "adw-avatar",
  constructorClass: Adw.Avatar,
  props: {
    customImage: {
      key: "custom_image",
      type: Type.Object,
      setter: "set_custom_image"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    showInitials: {
      key: "show_initials",
      type: Type.Boolean,
      setter: "set_show_initials"
    },
    size: {
      key: "size",
      type: Type.Number,
      setter: "set_size"
    },
    text: {
      key: "text",
      type: Type.String,
      setter: "set_text"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwBin = defineElement({
  tagName: "adw-bin",
  constructorClass: Adw.Bin,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwButtonContent = defineElement({
  tagName: "adw-button-content",
  constructorClass: Adw.ButtonContent,
  props: {
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwCarousel = defineElement({
  tagName: "adw-carousel",
  constructorClass: Adw.Carousel,
  props: {
    allowLongSwipes: {
      key: "allow_long_swipes",
      type: Type.Boolean,
      setter: "set_allow_long_swipes"
    },
    allowMouseDrag: {
      key: "allow_mouse_drag",
      type: Type.Boolean,
      setter: "set_allow_mouse_drag"
    },
    allowScrollWheel: {
      key: "allow_scroll_wheel",
      type: Type.Boolean,
      setter: "set_allow_scroll_wheel"
    },
    interactive: {
      key: "interactive",
      type: Type.Boolean,
      setter: "set_interactive"
    },
    revealDuration: {
      key: "reveal_duration",
      type: Type.Number,
      setter: "set_reveal_duration"
    },
    scrollParams: {
      key: "scroll_params",
      type: Type.Object,
      setter: "set_scroll_params"
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwCarouselIndicatorDots = defineElement({
  tagName: "adw-carousel-indicator-dots",
  constructorClass: Adw.CarouselIndicatorDots,
  props: {
    carousel: {
      key: "carousel",
      type: Type.Object,
      setter: "set_carousel"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwCarouselIndicatorLines = defineElement({
  tagName: "adw-carousel-indicator-lines",
  constructorClass: Adw.CarouselIndicatorLines,
  props: {
    carousel: {
      key: "carousel",
      type: Type.Object,
      setter: "set_carousel"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwClamp = defineElement({
  tagName: "adw-clamp",
  constructorClass: Adw.Clamp,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    maximumSize: {
      key: "maximum_size",
      type: Type.Number,
      setter: "set_maximum_size"
    },
    tighteningThreshold: {
      key: "tightening_threshold",
      type: Type.Number,
      setter: "set_tightening_threshold"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwClampScrollable = defineElement({
  tagName: "adw-clamp-scrollable",
  constructorClass: Adw.ClampScrollable,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    maximumSize: {
      key: "maximum_size",
      type: Type.Number,
      setter: "set_maximum_size"
    },
    tighteningThreshold: {
      key: "tightening_threshold",
      type: Type.Number,
      setter: "set_tightening_threshold"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwComboRow = defineElement({
  tagName: "adw-combo-row",
  constructorClass: Adw.ComboRow,
  props: {
    expression: {
      key: "expression",
      type: Type.Object,
      setter: "set_expression"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    listFactory: {
      key: "list_factory",
      type: Type.Object,
      setter: "set_list_factory"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    selected: {
      key: "selected",
      type: Type.Number,
      setter: "set_selected"
    },
    useSubtitle: {
      key: "use_subtitle",
      type: Type.Boolean,
      setter: "set_use_subtitle"
    }
  },
  parentElementDefinition: adwActionRow
});

const adwExpanderRow = defineElement({
  tagName: "adw-expander-row",
  constructorClass: Adw.ExpanderRow,
  props: {
    enableExpansion: {
      key: "enable_expansion",
      type: Type.Boolean,
      setter: "set_enable_expansion"
    },
    expanded: {
      key: "expanded",
      type: Type.Boolean,
      setter: "set_expanded"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    showEnableSwitch: {
      key: "show_enable_switch",
      type: Type.Boolean,
      setter: "set_show_enable_switch"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    }
  },
  parentElementDefinition: adwPreferencesRow
});

const adwFlap = defineElement({
  tagName: "adw-flap",
  constructorClass: Adw.Flap,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    },
    flap: {
      key: "flap",
      type: Type.Object,
      setter: "set_flap"
    },
    flapPosition: {
      key: "flap_position",
      type: Type.Object,
      setter: "set_flap_position"
    },
    foldDuration: {
      key: "fold_duration",
      type: Type.Number,
      setter: "set_fold_duration"
    },
    foldPolicy: {
      key: "fold_policy",
      type: Type.Object,
      setter: "set_fold_policy"
    },
    foldThresholdPolicy: {
      key: "fold_threshold_policy",
      type: Type.Object,
      setter: "set_fold_threshold_policy"
    },
    locked: {
      key: "locked",
      type: Type.Boolean,
      setter: "set_locked"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    revealFlap: {
      key: "reveal_flap",
      type: Type.Boolean,
      setter: "set_reveal_flap"
    },
    revealParams: {
      key: "reveal_params",
      type: Type.Object,
      setter: "set_reveal_params"
    },
    separator: {
      key: "separator",
      type: Type.Object,
      setter: "set_separator"
    },
    swipeToClose: {
      key: "swipe_to_close",
      type: Type.Boolean,
      setter: "set_swipe_to_close"
    },
    swipeToOpen: {
      key: "swipe_to_open",
      type: Type.Boolean,
      setter: "set_swipe_to_open"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwHeaderBar = defineElement({
  tagName: "adw-header-bar",
  constructorClass: Adw.HeaderBar,
  props: {
    centeringPolicy: {
      key: "centering_policy",
      type: Type.Object,
      setter: "set_centering_policy"
    },
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    showEndTitleButtons: {
      key: "show_end_title_buttons",
      type: Type.Boolean,
      setter: "set_show_end_title_buttons"
    },
    showStartTitleButtons: {
      key: "show_start_title_buttons",
      type: Type.Boolean,
      setter: "set_show_start_title_buttons"
    },
    titleWidget: {
      key: "title_widget",
      type: Type.Object,
      setter: "set_title_widget"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwLeaflet = defineElement({
  tagName: "adw-leaflet",
  constructorClass: Adw.Leaflet,
  props: {
    canNavigateBack: {
      key: "can_navigate_back",
      type: Type.Boolean,
      setter: "set_can_navigate_back"
    },
    canNavigateForward: {
      key: "can_navigate_forward",
      type: Type.Boolean,
      setter: "set_can_navigate_forward"
    },
    canUnfold: {
      key: "can_unfold",
      type: Type.Boolean,
      setter: "set_can_unfold"
    },
    childTransitionParams: {
      key: "child_transition_params",
      type: Type.Object,
      setter: "set_child_transition_params"
    },
    foldThresholdPolicy: {
      key: "fold_threshold_policy",
      type: Type.Object,
      setter: "set_fold_threshold_policy"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    modeTransitionDuration: {
      key: "mode_transition_duration",
      type: Type.Number,
      setter: "set_mode_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    },
    visibleChild: {
      key: "visible_child",
      type: Type.Object,
      setter: "set_visible_child"
    },
    visibleChildName: {
      key: "visible_child_name",
      type: Type.String,
      setter: "set_visible_child_name"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwPreferencesGroup = defineElement({
  tagName: "adw-preferences-group",
  constructorClass: Adw.PreferencesGroup,
  props: {
    description: {
      key: "description",
      type: Type.String,
      setter: "set_description"
    },
    headerSuffix: {
      key: "header_suffix",
      type: Type.Object,
      setter: "set_header_suffix"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwPreferencesPage = defineElement({
  tagName: "adw-preferences-page",
  constructorClass: Adw.PreferencesPage,
  props: {
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    name: {
      key: "name",
      type: Type.String,
      setter: "set_name"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwWindow = defineElement({
  tagName: "adw-window",
  constructorClass: Adw.Window,
  props: {
    content: {
      key: "content",
      type: Type.Object,
      setter: "set_content"
    }
  },
  parentElementDefinition: gtkWindow
});

const adwPreferencesWindow = defineElement({
  tagName: "adw-preferences-window",
  constructorClass: Adw.PreferencesWindow,
  props: {
    canNavigateBack: {
      key: "can_navigate_back",
      type: Type.Boolean,
      setter: "set_can_navigate_back"
    },
    searchEnabled: {
      key: "search_enabled",
      type: Type.Boolean,
      setter: "set_search_enabled"
    },
    visiblePage: {
      key: "visible_page",
      type: Type.Object,
      setter: "set_visible_page"
    },
    visiblePageName: {
      key: "visible_page_name",
      type: Type.String,
      setter: "set_visible_page_name"
    }
  },
  parentElementDefinition: adwWindow
});

const adwSplitButton = defineElement({
  tagName: "adw-split-button",
  constructorClass: Adw.SplitButton,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    direction: {
      key: "direction",
      type: Type.Object,
      setter: "set_direction"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    },
    popover: {
      key: "popover",
      type: Type.Object,
      setter: "set_popover"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwSqueezer = defineElement({
  tagName: "adw-squeezer",
  constructorClass: Adw.Squeezer,
  props: {
    allowNone: {
      key: "allow_none",
      type: Type.Boolean,
      setter: "set_allow_none"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    interpolateSize: {
      key: "interpolate_size",
      type: Type.Boolean,
      setter: "set_interpolate_size"
    },
    switchThresholdPolicy: {
      key: "switch_threshold_policy",
      type: Type.Object,
      setter: "set_switch_threshold_policy"
    },
    transitionDuration: {
      key: "transition_duration",
      type: Type.Number,
      setter: "set_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    },
    xalign: {
      key: "xalign",
      type: Type.Number,
      setter: "set_xalign"
    },
    yalign: {
      key: "yalign",
      type: Type.Number,
      setter: "set_yalign"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwStatusPage = defineElement({
  tagName: "adw-status-page",
  constructorClass: Adw.StatusPage,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    description: {
      key: "description",
      type: Type.String,
      setter: "set_description"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    paintable: {
      key: "paintable",
      type: Type.Object,
      setter: "set_paintable"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwTabBar = defineElement({
  tagName: "adw-tab-bar",
  constructorClass: Adw.TabBar,
  props: {
    autohide: {
      key: "autohide",
      type: Type.Boolean,
      setter: "set_autohide"
    },
    endActionWidget: {
      key: "end_action_widget",
      type: Type.Object,
      setter: "set_end_action_widget"
    },
    expandTabs: {
      key: "expand_tabs",
      type: Type.Boolean,
      setter: "set_expand_tabs"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    startActionWidget: {
      key: "start_action_widget",
      type: Type.Object,
      setter: "set_start_action_widget"
    },
    view: {
      key: "view",
      type: Type.Object,
      setter: "set_view"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwTabView = defineElement({
  tagName: "adw-tab-view",
  constructorClass: Adw.TabView,
  props: {
    defaultIcon: {
      key: "default_icon",
      type: Type.Object,
      setter: "set_default_icon"
    },
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    },
    selectedPage: {
      key: "selected_page",
      type: Type.Object,
      setter: "set_selected_page"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwToastOverlay = defineElement({
  tagName: "adw-toast-overlay",
  constructorClass: Adw.ToastOverlay,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwViewStack = defineElement({
  tagName: "adw-view-stack",
  constructorClass: Adw.ViewStack,
  props: {
    hhomogeneous: {
      key: "hhomogeneous",
      type: Type.Boolean,
      setter: "set_hhomogeneous"
    },
    vhomogeneous: {
      key: "vhomogeneous",
      type: Type.Boolean,
      setter: "set_vhomogeneous"
    },
    visibleChild: {
      key: "visible_child",
      type: Type.Object,
      setter: "set_visible_child"
    },
    visibleChildName: {
      key: "visible_child_name",
      type: Type.String,
      setter: "set_visible_child_name"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwViewSwitcher = defineElement({
  tagName: "adw-view-switcher",
  constructorClass: Adw.ViewSwitcher,
  props: {
    policy: {
      key: "policy",
      type: Type.Object,
      setter: "set_policy"
    },
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwViewSwitcherBar = defineElement({
  tagName: "adw-view-switcher-bar",
  constructorClass: Adw.ViewSwitcherBar,
  props: {
    reveal: {
      key: "reveal",
      type: Type.Boolean,
      setter: "set_reveal"
    },
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwViewSwitcherTitle = defineElement({
  tagName: "adw-view-switcher-title",
  constructorClass: Adw.ViewSwitcherTitle,
  props: {
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    },
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    viewSwitcherEnabled: {
      key: "view_switcher_enabled",
      type: Type.Boolean,
      setter: "set_view_switcher_enabled"
    }
  },
  parentElementDefinition: gtkWidget
});

const adwWindowTitle = defineElement({
  tagName: "adw-window-title",
  constructorClass: Adw.WindowTitle,
  props: {
    subtitle: {
      key: "subtitle",
      type: Type.String,
      setter: "set_subtitle"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkAboutDialog = defineElement({
  tagName: "gtk-about-dialog",
  constructorClass: Gtk.AboutDialog,
  props: {
    artists: {
      key: "artists",
      type: Type.StringArray,
      setter: "set_artists"
    },
    authors: {
      key: "authors",
      type: Type.StringArray,
      setter: "set_authors"
    },
    comments: {
      key: "comments",
      type: Type.String,
      setter: "set_comments"
    },
    copyright: {
      key: "copyright",
      type: Type.String,
      setter: "set_copyright"
    },
    documenters: {
      key: "documenters",
      type: Type.StringArray,
      setter: "set_documenters"
    },
    license: {
      key: "license",
      type: Type.String,
      setter: "set_license"
    },
    licenseType: {
      key: "license_type",
      type: Type.Object,
      setter: "set_license_type"
    },
    logo: {
      key: "logo",
      type: Type.Object,
      setter: "set_logo"
    },
    logoIconName: {
      key: "logo_icon_name",
      type: Type.String,
      setter: "set_logo_icon_name"
    },
    programName: {
      key: "program_name",
      type: Type.String,
      setter: "set_program_name"
    },
    systemInformation: {
      key: "system_information",
      type: Type.String,
      setter: "set_system_information"
    },
    translatorCredits: {
      key: "translator_credits",
      type: Type.String,
      setter: "set_translator_credits"
    },
    version: {
      key: "version",
      type: Type.String,
      setter: "set_version"
    },
    website: {
      key: "website",
      type: Type.String,
      setter: "set_website"
    },
    websiteLabel: {
      key: "website_label",
      type: Type.String,
      setter: "set_website_label"
    },
    wrapLicense: {
      key: "wrap_license",
      type: Type.Boolean,
      setter: "set_wrap_license"
    }
  },
  parentElementDefinition: gtkWindow
});

const gtkActionBar = defineElement({
  tagName: "gtk-action-bar",
  constructorClass: Gtk.ActionBar,
  props: {
    revealed: {
      key: "revealed",
      type: Type.Boolean,
      setter: "set_revealed"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkAppChooserButton = defineElement({
  tagName: "gtk-app-chooser-button",
  constructorClass: Gtk.AppChooserButton,
  props: {
    heading: {
      key: "heading",
      type: Type.String,
      setter: "set_heading"
    },
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    showDefaultItem: {
      key: "show_default_item",
      type: Type.Boolean,
      setter: "set_show_default_item"
    },
    showDialogItem: {
      key: "show_dialog_item",
      type: Type.Boolean,
      setter: "set_show_dialog_item"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkDialog = defineElement({
  tagName: "gtk-dialog",
  constructorClass: Gtk.Dialog,
  props: {},
  parentElementDefinition: gtkWindow
});

const gtkAppChooserDialog = defineElement({
  tagName: "gtk-app-chooser-dialog",
  constructorClass: Gtk.AppChooserDialog,
  props: {
    heading: {
      key: "heading",
      type: Type.String,
      setter: "set_heading"
    }
  },
  parentElementDefinition: gtkDialog
});

const gtkAppChooserWidget = defineElement({
  tagName: "gtk-app-chooser-widget",
  constructorClass: Gtk.AppChooserWidget,
  props: {
    defaultText: {
      key: "default_text",
      type: Type.String,
      setter: "set_default_text"
    },
    showAll: {
      key: "show_all",
      type: Type.Boolean,
      setter: "set_show_all"
    },
    showDefault: {
      key: "show_default",
      type: Type.Boolean,
      setter: "set_show_default"
    },
    showFallback: {
      key: "show_fallback",
      type: Type.Boolean,
      setter: "set_show_fallback"
    },
    showOther: {
      key: "show_other",
      type: Type.Boolean,
      setter: "set_show_other"
    },
    showRecommended: {
      key: "show_recommended",
      type: Type.Boolean,
      setter: "set_show_recommended"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkAspectFrame = defineElement({
  tagName: "gtk-aspect-frame",
  constructorClass: Gtk.AspectFrame,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    obeyChild: {
      key: "obey_child",
      type: Type.Boolean,
      setter: "set_obey_child"
    },
    ratio: {
      key: "ratio",
      type: Type.Number,
      setter: "set_ratio"
    },
    xalign: {
      key: "xalign",
      type: Type.Number,
      setter: "set_xalign"
    },
    yalign: {
      key: "yalign",
      type: Type.Number,
      setter: "set_yalign"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkAssistant = defineElement({
  tagName: "gtk-assistant",
  constructorClass: Gtk.Assistant,
  props: {},
  parentElementDefinition: gtkWindow
});

const gtkBox = defineElement({
  tagName: "gtk-box",
  constructorClass: Gtk.Box,
  props: {
    baselinePosition: {
      key: "baseline_position",
      type: Type.Object,
      setter: "set_baseline_position"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkButton = defineElement({
  tagName: "gtk-button",
  constructorClass: Gtk.Button,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkCalendar = defineElement({
  tagName: "gtk-calendar",
  constructorClass: Gtk.Calendar,
  props: {
    showDayNames: {
      key: "show_day_names",
      type: Type.Boolean,
      setter: "set_show_day_names"
    },
    showHeading: {
      key: "show_heading",
      type: Type.Boolean,
      setter: "set_show_heading"
    },
    showWeekNumbers: {
      key: "show_week_numbers",
      type: Type.Boolean,
      setter: "set_show_week_numbers"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkCellView = defineElement({
  tagName: "gtk-cell-view",
  constructorClass: Gtk.CellView,
  props: {
    drawSensitive: {
      key: "draw_sensitive",
      type: Type.Boolean,
      setter: "set_draw_sensitive"
    },
    fitModel: {
      key: "fit_model",
      type: Type.Boolean,
      setter: "set_fit_model"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkCenterBox = defineElement({
  tagName: "gtk-center-box",
  constructorClass: Gtk.CenterBox,
  props: {
    baselinePosition: {
      key: "baseline_position",
      type: Type.Object,
      setter: "set_baseline_position"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkCheckButton = defineElement({
  tagName: "gtk-check-button",
  constructorClass: Gtk.CheckButton,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    },
    inconsistent: {
      key: "inconsistent",
      type: Type.Boolean,
      setter: "set_inconsistent"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkColorButton = defineElement({
  tagName: "gtk-color-button",
  constructorClass: Gtk.ColorButton,
  props: {
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkColorChooserDialog = defineElement({
  tagName: "gtk-color-chooser-dialog",
  constructorClass: Gtk.ColorChooserDialog,
  props: {},
  parentElementDefinition: gtkDialog
});

const gtkColorChooserWidget = defineElement({
  tagName: "gtk-color-chooser-widget",
  constructorClass: Gtk.ColorChooserWidget,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkColumnView = defineElement({
  tagName: "gtk-column-view",
  constructorClass: Gtk.ColumnView,
  props: {
    enableRubberband: {
      key: "enable_rubberband",
      type: Type.Boolean,
      setter: "set_enable_rubberband"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    reorderable: {
      key: "reorderable",
      type: Type.Boolean,
      setter: "set_reorderable"
    },
    showColumnSeparators: {
      key: "show_column_separators",
      type: Type.Boolean,
      setter: "set_show_column_separators"
    },
    showRowSeparators: {
      key: "show_row_separators",
      type: Type.Boolean,
      setter: "set_show_row_separators"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkComboBox = defineElement({
  tagName: "gtk-combo-box",
  constructorClass: Gtk.ComboBox,
  props: {
    active: {
      key: "active",
      type: Type.Number,
      setter: "set_active"
    },
    activeId: {
      key: "active_id",
      type: Type.String,
      setter: "set_active_id"
    },
    buttonSensitivity: {
      key: "button_sensitivity",
      type: Type.Object,
      setter: "set_button_sensitivity"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    entryTextColumn: {
      key: "entry_text_column",
      type: Type.Number,
      setter: "set_entry_text_column"
    },
    idColumn: {
      key: "id_column",
      type: Type.Number,
      setter: "set_id_column"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    popupFixedWidth: {
      key: "popup_fixed_width",
      type: Type.Boolean,
      setter: "set_popup_fixed_width"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkComboBoxText = defineElement({
  tagName: "gtk-combo-box-text",
  constructorClass: Gtk.ComboBoxText,
  props: {},
  parentElementDefinition: gtkComboBox
});

const gtkDragIcon = defineElement({
  tagName: "gtk-drag-icon",
  constructorClass: Gtk.DragIcon,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkDrawingArea = defineElement({
  tagName: "gtk-drawing-area",
  constructorClass: Gtk.DrawingArea,
  props: {
    contentHeight: {
      key: "content_height",
      type: Type.Number,
      setter: "set_content_height"
    },
    contentWidth: {
      key: "content_width",
      type: Type.Number,
      setter: "set_content_width"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkDropDown = defineElement({
  tagName: "gtk-drop-down",
  constructorClass: Gtk.DropDown,
  props: {
    enableSearch: {
      key: "enable_search",
      type: Type.Boolean,
      setter: "set_enable_search"
    },
    expression: {
      key: "expression",
      type: Type.Object,
      setter: "set_expression"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    listFactory: {
      key: "list_factory",
      type: Type.Object,
      setter: "set_list_factory"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    selected: {
      key: "selected",
      type: Type.Number,
      setter: "set_selected"
    },
    showArrow: {
      key: "show_arrow",
      type: Type.Boolean,
      setter: "set_show_arrow"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkEditableLabel = defineElement({
  tagName: "gtk-editable-label",
  constructorClass: Gtk.EditableLabel,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkPopover = defineElement({
  tagName: "gtk-popover",
  constructorClass: Gtk.Popover,
  props: {
    autohide: {
      key: "autohide",
      type: Type.Boolean,
      setter: "set_autohide"
    },
    cascadePopdown: {
      key: "cascade_popdown",
      type: Type.Boolean,
      setter: "set_cascade_popdown"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hasArrow: {
      key: "has_arrow",
      type: Type.Boolean,
      setter: "set_has_arrow"
    },
    mnemonicsVisible: {
      key: "mnemonics_visible",
      type: Type.Boolean,
      setter: "set_mnemonics_visible"
    },
    pointingTo: {
      key: "pointing_to",
      type: Type.Object,
      setter: "set_pointing_to"
    },
    position: {
      key: "position",
      type: Type.Object,
      setter: "set_position"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkEmojiChooser = defineElement({
  tagName: "gtk-emoji-chooser",
  constructorClass: Gtk.EmojiChooser,
  props: {},
  parentElementDefinition: gtkPopover
});

const gtkEntry = defineElement({
  tagName: "gtk-entry",
  constructorClass: Gtk.Entry,
  props: {
    activatesDefault: {
      key: "activates_default",
      type: Type.Boolean,
      setter: "set_activates_default"
    },
    attributes: {
      key: "attributes",
      type: Type.Object,
      setter: "set_attributes"
    },
    buffer: {
      key: "buffer",
      type: Type.Object,
      setter: "set_buffer"
    },
    completion: {
      key: "completion",
      type: Type.Object,
      setter: "set_completion"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    inputHints: {
      key: "input_hints",
      type: Type.Object,
      setter: "set_input_hints"
    },
    inputPurpose: {
      key: "input_purpose",
      type: Type.Object,
      setter: "set_input_purpose"
    },
    invisibleChar: {
      key: "invisible_char",
      type: Type.Number,
      setter: "set_invisible_char"
    },
    maxLength: {
      key: "max_length",
      type: Type.Number,
      setter: "set_max_length"
    },
    overwriteMode: {
      key: "overwrite_mode",
      type: Type.Boolean,
      setter: "set_overwrite_mode"
    },
    placeholderText: {
      key: "placeholder_text",
      type: Type.String,
      setter: "set_placeholder_text"
    },
    progressFraction: {
      key: "progress_fraction",
      type: Type.Number,
      setter: "set_progress_fraction"
    },
    progressPulseStep: {
      key: "progress_pulse_step",
      type: Type.Number,
      setter: "set_progress_pulse_step"
    },
    tabs: {
      key: "tabs",
      type: Type.Object,
      setter: "set_tabs"
    },
    visibility: {
      key: "visibility",
      type: Type.Boolean,
      setter: "set_visibility"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkExpander = defineElement({
  tagName: "gtk-expander",
  constructorClass: Gtk.Expander,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    expanded: {
      key: "expanded",
      type: Type.Boolean,
      setter: "set_expanded"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    labelWidget: {
      key: "label_widget",
      type: Type.Object,
      setter: "set_label_widget"
    },
    resizeToplevel: {
      key: "resize_toplevel",
      type: Type.Boolean,
      setter: "set_resize_toplevel"
    },
    useMarkup: {
      key: "use_markup",
      type: Type.Boolean,
      setter: "set_use_markup"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkFileChooserDialog = defineElement({
  tagName: "gtk-file-chooser-dialog",
  constructorClass: Gtk.FileChooserDialog,
  props: {},
  parentElementDefinition: gtkDialog
});

const gtkFileChooserWidget = defineElement({
  tagName: "gtk-file-chooser-widget",
  constructorClass: Gtk.FileChooserWidget,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkFixed = defineElement({
  tagName: "gtk-fixed",
  constructorClass: Gtk.Fixed,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkFlowBox = defineElement({
  tagName: "gtk-flow-box",
  constructorClass: Gtk.FlowBox,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    columnSpacing: {
      key: "column_spacing",
      type: Type.Number,
      setter: "set_column_spacing"
    },
    homogeneous: {
      key: "homogeneous",
      type: Type.Boolean,
      setter: "set_homogeneous"
    },
    maxChildrenPerLine: {
      key: "max_children_per_line",
      type: Type.Number,
      setter: "set_max_children_per_line"
    },
    minChildrenPerLine: {
      key: "min_children_per_line",
      type: Type.Number,
      setter: "set_min_children_per_line"
    },
    rowSpacing: {
      key: "row_spacing",
      type: Type.Number,
      setter: "set_row_spacing"
    },
    selectionMode: {
      key: "selection_mode",
      type: Type.Object,
      setter: "set_selection_mode"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkFlowBoxChild = defineElement({
  tagName: "gtk-flow-box-child",
  constructorClass: Gtk.FlowBoxChild,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkFontButton = defineElement({
  tagName: "gtk-font-button",
  constructorClass: Gtk.FontButton,
  props: {
    modal: {
      key: "modal",
      type: Type.Boolean,
      setter: "set_modal"
    },
    title: {
      key: "title",
      type: Type.String,
      setter: "set_title"
    },
    useFont: {
      key: "use_font",
      type: Type.Boolean,
      setter: "set_use_font"
    },
    useSize: {
      key: "use_size",
      type: Type.Boolean,
      setter: "set_use_size"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkFontChooserDialog = defineElement({
  tagName: "gtk-font-chooser-dialog",
  constructorClass: Gtk.FontChooserDialog,
  props: {},
  parentElementDefinition: gtkDialog
});

const gtkFontChooserWidget = defineElement({
  tagName: "gtk-font-chooser-widget",
  constructorClass: Gtk.FontChooserWidget,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkFrame = defineElement({
  tagName: "gtk-frame",
  constructorClass: Gtk.Frame,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    labelWidget: {
      key: "label_widget",
      type: Type.Object,
      setter: "set_label_widget"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkGlArea = defineElement({
  tagName: "gtk-gl-area",
  constructorClass: Gtk.GLArea,
  props: {
    autoRender: {
      key: "auto_render",
      type: Type.Boolean,
      setter: "set_auto_render"
    },
    hasDepthBuffer: {
      key: "has_depth_buffer",
      type: Type.Boolean,
      setter: "set_has_depth_buffer"
    },
    hasStencilBuffer: {
      key: "has_stencil_buffer",
      type: Type.Boolean,
      setter: "set_has_stencil_buffer"
    },
    useEs: {
      key: "use_es",
      type: Type.Boolean,
      setter: "set_use_es"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkGrid = defineElement({
  tagName: "gtk-grid",
  constructorClass: Gtk.Grid,
  props: {
    baselineRow: {
      key: "baseline_row",
      type: Type.Number,
      setter: "set_baseline_row"
    },
    columnHomogeneous: {
      key: "column_homogeneous",
      type: Type.Boolean,
      setter: "set_column_homogeneous"
    },
    columnSpacing: {
      key: "column_spacing",
      type: Type.Number,
      setter: "set_column_spacing"
    },
    rowHomogeneous: {
      key: "row_homogeneous",
      type: Type.Boolean,
      setter: "set_row_homogeneous"
    },
    rowSpacing: {
      key: "row_spacing",
      type: Type.Number,
      setter: "set_row_spacing"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkListBase = defineElement({
  tagName: "gtk-list-base",
  constructorClass: Gtk.ListBase,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkGridView = defineElement({
  tagName: "gtk-grid-view",
  constructorClass: Gtk.GridView,
  props: {
    enableRubberband: {
      key: "enable_rubberband",
      type: Type.Boolean,
      setter: "set_enable_rubberband"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    maxColumns: {
      key: "max_columns",
      type: Type.Number,
      setter: "set_max_columns"
    },
    minColumns: {
      key: "min_columns",
      type: Type.Number,
      setter: "set_min_columns"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkListBase
});

const gtkHeaderBar = defineElement({
  tagName: "gtk-header-bar",
  constructorClass: Gtk.HeaderBar,
  props: {
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    showTitleButtons: {
      key: "show_title_buttons",
      type: Type.Boolean,
      setter: "set_show_title_buttons"
    },
    titleWidget: {
      key: "title_widget",
      type: Type.Object,
      setter: "set_title_widget"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkIconView = defineElement({
  tagName: "gtk-icon-view",
  constructorClass: Gtk.IconView,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    columnSpacing: {
      key: "column_spacing",
      type: Type.Number,
      setter: "set_column_spacing"
    },
    columns: {
      key: "columns",
      type: Type.Number,
      setter: "set_columns"
    },
    itemOrientation: {
      key: "item_orientation",
      type: Type.Object,
      setter: "set_item_orientation"
    },
    itemPadding: {
      key: "item_padding",
      type: Type.Number,
      setter: "set_item_padding"
    },
    itemWidth: {
      key: "item_width",
      type: Type.Number,
      setter: "set_item_width"
    },
    margin: {
      key: "margin",
      type: Type.Number,
      setter: "set_margin"
    },
    markupColumn: {
      key: "markup_column",
      type: Type.Number,
      setter: "set_markup_column"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    pixbufColumn: {
      key: "pixbuf_column",
      type: Type.Number,
      setter: "set_pixbuf_column"
    },
    reorderable: {
      key: "reorderable",
      type: Type.Boolean,
      setter: "set_reorderable"
    },
    rowSpacing: {
      key: "row_spacing",
      type: Type.Number,
      setter: "set_row_spacing"
    },
    selectionMode: {
      key: "selection_mode",
      type: Type.Object,
      setter: "set_selection_mode"
    },
    spacing: {
      key: "spacing",
      type: Type.Number,
      setter: "set_spacing"
    },
    textColumn: {
      key: "text_column",
      type: Type.Number,
      setter: "set_text_column"
    },
    tooltipColumn: {
      key: "tooltip_column",
      type: Type.Number,
      setter: "set_tooltip_column"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkImage = defineElement({
  tagName: "gtk-image",
  constructorClass: Gtk.Image,
  props: {
    iconSize: {
      key: "icon_size",
      type: Type.Object,
      setter: "set_icon_size"
    },
    pixelSize: {
      key: "pixel_size",
      type: Type.Number,
      setter: "set_pixel_size"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkInfoBar = defineElement({
  tagName: "gtk-info-bar",
  constructorClass: Gtk.InfoBar,
  props: {
    messageType: {
      key: "message_type",
      type: Type.Object,
      setter: "set_message_type"
    },
    revealed: {
      key: "revealed",
      type: Type.Boolean,
      setter: "set_revealed"
    },
    showCloseButton: {
      key: "show_close_button",
      type: Type.Boolean,
      setter: "set_show_close_button"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkLabel = defineElement({
  tagName: "gtk-label",
  constructorClass: Gtk.Label,
  props: {
    attributes: {
      key: "attributes",
      type: Type.Object,
      setter: "set_attributes"
    },
    ellipsize: {
      key: "ellipsize",
      type: Type.Object,
      setter: "set_ellipsize"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    justify: {
      key: "justify",
      type: Type.Object,
      setter: "set_justify"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    lines: {
      key: "lines",
      type: Type.Number,
      setter: "set_lines"
    },
    maxWidthChars: {
      key: "max_width_chars",
      type: Type.Number,
      setter: "set_max_width_chars"
    },
    mnemonicWidget: {
      key: "mnemonic_widget",
      type: Type.Object,
      setter: "set_mnemonic_widget"
    },
    naturalWrapMode: {
      key: "natural_wrap_mode",
      type: Type.Object,
      setter: "set_natural_wrap_mode"
    },
    selectable: {
      key: "selectable",
      type: Type.Boolean,
      setter: "set_selectable"
    },
    singleLineMode: {
      key: "single_line_mode",
      type: Type.Boolean,
      setter: "set_single_line_mode"
    },
    useMarkup: {
      key: "use_markup",
      type: Type.Boolean,
      setter: "set_use_markup"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    },
    widthChars: {
      key: "width_chars",
      type: Type.Number,
      setter: "set_width_chars"
    },
    wrap: {
      key: "wrap",
      type: Type.Boolean,
      setter: "set_wrap"
    },
    wrapMode: {
      key: "wrap_mode",
      type: Type.Object,
      setter: "set_wrap_mode"
    },
    xalign: {
      key: "xalign",
      type: Type.Number,
      setter: "set_xalign"
    },
    yalign: {
      key: "yalign",
      type: Type.Number,
      setter: "set_yalign"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkLevelBar = defineElement({
  tagName: "gtk-level-bar",
  constructorClass: Gtk.LevelBar,
  props: {
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    maxValue: {
      key: "max_value",
      type: Type.Number,
      setter: "set_max_value"
    },
    minValue: {
      key: "min_value",
      type: Type.Number,
      setter: "set_min_value"
    },
    mode: {
      key: "mode",
      type: Type.Object,
      setter: "set_mode"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkLinkButton = defineElement({
  tagName: "gtk-link-button",
  constructorClass: Gtk.LinkButton,
  props: {
    uri: {
      key: "uri",
      type: Type.String,
      setter: "set_uri"
    },
    visited: {
      key: "visited",
      type: Type.Boolean,
      setter: "set_visited"
    }
  },
  parentElementDefinition: gtkButton
});

const gtkListBox = defineElement({
  tagName: "gtk-list-box",
  constructorClass: Gtk.ListBox,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    selectionMode: {
      key: "selection_mode",
      type: Type.Object,
      setter: "set_selection_mode"
    },
    showSeparators: {
      key: "show_separators",
      type: Type.Boolean,
      setter: "set_show_separators"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkListView = defineElement({
  tagName: "gtk-list-view",
  constructorClass: Gtk.ListView,
  props: {
    enableRubberband: {
      key: "enable_rubberband",
      type: Type.Boolean,
      setter: "set_enable_rubberband"
    },
    factory: {
      key: "factory",
      type: Type.Object,
      setter: "set_factory"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    showSeparators: {
      key: "show_separators",
      type: Type.Boolean,
      setter: "set_show_separators"
    },
    singleClickActivate: {
      key: "single_click_activate",
      type: Type.Boolean,
      setter: "set_single_click_activate"
    }
  },
  parentElementDefinition: gtkListBase
});

const gtkLockButton = defineElement({
  tagName: "gtk-lock-button",
  constructorClass: Gtk.LockButton,
  props: {
    permission: {
      key: "permission",
      type: Type.Object,
      setter: "set_permission"
    }
  },
  parentElementDefinition: gtkButton
});

const gtkMediaControls = defineElement({
  tagName: "gtk-media-controls",
  constructorClass: Gtk.MediaControls,
  props: {
    mediaStream: {
      key: "media_stream",
      type: Type.Object,
      setter: "set_media_stream"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkMenuButton = defineElement({
  tagName: "gtk-menu-button",
  constructorClass: Gtk.MenuButton,
  props: {
    alwaysShowArrow: {
      key: "always_show_arrow",
      type: Type.Boolean,
      setter: "set_always_show_arrow"
    },
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    direction: {
      key: "direction",
      type: Type.Object,
      setter: "set_direction"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    iconName: {
      key: "icon_name",
      type: Type.String,
      setter: "set_icon_name"
    },
    label: {
      key: "label",
      type: Type.String,
      setter: "set_label"
    },
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    },
    popover: {
      key: "popover",
      type: Type.Object,
      setter: "set_popover"
    },
    primary: {
      key: "primary",
      type: Type.Boolean,
      setter: "set_primary"
    },
    useUnderline: {
      key: "use_underline",
      type: Type.Boolean,
      setter: "set_use_underline"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkMessageDialog = defineElement({
  tagName: "gtk-message-dialog",
  constructorClass: Gtk.MessageDialog,
  props: {},
  parentElementDefinition: gtkDialog
});

const gtkNotebook = defineElement({
  tagName: "gtk-notebook",
  constructorClass: Gtk.Notebook,
  props: {
    groupName: {
      key: "group_name",
      type: Type.String,
      setter: "set_group_name"
    },
    scrollable: {
      key: "scrollable",
      type: Type.Boolean,
      setter: "set_scrollable"
    },
    showBorder: {
      key: "show_border",
      type: Type.Boolean,
      setter: "set_show_border"
    },
    showTabs: {
      key: "show_tabs",
      type: Type.Boolean,
      setter: "set_show_tabs"
    },
    tabPos: {
      key: "tab_pos",
      type: Type.Object,
      setter: "set_tab_pos"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkOverlay = defineElement({
  tagName: "gtk-overlay",
  constructorClass: Gtk.Overlay,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkPageSetupUnixDialog = defineElement({
  tagName: "gtk-page-setup-unix-dialog",
  constructorClass: Gtk.PageSetupUnixDialog,
  props: {},
  parentElementDefinition: gtkDialog
});

const gtkPaned = defineElement({
  tagName: "gtk-paned",
  constructorClass: Gtk.Paned,
  props: {
    endChild: {
      key: "end_child",
      type: Type.Object,
      setter: "set_end_child"
    },
    position: {
      key: "position",
      type: Type.Number,
      setter: "set_position"
    },
    resizeEndChild: {
      key: "resize_end_child",
      type: Type.Boolean,
      setter: "set_resize_end_child"
    },
    resizeStartChild: {
      key: "resize_start_child",
      type: Type.Boolean,
      setter: "set_resize_start_child"
    },
    shrinkEndChild: {
      key: "shrink_end_child",
      type: Type.Boolean,
      setter: "set_shrink_end_child"
    },
    shrinkStartChild: {
      key: "shrink_start_child",
      type: Type.Boolean,
      setter: "set_shrink_start_child"
    },
    startChild: {
      key: "start_child",
      type: Type.Object,
      setter: "set_start_child"
    },
    wideHandle: {
      key: "wide_handle",
      type: Type.Boolean,
      setter: "set_wide_handle"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkPasswordEntry = defineElement({
  tagName: "gtk-password-entry",
  constructorClass: Gtk.PasswordEntry,
  props: {
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    showPeekIcon: {
      key: "show_peek_icon",
      type: Type.Boolean,
      setter: "set_show_peek_icon"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkPicture = defineElement({
  tagName: "gtk-picture",
  constructorClass: Gtk.Picture,
  props: {
    alternativeText: {
      key: "alternative_text",
      type: Type.String,
      setter: "set_alternative_text"
    },
    canShrink: {
      key: "can_shrink",
      type: Type.Boolean,
      setter: "set_can_shrink"
    },
    file: {
      key: "file",
      type: Type.Object,
      setter: "set_file"
    },
    keepAspectRatio: {
      key: "keep_aspect_ratio",
      type: Type.Boolean,
      setter: "set_keep_aspect_ratio"
    },
    paintable: {
      key: "paintable",
      type: Type.Object,
      setter: "set_paintable"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkPopoverMenu = defineElement({
  tagName: "gtk-popover-menu",
  constructorClass: Gtk.PopoverMenu,
  props: {
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    }
  },
  parentElementDefinition: gtkPopover
});

const gtkPopoverMenuBar = defineElement({
  tagName: "gtk-popover-menu-bar",
  constructorClass: Gtk.PopoverMenuBar,
  props: {
    menuModel: {
      key: "menu_model",
      type: Type.Object,
      setter: "set_menu_model"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkPrintUnixDialog = defineElement({
  tagName: "gtk-print-unix-dialog",
  constructorClass: Gtk.PrintUnixDialog,
  props: {
    currentPage: {
      key: "current_page",
      type: Type.Number,
      setter: "set_current_page"
    },
    embedPageSetup: {
      key: "embed_page_setup",
      type: Type.Boolean,
      setter: "set_embed_page_setup"
    },
    hasSelection: {
      key: "has_selection",
      type: Type.Boolean,
      setter: "set_has_selection"
    },
    manualCapabilities: {
      key: "manual_capabilities",
      type: Type.Object,
      setter: "set_manual_capabilities"
    },
    pageSetup: {
      key: "page_setup",
      type: Type.Object,
      setter: "set_page_setup"
    },
    supportSelection: {
      key: "support_selection",
      type: Type.Boolean,
      setter: "set_support_selection"
    }
  },
  parentElementDefinition: gtkDialog
});

const gtkProgressBar = defineElement({
  tagName: "gtk-progress-bar",
  constructorClass: Gtk.ProgressBar,
  props: {
    ellipsize: {
      key: "ellipsize",
      type: Type.Object,
      setter: "set_ellipsize"
    },
    fraction: {
      key: "fraction",
      type: Type.Number,
      setter: "set_fraction"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    pulseStep: {
      key: "pulse_step",
      type: Type.Number,
      setter: "set_pulse_step"
    },
    showText: {
      key: "show_text",
      type: Type.Boolean,
      setter: "set_show_text"
    },
    text: {
      key: "text",
      type: Type.String,
      setter: "set_text"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkRange = defineElement({
  tagName: "gtk-range",
  constructorClass: Gtk.Range,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    fillLevel: {
      key: "fill_level",
      type: Type.Number,
      setter: "set_fill_level"
    },
    inverted: {
      key: "inverted",
      type: Type.Boolean,
      setter: "set_inverted"
    },
    restrictToFillLevel: {
      key: "restrict_to_fill_level",
      type: Type.Boolean,
      setter: "set_restrict_to_fill_level"
    },
    roundDigits: {
      key: "round_digits",
      type: Type.Number,
      setter: "set_round_digits"
    },
    showFillLevel: {
      key: "show_fill_level",
      type: Type.Boolean,
      setter: "set_show_fill_level"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkRevealer = defineElement({
  tagName: "gtk-revealer",
  constructorClass: Gtk.Revealer,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    revealChild: {
      key: "reveal_child",
      type: Type.Boolean,
      setter: "set_reveal_child"
    },
    transitionDuration: {
      key: "transition_duration",
      type: Type.Number,
      setter: "set_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkScale = defineElement({
  tagName: "gtk-scale",
  constructorClass: Gtk.Scale,
  props: {
    digits: {
      key: "digits",
      type: Type.Number,
      setter: "set_digits"
    },
    drawValue: {
      key: "draw_value",
      type: Type.Boolean,
      setter: "set_draw_value"
    },
    hasOrigin: {
      key: "has_origin",
      type: Type.Boolean,
      setter: "set_has_origin"
    },
    valuePos: {
      key: "value_pos",
      type: Type.Object,
      setter: "set_value_pos"
    }
  },
  parentElementDefinition: gtkRange
});

const gtkScaleButton = defineElement({
  tagName: "gtk-scale-button",
  constructorClass: Gtk.ScaleButton,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkScrollbar = defineElement({
  tagName: "gtk-scrollbar",
  constructorClass: Gtk.Scrollbar,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkScrolledWindow = defineElement({
  tagName: "gtk-scrolled-window",
  constructorClass: Gtk.ScrolledWindow,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    hadjustment: {
      key: "hadjustment",
      type: Type.Object,
      setter: "set_hadjustment"
    },
    hasFrame: {
      key: "has_frame",
      type: Type.Boolean,
      setter: "set_has_frame"
    },
    kineticScrolling: {
      key: "kinetic_scrolling",
      type: Type.Boolean,
      setter: "set_kinetic_scrolling"
    },
    maxContentHeight: {
      key: "max_content_height",
      type: Type.Number,
      setter: "set_max_content_height"
    },
    maxContentWidth: {
      key: "max_content_width",
      type: Type.Number,
      setter: "set_max_content_width"
    },
    minContentHeight: {
      key: "min_content_height",
      type: Type.Number,
      setter: "set_min_content_height"
    },
    minContentWidth: {
      key: "min_content_width",
      type: Type.Number,
      setter: "set_min_content_width"
    },
    overlayScrolling: {
      key: "overlay_scrolling",
      type: Type.Boolean,
      setter: "set_overlay_scrolling"
    },
    propagateNaturalHeight: {
      key: "propagate_natural_height",
      type: Type.Boolean,
      setter: "set_propagate_natural_height"
    },
    propagateNaturalWidth: {
      key: "propagate_natural_width",
      type: Type.Boolean,
      setter: "set_propagate_natural_width"
    },
    vadjustment: {
      key: "vadjustment",
      type: Type.Object,
      setter: "set_vadjustment"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkSearchBar = defineElement({
  tagName: "gtk-search-bar",
  constructorClass: Gtk.SearchBar,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    keyCaptureWidget: {
      key: "key_capture_widget",
      type: Type.Object,
      setter: "set_key_capture_widget"
    },
    showCloseButton: {
      key: "show_close_button",
      type: Type.Boolean,
      setter: "set_show_close_button"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkSearchEntry = defineElement({
  tagName: "gtk-search-entry",
  constructorClass: Gtk.SearchEntry,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkSeparator = defineElement({
  tagName: "gtk-separator",
  constructorClass: Gtk.Separator,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkShortcutLabel = defineElement({
  tagName: "gtk-shortcut-label",
  constructorClass: Gtk.ShortcutLabel,
  props: {
    accelerator: {
      key: "accelerator",
      type: Type.String,
      setter: "set_accelerator"
    },
    disabledText: {
      key: "disabled_text",
      type: Type.String,
      setter: "set_disabled_text"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkShortcutsGroup = defineElement({
  tagName: "gtk-shortcuts-group",
  constructorClass: Gtk.ShortcutsGroup,
  props: {},
  parentElementDefinition: gtkBox
});

const gtkShortcutsSection = defineElement({
  tagName: "gtk-shortcuts-section",
  constructorClass: Gtk.ShortcutsSection,
  props: {},
  parentElementDefinition: gtkBox
});

const gtkShortcutsShortcut = defineElement({
  tagName: "gtk-shortcuts-shortcut",
  constructorClass: Gtk.ShortcutsShortcut,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkShortcutsWindow = defineElement({
  tagName: "gtk-shortcuts-window",
  constructorClass: Gtk.ShortcutsWindow,
  props: {},
  parentElementDefinition: gtkWindow
});

const gtkSpinButton = defineElement({
  tagName: "gtk-spin-button",
  constructorClass: Gtk.SpinButton,
  props: {
    adjustment: {
      key: "adjustment",
      type: Type.Object,
      setter: "set_adjustment"
    },
    climbRate: {
      key: "climb_rate",
      type: Type.Number,
      setter: "set_climb_rate"
    },
    digits: {
      key: "digits",
      type: Type.Number,
      setter: "set_digits"
    },
    numeric: {
      key: "numeric",
      type: Type.Boolean,
      setter: "set_numeric"
    },
    snapToTicks: {
      key: "snap_to_ticks",
      type: Type.Boolean,
      setter: "set_snap_to_ticks"
    },
    updatePolicy: {
      key: "update_policy",
      type: Type.Object,
      setter: "set_update_policy"
    },
    value: {
      key: "value",
      type: Type.Number,
      setter: "set_value"
    },
    wrap: {
      key: "wrap",
      type: Type.Boolean,
      setter: "set_wrap"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkSpinner = defineElement({
  tagName: "gtk-spinner",
  constructorClass: Gtk.Spinner,
  props: {
    spinning: {
      key: "spinning",
      type: Type.Boolean,
      setter: "set_spinning"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkStack = defineElement({
  tagName: "gtk-stack",
  constructorClass: Gtk.Stack,
  props: {
    hhomogeneous: {
      key: "hhomogeneous",
      type: Type.Boolean,
      setter: "set_hhomogeneous"
    },
    interpolateSize: {
      key: "interpolate_size",
      type: Type.Boolean,
      setter: "set_interpolate_size"
    },
    transitionDuration: {
      key: "transition_duration",
      type: Type.Number,
      setter: "set_transition_duration"
    },
    transitionType: {
      key: "transition_type",
      type: Type.Object,
      setter: "set_transition_type"
    },
    vhomogeneous: {
      key: "vhomogeneous",
      type: Type.Boolean,
      setter: "set_vhomogeneous"
    },
    visibleChild: {
      key: "visible_child",
      type: Type.Object,
      setter: "set_visible_child"
    },
    visibleChildName: {
      key: "visible_child_name",
      type: Type.String,
      setter: "set_visible_child_name"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkStackSidebar = defineElement({
  tagName: "gtk-stack-sidebar",
  constructorClass: Gtk.StackSidebar,
  props: {
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkStackSwitcher = defineElement({
  tagName: "gtk-stack-switcher",
  constructorClass: Gtk.StackSwitcher,
  props: {
    stack: {
      key: "stack",
      type: Type.Object,
      setter: "set_stack"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkStatusbar = defineElement({
  tagName: "gtk-statusbar",
  constructorClass: Gtk.Statusbar,
  props: {},
  parentElementDefinition: gtkWidget
});

const gtkSwitch = defineElement({
  tagName: "gtk-switch",
  constructorClass: Gtk.Switch,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    },
    state: {
      key: "state",
      type: Type.Boolean,
      setter: "set_state"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkText = defineElement({
  tagName: "gtk-text",
  constructorClass: Gtk.Text,
  props: {
    activatesDefault: {
      key: "activates_default",
      type: Type.Boolean,
      setter: "set_activates_default"
    },
    attributes: {
      key: "attributes",
      type: Type.Object,
      setter: "set_attributes"
    },
    buffer: {
      key: "buffer",
      type: Type.Object,
      setter: "set_buffer"
    },
    enableEmojiCompletion: {
      key: "enable_emoji_completion",
      type: Type.Boolean,
      setter: "set_enable_emoji_completion"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    inputHints: {
      key: "input_hints",
      type: Type.Object,
      setter: "set_input_hints"
    },
    inputPurpose: {
      key: "input_purpose",
      type: Type.Object,
      setter: "set_input_purpose"
    },
    invisibleChar: {
      key: "invisible_char",
      type: Type.Number,
      setter: "set_invisible_char"
    },
    maxLength: {
      key: "max_length",
      type: Type.Number,
      setter: "set_max_length"
    },
    overwriteMode: {
      key: "overwrite_mode",
      type: Type.Boolean,
      setter: "set_overwrite_mode"
    },
    placeholderText: {
      key: "placeholder_text",
      type: Type.String,
      setter: "set_placeholder_text"
    },
    propagateTextWidth: {
      key: "propagate_text_width",
      type: Type.Boolean,
      setter: "set_propagate_text_width"
    },
    tabs: {
      key: "tabs",
      type: Type.Object,
      setter: "set_tabs"
    },
    truncateMultiline: {
      key: "truncate_multiline",
      type: Type.Boolean,
      setter: "set_truncate_multiline"
    },
    visibility: {
      key: "visibility",
      type: Type.Boolean,
      setter: "set_visibility"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkTextView = defineElement({
  tagName: "gtk-text-view",
  constructorClass: Gtk.TextView,
  props: {
    acceptsTab: {
      key: "accepts_tab",
      type: Type.Boolean,
      setter: "set_accepts_tab"
    },
    bottomMargin: {
      key: "bottom_margin",
      type: Type.Number,
      setter: "set_bottom_margin"
    },
    buffer: {
      key: "buffer",
      type: Type.Object,
      setter: "set_buffer"
    },
    cursorVisible: {
      key: "cursor_visible",
      type: Type.Boolean,
      setter: "set_cursor_visible"
    },
    editable: {
      key: "editable",
      type: Type.Boolean,
      setter: "set_editable"
    },
    extraMenu: {
      key: "extra_menu",
      type: Type.Object,
      setter: "set_extra_menu"
    },
    indent: {
      key: "indent",
      type: Type.Number,
      setter: "set_indent"
    },
    inputHints: {
      key: "input_hints",
      type: Type.Object,
      setter: "set_input_hints"
    },
    inputPurpose: {
      key: "input_purpose",
      type: Type.Object,
      setter: "set_input_purpose"
    },
    justification: {
      key: "justification",
      type: Type.Object,
      setter: "set_justification"
    },
    leftMargin: {
      key: "left_margin",
      type: Type.Number,
      setter: "set_left_margin"
    },
    monospace: {
      key: "monospace",
      type: Type.Boolean,
      setter: "set_monospace"
    },
    overwrite: {
      key: "overwrite",
      type: Type.Boolean,
      setter: "set_overwrite"
    },
    pixelsAboveLines: {
      key: "pixels_above_lines",
      type: Type.Number,
      setter: "set_pixels_above_lines"
    },
    pixelsBelowLines: {
      key: "pixels_below_lines",
      type: Type.Number,
      setter: "set_pixels_below_lines"
    },
    pixelsInsideWrap: {
      key: "pixels_inside_wrap",
      type: Type.Number,
      setter: "set_pixels_inside_wrap"
    },
    rightMargin: {
      key: "right_margin",
      type: Type.Number,
      setter: "set_right_margin"
    },
    tabs: {
      key: "tabs",
      type: Type.Object,
      setter: "set_tabs"
    },
    topMargin: {
      key: "top_margin",
      type: Type.Number,
      setter: "set_top_margin"
    },
    wrapMode: {
      key: "wrap_mode",
      type: Type.Object,
      setter: "set_wrap_mode"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkToggleButton = defineElement({
  tagName: "gtk-toggle-button",
  constructorClass: Gtk.ToggleButton,
  props: {
    active: {
      key: "active",
      type: Type.Boolean,
      setter: "set_active"
    }
  },
  parentElementDefinition: gtkButton
});

const gtkTreeExpander = defineElement({
  tagName: "gtk-tree-expander",
  constructorClass: Gtk.TreeExpander,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    indentForIcon: {
      key: "indent_for_icon",
      type: Type.Boolean,
      setter: "set_indent_for_icon"
    },
    listRow: {
      key: "list_row",
      type: Type.Object,
      setter: "set_list_row"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkTreeView = defineElement({
  tagName: "gtk-tree-view",
  constructorClass: Gtk.TreeView,
  props: {
    activateOnSingleClick: {
      key: "activate_on_single_click",
      type: Type.Boolean,
      setter: "set_activate_on_single_click"
    },
    enableSearch: {
      key: "enable_search",
      type: Type.Boolean,
      setter: "set_enable_search"
    },
    enableTreeLines: {
      key: "enable_tree_lines",
      type: Type.Boolean,
      setter: "set_enable_tree_lines"
    },
    expanderColumn: {
      key: "expander_column",
      type: Type.Object,
      setter: "set_expander_column"
    },
    fixedHeightMode: {
      key: "fixed_height_mode",
      type: Type.Boolean,
      setter: "set_fixed_height_mode"
    },
    headersClickable: {
      key: "headers_clickable",
      type: Type.Boolean,
      setter: "set_headers_clickable"
    },
    headersVisible: {
      key: "headers_visible",
      type: Type.Boolean,
      setter: "set_headers_visible"
    },
    hoverExpand: {
      key: "hover_expand",
      type: Type.Boolean,
      setter: "set_hover_expand"
    },
    hoverSelection: {
      key: "hover_selection",
      type: Type.Boolean,
      setter: "set_hover_selection"
    },
    levelIndentation: {
      key: "level_indentation",
      type: Type.Number,
      setter: "set_level_indentation"
    },
    model: {
      key: "model",
      type: Type.Object,
      setter: "set_model"
    },
    reorderable: {
      key: "reorderable",
      type: Type.Boolean,
      setter: "set_reorderable"
    },
    rubberBanding: {
      key: "rubber_banding",
      type: Type.Boolean,
      setter: "set_rubber_banding"
    },
    searchColumn: {
      key: "search_column",
      type: Type.Number,
      setter: "set_search_column"
    },
    showExpanders: {
      key: "show_expanders",
      type: Type.Boolean,
      setter: "set_show_expanders"
    },
    tooltipColumn: {
      key: "tooltip_column",
      type: Type.Number,
      setter: "set_tooltip_column"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkVideo = defineElement({
  tagName: "gtk-video",
  constructorClass: Gtk.Video,
  props: {
    autoplay: {
      key: "autoplay",
      type: Type.Boolean,
      setter: "set_autoplay"
    },
    file: {
      key: "file",
      type: Type.Object,
      setter: "set_file"
    },
    loop: {
      key: "loop",
      type: Type.Boolean,
      setter: "set_loop"
    },
    mediaStream: {
      key: "media_stream",
      type: Type.Object,
      setter: "set_media_stream"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkViewport = defineElement({
  tagName: "gtk-viewport",
  constructorClass: Gtk.Viewport,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    },
    scrollToFocus: {
      key: "scroll_to_focus",
      type: Type.Boolean,
      setter: "set_scroll_to_focus"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkVolumeButton = defineElement({
  tagName: "gtk-volume-button",
  constructorClass: Gtk.VolumeButton,
  props: {},
  parentElementDefinition: gtkScaleButton
});

const gtkWindowControls = defineElement({
  tagName: "gtk-window-controls",
  constructorClass: Gtk.WindowControls,
  props: {
    decorationLayout: {
      key: "decoration_layout",
      type: Type.String,
      setter: "set_decoration_layout"
    },
    side: {
      key: "side",
      type: Type.Object,
      setter: "set_side"
    }
  },
  parentElementDefinition: gtkWidget
});

const gtkWindowHandle = defineElement({
  tagName: "gtk-window-handle",
  constructorClass: Gtk.WindowHandle,
  props: {
    child: {
      key: "child",
      type: Type.Object,
      setter: "set_child"
    }
  },
  parentElementDefinition: gtkWidget
});

var elements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  adwActionRow: adwActionRow,
  adwApplicationWindow: adwApplicationWindow,
  adwAvatar: adwAvatar,
  adwBin: adwBin,
  adwButtonContent: adwButtonContent,
  adwCarousel: adwCarousel,
  adwCarouselIndicatorDots: adwCarouselIndicatorDots,
  adwCarouselIndicatorLines: adwCarouselIndicatorLines,
  adwClamp: adwClamp,
  adwClampScrollable: adwClampScrollable,
  adwComboRow: adwComboRow,
  adwExpanderRow: adwExpanderRow,
  adwFlap: adwFlap,
  adwHeaderBar: adwHeaderBar,
  adwLeaflet: adwLeaflet,
  adwPreferencesGroup: adwPreferencesGroup,
  adwPreferencesPage: adwPreferencesPage,
  adwPreferencesRow: adwPreferencesRow,
  adwPreferencesWindow: adwPreferencesWindow,
  adwSplitButton: adwSplitButton,
  adwSqueezer: adwSqueezer,
  adwStatusPage: adwStatusPage,
  adwTabBar: adwTabBar,
  adwTabView: adwTabView,
  adwToastOverlay: adwToastOverlay,
  adwViewStack: adwViewStack,
  adwViewSwitcher: adwViewSwitcher,
  adwViewSwitcherBar: adwViewSwitcherBar,
  adwViewSwitcherTitle: adwViewSwitcherTitle,
  adwWindow: adwWindow,
  adwWindowTitle: adwWindowTitle,
  gtkAboutDialog: gtkAboutDialog,
  gtkActionBar: gtkActionBar,
  gtkAppChooserButton: gtkAppChooserButton,
  gtkAppChooserDialog: gtkAppChooserDialog,
  gtkAppChooserWidget: gtkAppChooserWidget,
  gtkApplicationWindow: gtkApplicationWindow,
  gtkAspectFrame: gtkAspectFrame,
  gtkAssistant: gtkAssistant,
  gtkBox: gtkBox,
  gtkButton: gtkButton,
  gtkCalendar: gtkCalendar,
  gtkCellView: gtkCellView,
  gtkCenterBox: gtkCenterBox,
  gtkCheckButton: gtkCheckButton,
  gtkColorButton: gtkColorButton,
  gtkColorChooserDialog: gtkColorChooserDialog,
  gtkColorChooserWidget: gtkColorChooserWidget,
  gtkColumnView: gtkColumnView,
  gtkComboBox: gtkComboBox,
  gtkComboBoxText: gtkComboBoxText,
  gtkDialog: gtkDialog,
  gtkDragIcon: gtkDragIcon,
  gtkDrawingArea: gtkDrawingArea,
  gtkDropDown: gtkDropDown,
  gtkEditableLabel: gtkEditableLabel,
  gtkEmojiChooser: gtkEmojiChooser,
  gtkEntry: gtkEntry,
  gtkExpander: gtkExpander,
  gtkFileChooserDialog: gtkFileChooserDialog,
  gtkFileChooserWidget: gtkFileChooserWidget,
  gtkFixed: gtkFixed,
  gtkFlowBox: gtkFlowBox,
  gtkFlowBoxChild: gtkFlowBoxChild,
  gtkFontButton: gtkFontButton,
  gtkFontChooserDialog: gtkFontChooserDialog,
  gtkFontChooserWidget: gtkFontChooserWidget,
  gtkFrame: gtkFrame,
  gtkGlArea: gtkGlArea,
  gtkGrid: gtkGrid,
  gtkGridView: gtkGridView,
  gtkHeaderBar: gtkHeaderBar,
  gtkIconView: gtkIconView,
  gtkImage: gtkImage,
  gtkInfoBar: gtkInfoBar,
  gtkLabel: gtkLabel,
  gtkLevelBar: gtkLevelBar,
  gtkLinkButton: gtkLinkButton,
  gtkListBase: gtkListBase,
  gtkListBox: gtkListBox,
  gtkListBoxRow: gtkListBoxRow,
  gtkListView: gtkListView,
  gtkLockButton: gtkLockButton,
  gtkMediaControls: gtkMediaControls,
  gtkMenuButton: gtkMenuButton,
  gtkMessageDialog: gtkMessageDialog,
  gtkNotebook: gtkNotebook,
  gtkOverlay: gtkOverlay,
  gtkPageSetupUnixDialog: gtkPageSetupUnixDialog,
  gtkPaned: gtkPaned,
  gtkPasswordEntry: gtkPasswordEntry,
  gtkPicture: gtkPicture,
  gtkPopover: gtkPopover,
  gtkPopoverMenu: gtkPopoverMenu,
  gtkPopoverMenuBar: gtkPopoverMenuBar,
  gtkPrintUnixDialog: gtkPrintUnixDialog,
  gtkProgressBar: gtkProgressBar,
  gtkRange: gtkRange,
  gtkRevealer: gtkRevealer,
  gtkScale: gtkScale,
  gtkScaleButton: gtkScaleButton,
  gtkScrollbar: gtkScrollbar,
  gtkScrolledWindow: gtkScrolledWindow,
  gtkSearchBar: gtkSearchBar,
  gtkSearchEntry: gtkSearchEntry,
  gtkSeparator: gtkSeparator,
  gtkShortcutLabel: gtkShortcutLabel,
  gtkShortcutsGroup: gtkShortcutsGroup,
  gtkShortcutsSection: gtkShortcutsSection,
  gtkShortcutsShortcut: gtkShortcutsShortcut,
  gtkShortcutsWindow: gtkShortcutsWindow,
  gtkSpinButton: gtkSpinButton,
  gtkSpinner: gtkSpinner,
  gtkStack: gtkStack,
  gtkStackSidebar: gtkStackSidebar,
  gtkStackSwitcher: gtkStackSwitcher,
  gtkStatusbar: gtkStatusbar,
  gtkSwitch: gtkSwitch,
  gtkText: gtkText,
  gtkTextView: gtkTextView,
  gtkToggleButton: gtkToggleButton,
  gtkTreeExpander: gtkTreeExpander,
  gtkTreeView: gtkTreeView,
  gtkVideo: gtkVideo,
  gtkViewport: gtkViewport,
  gtkVolumeButton: gtkVolumeButton,
  gtkWidget: gtkWidget,
  gtkWindow: gtkWindow,
  gtkWindowControls: gtkWindowControls,
  gtkWindowHandle: gtkWindowHandle
});

const keyedByTagName = Object.values(elements).reduce((acc, element) => {
  acc[element.tagName] = element;
  return acc;
}, {});
const keyedByClass = new Map(Object.values(elements).map((element) => [element.constructorClass, element]));

const createElement = (type, isSVG, isCustomizedBuiltIn, vnodeProps) => {
  const definition = keyedByTagName[type];
  if (!definition) {
    throw `Cant create element "${type}"`;
  }
  return definition.createElement(vnodeProps);
};

const createText = (text) => new Gtk.Label({ label: text });

const insert = (el, parent, anchor) => {
  if (el == null) {
    return;
  }
  if (parent instanceof Gtk.Application) {
    if (el instanceof Gtk.Window) {
      return parent.add_window(el);
    } else if (el instanceof Gtk.Label) {
      return;
    }
  } else if (parent instanceof Adw.Window) {
    if (el instanceof Gtk.Widget) {
      if (parent.get_content() != null) {
        throw "ApplicationWindow can only have a single child";
      }
      return parent.set_content(el);
    }
  } else if (parent instanceof Gtk.Window) {
    if (el instanceof Gtk.Widget) {
      if (parent.get_child() != null) {
        throw "ApplicationWindow can only have a single child";
      }
      return parent.set_child(el);
    }
  } else if (parent instanceof Gtk.Box) {
    if (el instanceof Gtk.Widget) {
      if (anchor == null) {
        return parent.append(el);
      } else {
        if (anchor instanceof Gtk.Widget) {
          return parent.insert_child_after(el, anchor.get_prev_sibling());
        }
      }
    }
  } else if (parent instanceof Gtk.Grid) {
    if (el instanceof Gtk.Widget) {
      if (anchor == null) {
        return parent.attach(el, 0, 0, 1, 1);
      } else {
        if (anchor instanceof Gtk.Widget) {
          return parent.attach_next_to(el, anchor, Gtk.PositionType.BOTTOM, 1, 1);
        }
      }
    }
  } else if (parent instanceof Gtk.Widget) {
    if (el instanceof Gtk.Widget) {
      return el.insert_after(parent, anchor ?? null);
    }
  }
  throw `Can't insert "${el?.constructor.name}" in parent "${parent.constructor.name}" yet`;
};

const parentNode = (node) => {
  if (node == null) {
    return null;
  }
  if (node instanceof Gtk.Widget) {
    return node.get_parent();
  }
  throw `parentNode is not implemented for "${node}"`;
};

const nextSibling = (node) => {
  if (node instanceof Gtk.Widget) {
    return node.get_next_sibling();
  }
  const parent = parentNode(node);
  if (parent == null) {
    return null;
  }
  throw `nextSibling is not implemented for parent of type "${parent?.constructor.name}"`;
};

const patchProp = (el, key, prevValue, nextValue) => {
  const definition = keyedByClass.get(el.constructor);
  if (!definition) {
    log(`Cant patch prop "${key}" for element "${el.constructor.name}" yet`);
  } else {
    definition?.patchProperty(el, key, prevValue, nextValue);
  }
};

const remove = (node) => {
  if (node instanceof Gtk.Widget) {
    const parent = node.get_parent();
    if (parent instanceof Gtk.Box || parent instanceof Gtk.Grid) {
      return parent.remove(node);
    } else if (parent instanceof Gtk.Grid) {
      return parent.remove(node);
    }
  }
  throw `Remove is not implemented for "${node?.constructor.name}" from "${node?.get_parent()?.constructor.name}" yet`;
};

const setElementText = (node, text) => {
  if (node instanceof Gtk.Button) {
    node.set_label(text);
    return;
  }
  throw `Cant set element "${node.constructor.name}" text yet`;
};

const setText = (node, text) => {
  if (node instanceof Gtk.Label) {
    return node.set_label(text);
  }
  throw `setText is not implemented for "${node?.constructor.name}"`;
};

const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createText,
  createComment,
  createElement,
  setText,
  setElementText,
  parentNode,
  nextSibling
});

const addStyle = (css) => {
  const te = new TextEncoder();
  const provider = new Gtk.CssProvider();
  provider.load_from_data(te.encode(css));
  Gtk.StyleContext.add_provider_for_display(Gdk.Display.get_default(), provider, Gtk.STYLE_PROVIDER_PRIORITY_USER);
};

export { addStyle, createApp, render };
