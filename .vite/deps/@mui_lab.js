import {
  AlertTitle_default,
  Alert_default,
  Autocomplete_default,
  AvatarGroup_default,
  Button_default,
  CircularProgress_default,
  Collapse_default,
  PaginationItem_default,
  Pagination_default,
  Rating_default,
  Skeleton_default,
  SpeedDialAction_default,
  SpeedDialIcon_default,
  SpeedDial_default,
  Tabs_default,
  ToggleButtonGroup_default,
  ToggleButton_default,
  Typography_default,
  usePagination
} from "./chunk-5NCZCQTP.js";
import {
  init_utils,
  isMuiElement_default,
  ownerDocument_default,
  unsupportedProp_default,
  useControlled_default,
  useEnhancedEffect_default as useEnhancedEffect_default2,
  useForkRef_default,
  useId_default
} from "./chunk-6CD2TQ7I.js";
import {
  capitalize_default,
  createPopper,
  init_lib
} from "./chunk-RK6HELDF.js";
import {
  require_react_dom
} from "./chunk-MW35PKD3.js";
import "./chunk-FCJNIEWI.js";
import "./chunk-SHK5RSQF.js";
import {
  useTheme
} from "./chunk-5WUDRJV7.js";
import {
  HTMLElementType,
  _extends,
  alpha,
  chainPropTypes,
  composeClasses,
  createChainedFunction,
  createUnarySpacing,
  debounce,
  deepmerge,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  exactProp,
  generateUtilityClass,
  generateUtilityClasses,
  getScrollbarSize,
  getValue,
  handleBreakpoints,
  init_esm,
  init_esm2,
  init_extends,
  init_generateUtilityClass,
  integerPropType_default,
  ownerDocument,
  ownerWindow,
  refType_default,
  require_jsx_runtime,
  resolveBreakpointValues,
  setRef,
  styled_default,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback,
  useForkRef,
  useId,
  useIsFocusVisible,
  usePreviousProps_default,
  useThemeProps2 as useThemeProps,
  visuallyHidden_default
} from "./chunk-UN5BGZHZ.js";
import "./chunk-FT6KXUFF.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-ZXWO5H77.js";
import {
  clsx_m_default,
  init_clsx_m
} from "./chunk-4XWBUGSW.js";
import {
  require_prop_types
} from "./chunk-FJ2DDJHN.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/lab/Alert/Alert.js
init_extends();
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var warnedOnce = false;
var Alert_default2 = React.forwardRef(function DeprecatedAlert(props, ref) {
  if (!warnedOnce) {
    console.warn(["MUI: The Alert component was moved from the lab to the core.", "", "You should use `import { Alert } from '@mui/material'`", "or `import Alert from '@mui/material/Alert'`"].join("\n"));
    warnedOnce = true;
  }
  return (0, import_jsx_runtime.jsx)(Alert_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/AlertTitle/AlertTitle.js
init_extends();
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var warnedOnce2 = false;
var AlertTitle_default2 = React2.forwardRef(function DeprecatedAlertTitle(props, ref) {
  if (!warnedOnce2) {
    console.warn(["MUI: The AlertTitle component was moved from the lab to the core.", "", "You should use `import { AlertTitle } from '@mui/material'`", "or `import AlertTitle from '@mui/material/AlertTitle'`"].join("\n"));
    warnedOnce2 = true;
  }
  return (0, import_jsx_runtime2.jsx)(AlertTitle_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/Autocomplete/Autocomplete.js
init_extends();
var React3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var warnedOnce3 = false;
var Autocomplete_default2 = React3.forwardRef(function DeprecatedAutocomplete(props, ref) {
  if (!warnedOnce3) {
    console.warn(["MUI: The Autocomplete component was moved from the lab to the core.", "", "You should use `import { Autocomplete } from '@mui/material'`", "or `import Autocomplete from '@mui/material/Autocomplete'`"].join("\n"));
    warnedOnce3 = true;
  }
  return (0, import_jsx_runtime3.jsx)(Autocomplete_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/AvatarGroup/AvatarGroup.js
init_extends();
var React4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var warnedOnce4 = false;
var AvatarGroup_default2 = React4.forwardRef(function DeprecatedAvatarGroup(props, ref) {
  if (!warnedOnce4) {
    console.warn(["MUI: The AvatarGroup component was moved from the lab to the core.", "", "You should use `import { AvatarGroup } from '@mui/material'`", "or `import AvatarGroup from '@mui/material/AvatarGroup'`"].join("\n"));
    warnedOnce4 = true;
  }
  return (0, import_jsx_runtime4.jsx)(AvatarGroup_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/CalendarPicker/CalendarPicker.js
var React5 = __toESM(require_react());
var warnedOnce5 = false;
var warn = () => {
  if (!warnedOnce5) {
    console.warn(["MUI: The CalendarPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { CalendarPicker } from '@mui/x-date-pickers'`", "or `import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce5 = true;
  }
};
var CalendarPicker = React5.forwardRef(function DeprecatedCalendarPicker() {
  warn();
  return null;
});
var CalendarPicker_default = CalendarPicker;
var calendarPickerClasses = {};

// node_modules/@mui/lab/ClockPicker/ClockPicker.js
var React6 = __toESM(require_react());
var warnedOnce6 = false;
var warn2 = () => {
  if (!warnedOnce6) {
    console.warn(["MUI: The ClockPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { ClockPicker } from '@mui/x-date-pickers'`", "or `import { ClockPicker } from '@mui/x-date-pickers/ClockPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce6 = true;
  }
};
var ClockPicker = React6.forwardRef(function DeprecatedClockPicker() {
  warn2();
  return null;
});
var ClockPicker_default = ClockPicker;
var clockPickerClasses = {};

// node_modules/@mui/lab/DatePicker/DatePicker.js
var React7 = __toESM(require_react());
var warnedOnce7 = false;
var warn3 = () => {
  if (!warnedOnce7) {
    console.warn(["MUI: The DatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DatePicker } from '@mui/x-date-pickers'`", "or `import { DatePicker } from '@mui/x-date-pickers/DatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce7 = true;
  }
};
var DatePicker = React7.forwardRef(function DeprecatedDatePicker() {
  warn3();
  return null;
});
var DatePicker_default = DatePicker;

// node_modules/@mui/lab/DateRangePicker/DateRangePicker.js
var React8 = __toESM(require_react());
var warnedOnce8 = false;
var warn4 = () => {
  if (!warnedOnce8) {
    console.warn(["MUI: The DateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce8 = true;
  }
};
var DateRangePicker = React8.forwardRef(function DeprecatedDateRangePicker() {
  warn4();
  return null;
});
var DateRangePicker_default = DateRangePicker;

// node_modules/@mui/lab/DateRangePickerDay/DateRangePickerDay.js
var React9 = __toESM(require_react());
var warnedOnce9 = false;
var warn5 = () => {
  if (!warnedOnce9) {
    console.warn(["MUI: The DateRangePickerDay component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DateRangePickerDay } from '@mui/x-date-pickers-pro'`", "or `import { DateRangePickerDay } from '@mui/x-date-pickers-pro/DateRangePickerDay'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce9 = true;
  }
};
var DateRangePickerDay = React9.forwardRef(function DeprecatedDateRangePickerDay() {
  warn5();
  return null;
});
var DateRangePickerDay_default = DateRangePickerDay;
var getDateRangePickerDayUtilityClass = (slot) => {
  warn5();
  return "";
};

// node_modules/@mui/lab/DateTimePicker/DateTimePicker.js
var React10 = __toESM(require_react());
var warnedOnce10 = false;
var warn6 = () => {
  if (!warnedOnce10) {
    console.warn(["MUI: The DateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DateTimePicker } from '@mui/x-date-pickers'`", "or `import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce10 = true;
  }
};
var DateTimePicker = React10.forwardRef(function DeprecatedDateTimePicker() {
  warn6();
  return null;
});
var DateTimePicker_default = DateTimePicker;

// node_modules/@mui/lab/DesktopDatePicker/DesktopDatePicker.js
var React11 = __toESM(require_react());
var warnedOnce11 = false;
var warn7 = () => {
  if (!warnedOnce11) {
    console.warn(["MUI: The DesktopDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopDatePicker } from '@mui/x-date-pickers'`", "or `import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce11 = true;
  }
};
var DesktopDatePicker = React11.forwardRef(function DeprecatedDesktopDatePicker() {
  warn7();
  return null;
});
var DesktopDatePicker_default = DesktopDatePicker;

// node_modules/@mui/lab/DesktopDateRangePicker/DesktopDateRangePicker.js
var React12 = __toESM(require_react());
var warnedOnce12 = false;
var warn8 = () => {
  if (!warnedOnce12) {
    console.warn(["MUI: The DesktopDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce12 = true;
  }
};
var DesktopDateRangePicker = React12.forwardRef(function DeprecatedDesktopDateRangePicker() {
  warn8();
  return null;
});
var DesktopDateRangePicker_default = DesktopDateRangePicker;

// node_modules/@mui/lab/DesktopDateTimePicker/DesktopDateTimePicker.js
var React13 = __toESM(require_react());
var warnedOnce13 = false;
var warn9 = () => {
  if (!warnedOnce13) {
    console.warn(["MUI: The DesktopDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopDateTimePicker } from '@mui/x-date-pickers'`", "or `import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce13 = true;
  }
};
var DesktopDateTimePicker = React13.forwardRef(function DeprecatedDesktopDateTimePicker() {
  warn9();
  return null;
});
var DesktopDateTimePicker_default = DesktopDateTimePicker;

// node_modules/@mui/lab/DesktopTimePicker/DesktopTimePicker.js
var React14 = __toESM(require_react());
var warnedOnce14 = false;
var warn10 = () => {
  if (!warnedOnce14) {
    console.warn(["MUI: The DesktopTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopTimePicker } from '@mui/x-date-pickers'`", "or `import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce14 = true;
  }
};
var DesktopTimePicker = React14.forwardRef(function DeprecatedDesktopTimePicker() {
  warn10();
  return null;
});
var DesktopTimePicker_default = DesktopTimePicker;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React72 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
init_esm();
init_utils();

// node_modules/@mui/lab/node_modules/@mui/base/utils/appendOwnerState.js
init_extends();

// node_modules/@mui/lab/node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/ClassNameConfigurator.js
var React15 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = React15.createContext(defaultContextValue);
function useClassNamesOverride(generateUtilityClass2) {
  const {
    disableDefaultClasses
  } = React15.useContext(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass2(slot);
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState);
  }
  return componentProps;
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useSlotProps.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/utils/mergeSlotProps.js
init_extends();
init_clsx_m();

// node_modules/@mui/lab/node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_m_default(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_m_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

// node_modules/@mui/lab/node_modules/@mui/base/Badge/Badge.js
init_extends();
init_objectWithoutPropertiesLoose();
var React16 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/composeClasses/index.js
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/useBadge/useBadge.js
init_esm();
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/generateUtilityClasses/index.js
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/generateUtilityClass/index.js
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Badge/badgeClasses.js
function getBadgeUtilityClass(slot) {
  return generateUtilityClass("MuiBadge", slot);
}
var badgeClasses = generateUtilityClasses("MuiBadge", ["root", "badge", "invisible"]);

// node_modules/@mui/lab/node_modules/@mui/base/Badge/Badge.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["badgeContent", "children", "invisible", "max", "slotProps", "slots", "showZero"];
var useUtilityClasses = (ownerState) => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getBadgeUtilityClass));
};
var Badge = React16.forwardRef(function Badge2(props, forwardedRef) {
  var _slots$root, _slots$badge;
  const {
    children,
    max: maxProp = 99,
    slotProps = {},
    slots = {},
    showZero = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    badgeContent,
    max,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const BadgeComponent = (_slots$badge = slots.badge) != null ? _slots$badge : "span";
  const badgeProps = useSlotProps({
    elementType: BadgeComponent,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return (0, import_jsx_runtime7.jsxs)(Root, _extends({}, rootProps, {
    children: [children, (0, import_jsx_runtime6.jsx)(BadgeComponent, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
true ? Badge.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types.default.node,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types.default.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types.default.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    badge: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    badge: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Button/Button.js
init_extends();
init_objectWithoutPropertiesLoose();
var React18 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "active", "disabled", "focusVisible"]);

// node_modules/@mui/lab/node_modules/@mui/base/useButton/useButton.js
init_extends();
var React17 = __toESM(require_react());
init_esm();
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type
  } = parameters;
  const buttonRef = React17.useRef();
  const [active, setActive] = React17.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React17.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  React17.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = React17.useState("");
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu2;
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return hostElementName === "BUTTON" || hostElementName === "INPUT" && ["button", "submit", "reset"].includes(button == null ? void 0 : button.type) || hostElementName === "A" && (button == null ? void 0 : button.href);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    if (!disabled) {
      setActive(true);
      document.addEventListener("mouseup", () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === " " && !disabled) {
      setActive(true);
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === "Enter" && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;
    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === " " && !event.defaultPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const updateHostElementName = React17.useCallback((instance) => {
    var _instance$tagName;
    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : "");
  }, []);
  const handleRef = useForkRef(updateHostElementName, externalRef, focusVisibleRef, buttonRef);
  const buttonProps = {};
  if (hostElementName === "BUTTON") {
    buttonProps.type = type != null ? type : "button";
    if (focusableWhenDisabled) {
      buttonProps["aria-disabled"] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== "") {
    if (!href && !to) {
      buttonProps.role = "button";
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    delete externalEventHandlers.onFocusVisible;
    return _extends({
      type
    }, externalEventHandlers, buttonProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    });
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Button/Button.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded3 = ["action", "children", "disabled", "focusableWhenDisabled", "onFocusVisible", "slotProps", "slots"];
var useUtilityClasses2 = (ownerState) => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active"]
  };
  return composeClasses(slots, useClassNamesOverride(getButtonUtilityClass));
};
var Button = React18.forwardRef(function Button2(props, forwardedRef) {
  var _slots$root;
  const {
    action,
    children,
    focusableWhenDisabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const buttonRef = React18.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    focusableWhenDisabled
  }));
  React18.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses2(ownerState);
  const defaultElement = other.href || other.to ? "a" : "button";
  const Root = (_slots$root = slots.root) != null ? _slots$root : defaultElement;
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime8.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
    current: import_prop_types2.default.shape({
      focusVisible: import_prop_types2.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  href: import_prop_types2.default.string,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types2.default.func,
  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * @ignore
   */
  to: import_prop_types2.default.string
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var React19 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React19.useRef(false);
  const nodeRef = React19.useRef(null);
  const activatedRef = React19.useRef(false);
  const syntheticEventRef = React19.useRef(false);
  React19.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  );
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React19.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React19.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return (0, import_jsx_runtime9.jsx)(React19.Fragment, {
    children: React19.cloneElement(children, childrenProps)
  });
}
true ? ClickAwayListener.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types3.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types3.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types3.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types3.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}
var ClickAwayListener_default = ClickAwayListener;

// node_modules/@mui/lab/node_modules/@mui/base/FocusTrap/FocusTrap.js
var React20 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React20.useRef(false);
  const sentinelStart = React20.useRef(null);
  const sentinelEnd = React20.useRef(null);
  const nodeToRestore = React20.useRef(null);
  const reactFocusEventTarget = React20.useRef(null);
  const activated = React20.useRef(false);
  const rootRef = React20.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = React20.useRef(null);
  React20.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React20.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React20.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const contain = (nativeEvent) => {
      const {
        current: rootElement
      } = rootRef;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain(null);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return (0, import_jsx_runtime11.jsxs)(React20.Fragment, {
    children: [(0, import_jsx_runtime10.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), React20.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), (0, import_jsx_runtime10.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
true ? FocusTrap.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types4.default.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types4.default.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types4.default.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: import_prop_types4.default.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: import_prop_types4.default.func,
  /**
   * If `true`, focus is locked.
   */
  open: import_prop_types4.default.bool.isRequired
} : void 0;
if (true) {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}
var FocusTrap_default = FocusTrap;

// node_modules/@mui/lab/node_modules/@mui/base/FormControl/FormControl.js
init_extends();
init_objectWithoutPropertiesLoose();
var React22 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/FormControl/FormControlContext.js
var React21 = __toESM(require_react());
var FormControlContext = React21.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext;

// node_modules/@mui/lab/node_modules/@mui/base/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "disabled", "error", "filled", "focused", "required"]);

// node_modules/@mui/lab/node_modules/@mui/base/FormControl/FormControl.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded4 = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses3(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var FormControl = React22.forwardRef(function FormControl2(props, forwardedRef) {
  var _slots$root;
  const {
    defaultValue,
    children,
    disabled = false,
    error = false,
    onChange,
    required = false,
    slotProps = {},
    slots = {},
    value: incomingValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React22.useState(false);
  const focused = focusedState && !disabled;
  React22.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React22.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: (event) => {
        setValue(event.target.value);
        onChange == null ? void 0 : onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ""
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses3(ownerState);
  const renderChildren = () => {
    if (typeof children === "function") {
      return children(childContext);
    }
    return children;
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime12.jsx)(FormControlContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime12.jsx)(Root, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.oneOfType([import_prop_types5.default.node, import_prop_types5.default.func]),
  /**
   * @ignore
   */
  defaultValue: import_prop_types5.default.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types5.default.bool,
  /**
   * Callback fired when the form element's value is modified.
   */
  onChange: import_prop_types5.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types5.default.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    root: import_prop_types5.default.elementType
  }),
  /**
   * The value of the form element.
   */
  value: import_prop_types5.default.any
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/FormControl/useFormControlContext.js
var React23 = __toESM(require_react());
function useFormControlContext() {
  return React23.useContext(FormControlContext_default);
}

// node_modules/@mui/lab/node_modules/@mui/base/Input/Input.js
init_extends();
init_objectWithoutPropertiesLoose();
var React25 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = generateUtilityClasses("MuiInput", ["root", "formControl", "focused", "disabled", "error", "multiline", "input", "inputMultiline", "inputTypeSearch", "adornedStart", "adornedEnd"]);

// node_modules/@mui/lab/node_modules/@mui/base/useInput/useInput.js
init_extends();
init_esm();
var React24 = __toESM(require_react());
init_esm();
function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React24.useRef(value != null);
  const handleInputRefWarning = React24.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React24.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React24.useState(false);
  React24.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null ? void 0 : (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur2 = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null ? void 0 : (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur2(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      ref: handleInputRef,
      value,
      required,
      disabled
    });
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Input/Input.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded5 = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "endAdornment", "error", "id", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "startAdornment", "value", "type", "rows", "slotProps", "slots", "minRows", "maxRows"];
var useUtilityClasses4 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    formControlContext,
    multiline,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", Boolean(formControlContext) && "formControl", multiline && "multiline", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", multiline && "multiline"]
  };
  return composeClasses(slots, useClassNamesOverride(getInputUtilityClass));
};
var Input = React25.forwardRef(function Input2(props, forwardedRef) {
  var _slots$root, _slots$textarea, _slots$input;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    startAdornment,
    value,
    type: typeProp,
    rows,
    slotProps = {},
    slots = {},
    minRows,
    maxRows
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const type = !multiline ? typeProp != null ? typeProp : "text" : void 0;
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const classes = useUtilityClasses4(ownerState);
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const InputComponent = multiline ? (_slots$textarea = slots.textarea) != null ? _slots$textarea : "textarea" : (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: InputComponent,
    getSlotProps: (otherHandlers) => getInputProps(_extends({}, otherHandlers, propsToForward)),
    externalSlotProps: slotProps.input,
    additionalProps: _extends({
      rows: multiline ? rows : void 0
    }, multiline && !isHostComponent(InputComponent) && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }),
    ownerState,
    className: classes.input
  });
  if (true) {
    if (multiline) {
      if (rows) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
    }
  }
  return (0, import_jsx_runtime14.jsxs)(Root, _extends({}, rootProps, {
    children: [startAdornment, (0, import_jsx_runtime13.jsx)(InputComponent, _extends({}, inputProps)), endAdornment]
  }));
});
true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types6.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types6.default.string,
  /**
   * @ignore
   */
  "aria-labelledby": import_prop_types6.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types6.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types6.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types6.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types6.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types6.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `Mui-error` class on the root element.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types6.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types6.default.string,
  /**
   * @ignore
   */
  inputRef: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.shape({
    current: import_prop_types6.default.object
  })]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types6.default.number,
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types6.default.number,
  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: import_prop_types6.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types6.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onChange: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types6.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types6.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types6.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types6.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types6.default.number,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types6.default.shape({
    input: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object]),
    root: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types6.default.shape({
    input: import_prop_types6.default.elementType,
    root: import_prop_types6.default.elementType,
    textarea: import_prop_types6.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types6.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types6.default.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types6.default.any
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Menu/Menu.js
init_extends();
init_objectWithoutPropertiesLoose();
var React40 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Menu/menuClasses.js
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses("MuiMenu", ["root", "listbox", "expanded"]);

// node_modules/@mui/lab/node_modules/@mui/base/useMenu/useMenu.js
init_extends();
var React36 = __toESM(require_react());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/useList/useList.js
init_extends();
var React31 = __toESM(require_react());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/useList/listActions.types.js
var ListActionTypes = {
  blur: "list:blur",
  focus: "list:focus",
  keyDown: "list:keyDown",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  textNavigation: "list:textNavigation"
};

// node_modules/@mui/lab/node_modules/@mui/base/useList/listReducer.js
init_extends();
function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
  if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
    return -1;
  }
  let nextFocus = currentIndex;
  for (; ; ) {
    if (!wrapAround && lookupDirection === "next" && nextFocus === items.length || !wrapAround && lookupDirection === "previous" && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === "next" ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + items.length) % items.length;
      }
    } else {
      return nextFocus;
    }
  }
}
function moveHighlight(previouslyHighlightedValue, offset, context) {
  var _items$nextIndex;
  const {
    items,
    isItemDisabled,
    disableListWrap,
    disabledItemsFocusable,
    itemComparer,
    focusManagement
  } = context;
  const defaultHighlightedIndex = focusManagement === "DOM" ? 0 : -1;
  const maxIndex = items.length - 1;
  const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex((item) => itemComparer(item, previouslyHighlightedValue));
  let nextIndexCandidate;
  let lookupDirection;
  let wrapAround = !disableListWrap;
  switch (offset) {
    case "reset":
      if (defaultHighlightedIndex === -1) {
        return null;
      }
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "start":
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "end":
      nextIndexCandidate = maxIndex;
      lookupDirection = "previous";
      wrapAround = false;
      break;
    default: {
      const newIndex = previouslyHighlightedIndex + offset;
      if (newIndex < 0) {
        if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset) > 1) {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        } else {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        }
      } else if (newIndex > maxIndex) {
        if (!wrapAround || Math.abs(offset) > 1) {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        } else {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        }
      } else {
        nextIndexCandidate = newIndex;
        lookupDirection = offset >= 0 ? "next" : "previous";
      }
    }
  }
  const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);
  if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
    return previouslyHighlightedValue;
  }
  return (_items$nextIndex = items[nextIndex]) != null ? _items$nextIndex : null;
}
function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
  if (selectionMode === "none") {
    return [];
  }
  if (selectionMode === "single") {
    if (itemComparer(selectedValues[0], item)) {
      return selectedValues;
    }
    return [item];
  }
  if (selectedValues.some((sv) => itemComparer(sv, item))) {
    return selectedValues.filter((sv) => !itemComparer(sv, item));
  }
  return [...selectedValues, item];
}
function handleItemSelection(item, state, context) {
  const {
    itemComparer,
    isItemDisabled,
    selectionMode,
    items
  } = context;
  const {
    selectedValues
  } = state;
  const itemIndex = items.findIndex((i) => itemComparer(item, i));
  if (isItemDisabled(item, itemIndex)) {
    return state;
  }
  const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
  return _extends({}, state, {
    selectedValues: newSelectedValues,
    highlightedValue: item
  });
}
function handleKeyDown(key, state, context) {
  const previouslySelectedValue = state.highlightedValue;
  const {
    orientation,
    pageSize: pageSize2
  } = context;
  switch (key) {
    case "Home":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, "start", context)
      });
    case "End":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, "end", context)
      });
    case "PageUp":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -pageSize2, context)
      });
    case "PageDown":
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, pageSize2, context)
      });
    case "ArrowUp":
      if (orientation !== "vertical") {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
      });
    case "ArrowDown":
      if (orientation !== "vertical") {
        break;
      }
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
      });
    case "ArrowLeft": {
      if (orientation === "vertical") {
        break;
      }
      const offset = orientation === "horizontal-ltr" ? -1 : 1;
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
      });
    }
    case "ArrowRight": {
      if (orientation === "vertical") {
        break;
      }
      const offset = orientation === "horizontal-ltr" ? 1 : -1;
      return _extends({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
      });
    }
    case "Enter":
    case " ":
      if (state.highlightedValue === null) {
        return state;
      }
      return handleItemSelection(state.highlightedValue, state, context);
    default:
      break;
  }
  return state;
}
function handleBlur(state, context) {
  if (context.focusManagement === "DOM") {
    return state;
  }
  return _extends({}, state, {
    highlightedValue: null
  });
}
function textCriteriaMatches(nextFocus, searchString, stringifyItem) {
  var _stringifyItem;
  const text = (_stringifyItem = stringifyItem(nextFocus)) == null ? void 0 : _stringifyItem.trim().toLowerCase();
  if (!text || text.length === 0) {
    return false;
  }
  return text.indexOf(searchString) === 0;
}
function handleTextNavigation(state, searchString, context) {
  const {
    items,
    isItemDisabled,
    disabledItemsFocusable,
    itemStringifier
  } = context;
  const startWithCurrentItem = searchString.length > 1;
  let nextItem = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
  for (let index = 0; index < items.length; index += 1) {
    if (!nextItem || !startWithCurrentItem && state.highlightedValue === nextItem) {
      return state;
    }
    if (textCriteriaMatches(nextItem, searchString, itemStringifier) && (!isItemDisabled(nextItem, items.indexOf(nextItem)) || disabledItemsFocusable)) {
      return _extends({}, state, {
        highlightedValue: nextItem
      });
    }
    nextItem = moveHighlight(nextItem, 1, context);
  }
  return state;
}
function handleItemsChange(items, previousItems, state, context) {
  var _state$selectedValues;
  const {
    itemComparer,
    focusManagement
  } = context;
  let newHighlightedValue = null;
  if (state.highlightedValue != null) {
    var _items$find;
    newHighlightedValue = (_items$find = items.find((item) => itemComparer(item, state.highlightedValue))) != null ? _items$find : null;
  } else if (focusManagement === "DOM" && previousItems.length === 0) {
    newHighlightedValue = moveHighlight(null, "reset", context);
  }
  const selectedValues = (_state$selectedValues = state.selectedValues) != null ? _state$selectedValues : [];
  const newSelectedValues = selectedValues.filter((selectedValue) => items.some((item) => itemComparer(item, selectedValue)));
  return _extends({}, state, {
    highlightedValue: newHighlightedValue,
    selectedValues: newSelectedValues
  });
}
function listReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case ListActionTypes.keyDown:
      return handleKeyDown(action.key, state, context);
    case ListActionTypes.itemClick:
      return handleItemSelection(action.item, state, context);
    case ListActionTypes.blur:
      return handleBlur(state, context);
    case ListActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, context);
    case ListActionTypes.itemsChange:
      return handleItemsChange(action.items, action.previousItems, state, context);
    default:
      return state;
  }
}

// node_modules/@mui/lab/node_modules/@mui/base/useList/useListChangeNotifiers.js
var React27 = __toESM(require_react());

// node_modules/@mui/lab/node_modules/@mui/base/utils/useMessageBus.js
var React26 = __toESM(require_react());
function createMessageBus() {
  const listeners = /* @__PURE__ */ new Map();
  function subscribe(topic, callback) {
    let topicListeners = listeners.get(topic);
    if (!topicListeners) {
      topicListeners = /* @__PURE__ */ new Set([callback]);
      listeners.set(topic, topicListeners);
    } else {
      topicListeners.add(callback);
    }
    return () => {
      topicListeners.delete(callback);
      if (topicListeners.size === 0) {
        listeners.delete(topic);
      }
    };
  }
  function publish(topic, ...args) {
    const topicListeners = listeners.get(topic);
    if (topicListeners) {
      topicListeners.forEach((callback) => callback(...args));
    }
  }
  return {
    subscribe,
    publish
  };
}
function useMessageBus() {
  const bus = React26.useRef();
  if (!bus.current) {
    bus.current = createMessageBus();
  }
  return bus.current;
}

// node_modules/@mui/lab/node_modules/@mui/base/useList/useListChangeNotifiers.js
var SELECTION_CHANGE_TOPIC = "select:change-selection";
var HIGHLIGHT_CHANGE_TOPIC = "select:change-highlight";
function useSelectChangeNotifiers() {
  const messageBus = useMessageBus();
  const notifySelectionChanged = React27.useCallback((newSelectedItems) => {
    messageBus.publish(SELECTION_CHANGE_TOPIC, newSelectedItems);
  }, [messageBus]);
  const notifyHighlightChanged = React27.useCallback((newHighlightedItem) => {
    messageBus.publish(HIGHLIGHT_CHANGE_TOPIC, newHighlightedItem);
  }, [messageBus]);
  const registerSelectionChangeHandler = React27.useCallback((handler) => {
    return messageBus.subscribe(SELECTION_CHANGE_TOPIC, handler);
  }, [messageBus]);
  const registerHighlightChangeHandler = React27.useCallback((handler) => {
    return messageBus.subscribe(HIGHLIGHT_CHANGE_TOPIC, handler);
  }, [messageBus]);
  return {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerSelectionChangeHandler,
    registerHighlightChangeHandler
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useControllableReducer.js
init_extends();
var React28 = __toESM(require_react());
function areEqual(a, b) {
  return a === b;
}
var EMPTY_OBJECT = {};
var NOOP = () => {
};
function getControlledState(internalState, controlledProps) {
  const augmentedState = _extends({}, internalState);
  Object.keys(controlledProps).forEach((key) => {
    if (controlledProps[key] !== void 0) {
      augmentedState[key] = controlledProps[key];
    }
  });
  return augmentedState;
}
function useStateChangeDetection(parameters) {
  const {
    nextState,
    initialState,
    stateComparers,
    onStateChange,
    controlledProps,
    lastActionRef
  } = parameters;
  const internalPreviousStateRef = React28.useRef(initialState);
  React28.useEffect(() => {
    if (lastActionRef.current === null) {
      return;
    }
    const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
    Object.keys(nextState).forEach((key) => {
      var _stateComparers$key;
      const stateComparer = (_stateComparers$key = stateComparers[key]) != null ? _stateComparers$key : areEqual;
      const nextStateItem = nextState[key];
      const previousStateItem = previousState[key];
      if (!stateComparer(nextStateItem, previousStateItem)) {
        var _event, _type;
        onStateChange == null ? void 0 : onStateChange((_event = lastActionRef.current.event) != null ? _event : null, key, nextStateItem, (_type = lastActionRef.current.type) != null ? _type : "", nextState);
      }
    });
    internalPreviousStateRef.current = nextState;
    lastActionRef.current = null;
  }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
}
function useControllableReducer(parameters) {
  const lastActionRef = React28.useRef(null);
  const {
    reducer,
    initialState,
    controlledProps = EMPTY_OBJECT,
    stateComparers = EMPTY_OBJECT,
    onStateChange = NOOP,
    actionContext
  } = parameters;
  const reducerWithControlledState = React28.useCallback((state, action) => {
    lastActionRef.current = action;
    const controlledState = getControlledState(state, controlledProps);
    return reducer(controlledState, action);
  }, [controlledProps, reducer]);
  const [nextState, dispatch] = React28.useReducer(reducerWithControlledState, initialState);
  const dispatchWithContext = React28.useCallback((action) => {
    dispatch(_extends({}, action, {
      context: actionContext
    }));
  }, [actionContext]);
  useStateChangeDetection({
    nextState,
    initialState,
    stateComparers: stateComparers != null ? stateComparers : EMPTY_OBJECT,
    onStateChange: onStateChange != null ? onStateChange : NOOP,
    controlledProps,
    lastActionRef
  });
  return [getControlledState(nextState, controlledProps), dispatchWithContext];
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useLatest.js
var React29 = __toESM(require_react());
function useLatest(value, deps) {
  const ref = React29.useRef(value);
  React29.useEffect(() => {
    ref.current = value;
  }, deps != null ? deps : [value]);
  return ref;
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useTextNavigation.js
var React30 = __toESM(require_react());
var TEXT_NAVIGATION_RESET_TIMEOUT = 500;
function useTextNavigation(callback) {
  const textCriteriaRef = React30.useRef({
    searchString: "",
    lastTime: null
  });
  return React30.useCallback((event) => {
    if (event.key.length === 1 && event.key !== " ") {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      callback(textCriteria.searchString, event);
    }
  }, [callback]);
}

// node_modules/@mui/lab/node_modules/@mui/base/useList/useList.js
var EMPTY_OBJECT2 = {};
var NOOP2 = () => {
};
var defaultItemComparer = (optionA, optionB) => optionA === optionB;
var defaultIsItemDisabled = () => false;
var defaultItemStringifier = (item) => typeof item === "string" ? item : String(item);
var defaultGetInitialState = () => ({
  highlightedValue: null,
  selectedValues: []
});
function useList(params) {
  const {
    controlledProps = EMPTY_OBJECT2,
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = "activeDescendant",
    getInitialState = defaultGetInitialState,
    getItemDomElement,
    getItemId,
    isItemDisabled = defaultIsItemDisabled,
    rootRef: externalListRef,
    onStateChange = NOOP2,
    items,
    itemComparer = defaultItemComparer,
    itemStringifier = defaultItemStringifier,
    onChange,
    onHighlightChange,
    orientation = "vertical",
    pageSize: pageSize2 = 5,
    reducerActionContext = EMPTY_OBJECT2,
    selectionMode = "single",
    stateReducer: externalReducer
  } = params;
  if (true) {
    if (focusManagement === "DOM" && getItemDomElement == null) {
      throw new Error("useList: The `getItemDomElement` prop is required when using the `DOM` focus management.");
    }
    if (focusManagement === "activeDescendant" && getItemId == null) {
      throw new Error("useList: The `getItemId` prop is required when using the `activeDescendant` focus management.");
    }
  }
  const listRef = React31.useRef(null);
  const handleRef = useForkRef(externalListRef, listRef);
  const handleHighlightChange = React31.useCallback((event, value, reason) => {
    onHighlightChange == null ? void 0 : onHighlightChange(event, value, reason);
    if (focusManagement === "DOM" && value != null && (reason === ListActionTypes.itemClick || reason === ListActionTypes.keyDown || reason === ListActionTypes.textNavigation)) {
      var _getItemDomElement;
      getItemDomElement == null ? void 0 : (_getItemDomElement = getItemDomElement(value)) == null ? void 0 : _getItemDomElement.focus();
    }
  }, [getItemDomElement, onHighlightChange, focusManagement]);
  const stateComparers = React31.useMemo(() => ({
    highlightedValue: itemComparer,
    selectedValues: (valuesArray1, valuesArray2) => areArraysEqual(valuesArray1, valuesArray2, itemComparer)
  }), [itemComparer]);
  const handleStateChange = React31.useCallback((event, field, value, reason, state2) => {
    onStateChange == null ? void 0 : onStateChange(event, field, value, reason, state2);
    switch (field) {
      case "highlightedValue":
        handleHighlightChange(event, value, reason);
        break;
      case "selectedValues":
        onChange == null ? void 0 : onChange(event, value, reason);
        break;
      default:
        break;
    }
  }, [handleHighlightChange, onChange, onStateChange]);
  const listActionContext = React31.useMemo(() => {
    return {
      disabledItemsFocusable,
      disableListWrap,
      focusManagement,
      isItemDisabled,
      itemComparer,
      items,
      itemStringifier,
      onHighlightChange: handleHighlightChange,
      orientation,
      pageSize: pageSize2,
      selectionMode,
      stateComparers
    };
  }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, itemStringifier, handleHighlightChange, orientation, pageSize2, selectionMode, stateComparers]);
  const initialState = getInitialState();
  const reducer = externalReducer != null ? externalReducer : listReducer;
  const actionContext = React31.useMemo(() => _extends({}, reducerActionContext, listActionContext), [reducerActionContext, listActionContext]);
  const [state, dispatch] = useControllableReducer({
    reducer,
    actionContext,
    initialState,
    controlledProps,
    stateComparers,
    onStateChange: handleStateChange
  });
  const {
    highlightedValue,
    selectedValues
  } = state;
  const handleTextNavigation2 = useTextNavigation((searchString, event) => dispatch({
    type: ListActionTypes.textNavigation,
    event,
    searchString
  }));
  const latestSelectedValues = useLatest(selectedValues);
  const latestHighlightedValue = useLatest(highlightedValue);
  const previousItems = React31.useRef([]);
  React31.useEffect(() => {
    if (areArraysEqual(previousItems.current, items, itemComparer)) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemsChange,
      event: null,
      items,
      previousItems: previousItems.current
    });
    previousItems.current = items;
  }, [items, itemComparer, dispatch]);
  const {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = useSelectChangeNotifiers();
  React31.useEffect(() => {
    notifySelectionChanged(selectedValues);
  }, [selectedValues, notifySelectionChanged]);
  React31.useEffect(() => {
    notifyHighlightChanged(highlightedValue);
  }, [highlightedValue, notifyHighlightChanged]);
  const createHandleKeyDown = (other) => (event) => {
    var _other$onKeyDown;
    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    const keysToPreventDefault = ["Home", "End", "PageUp", "PageDown"];
    if (orientation === "vertical") {
      keysToPreventDefault.push("ArrowUp", "ArrowDown");
    } else {
      keysToPreventDefault.push("ArrowLeft", "ArrowRight");
    }
    if (focusManagement === "activeDescendant") {
      keysToPreventDefault.push(" ", "Enter");
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ListActionTypes.keyDown,
      key: event.key,
      event
    });
    handleTextNavigation2(event);
  };
  const createHandleBlur = (other) => (event) => {
    var _other$onBlur, _listRef$current;
    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    if ((_listRef$current = listRef.current) != null && _listRef$current.contains(event.relatedTarget)) {
      return;
    }
    dispatch({
      type: ListActionTypes.blur,
      event
    });
  };
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      "aria-activedescendant": focusManagement === "activeDescendant" && highlightedValue != null ? getItemId(highlightedValue) : void 0,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      tabIndex: focusManagement === "DOM" ? -1 : 0,
      ref: handleRef
    });
  };
  const getItemState = React31.useCallback((item) => {
    var _latestSelectedValues;
    const index = items.findIndex((i) => itemComparer(i, item));
    const selected = ((_latestSelectedValues = latestSelectedValues.current) != null ? _latestSelectedValues : []).some((value) => value != null && itemComparer(item, value));
    const disabled = isItemDisabled(item, index);
    const highlighted = latestHighlightedValue.current != null && itemComparer(item, latestHighlightedValue.current);
    const focusable = focusManagement === "DOM";
    return {
      disabled,
      focusable,
      highlighted,
      index,
      selected
    };
  }, [items, isItemDisabled, itemComparer, latestSelectedValues, latestHighlightedValue, focusManagement]);
  const contextValue = React31.useMemo(() => ({
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  React31.useDebugValue({
    state
  });
  return {
    contextValue,
    dispatch,
    getRootProps,
    rootRef: handleRef,
    state
  };
}
var useList_default = useList;

// node_modules/@mui/lab/node_modules/@mui/base/useList/useListItem.js
init_extends();
var React34 = __toESM(require_react());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/utils/useForcedRerendering.js
var React32 = __toESM(require_react());
function useForcedRerendering() {
  const [, setState] = React32.useState({});
  return React32.useCallback(() => {
    setState({});
  }, []);
}

// node_modules/@mui/lab/node_modules/@mui/base/useList/ListContext.js
var React33 = __toESM(require_react());
var ListContext = React33.createContext(null);
if (true) {
  ListContext.displayName = "ListContext";
}

// node_modules/@mui/lab/node_modules/@mui/base/useList/useListItem.js
function useListItem(parameters) {
  const {
    handlePointerOverEvents = false,
    item,
    rootRef: externalRef
  } = parameters;
  const itemRef = React34.useRef(null);
  const handleRef = useForkRef(itemRef, externalRef);
  const listContext = React34.useContext(ListContext);
  if (!listContext) {
    throw new Error("useListItem must be used within a ListProvider");
  }
  const {
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(item);
  const rerender = useForcedRerendering();
  useEnhancedEffect_default(() => {
    function updateHighlightedState(highlightedItem) {
      if (highlightedItem === item && !highlighted) {
        rerender();
      } else if (highlightedItem !== item && highlighted) {
        rerender();
      }
    }
    return registerHighlightChangeHandler(updateHighlightedState);
  });
  useEnhancedEffect_default(() => {
    function updateSelectedState(selectedItems) {
      if (!selected) {
        if (selectedItems.includes(item)) {
          rerender();
        }
      } else if (!selectedItems.includes(item)) {
        rerender();
      }
    }
    return registerSelectionChangeHandler(updateSelectedState);
  }, [registerSelectionChangeHandler, rerender, selected, item]);
  const createHandleClick = React34.useCallback((other) => (event) => {
    var _other$onClick;
    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    dispatch({
      type: ListActionTypes.itemClick,
      item,
      event
    });
  }, [dispatch, item]);
  const createHandlePointerOver = React34.useCallback((other) => (event) => {
    var _other$onMouseOver;
    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemHover,
      item,
      event
    });
  }, [dispatch, item]);
  let tabIndex;
  if (focusable) {
    tabIndex = highlighted ? 0 : -1;
  }
  const getRootProps = (otherHandlers = {}) => _extends({}, otherHandlers, {
    onClick: createHandleClick(otherHandlers),
    onPointerOver: handlePointerOverEvents ? createHandlePointerOver(otherHandlers) : void 0,
    ref: handleRef,
    tabIndex
  });
  return {
    getRootProps,
    highlighted,
    rootRef: handleRef,
    selected
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/utils/useCompound.js
var React35 = __toESM(require_react());
var CompoundComponentContext = React35.createContext(null);
CompoundComponentContext.displayName = "CompoundComponentContext";
function useCompoundParent() {
  const [subitems, setSubitems] = React35.useState(/* @__PURE__ */ new Map());
  const subitemKeys = React35.useRef(/* @__PURE__ */ new Set());
  const deregisterItem = React35.useCallback(function deregisterItem2(id) {
    subitemKeys.current.delete(id);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.delete(id);
      return newState;
    });
  }, []);
  const registerItem = React35.useCallback(function registerItem2(id, item, missingKeyGenerator) {
    let providedOrGeneratedId;
    if (id === void 0) {
      if (missingKeyGenerator === void 0) {
        throw new Error("The compound component's child doesn't have a key. You need to provide a missingKeyGenerator to generate it.");
      }
      providedOrGeneratedId = missingKeyGenerator(subitemKeys.current);
    } else {
      providedOrGeneratedId = id;
    }
    subitemKeys.current.add(providedOrGeneratedId);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.set(providedOrGeneratedId, item);
      return newState;
    });
    return {
      id: providedOrGeneratedId,
      deregister: () => deregisterItem(providedOrGeneratedId)
    };
  }, [deregisterItem]);
  const getItemIndex = React35.useCallback(function getItemIndex2(id) {
    return Array.from(subitems.keys()).indexOf(id);
  }, [subitems]);
  return {
    contextValue: {
      getItemIndex,
      registerItem,
      totalSubitemCount: subitems.size
    },
    subitems
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/useMenu/menuReducer.js
init_extends();
function menuReducer(state, action) {
  if (action.type === ListActionTypes.itemHover) {
    return state;
  }
  const newState = listReducer(state, action);
  if (newState.highlightedValue === null && action.context.items.length > 0) {
    return _extends({}, newState, {
      highlightedValue: action.context.items[0]
    });
  }
  if (action.type === ListActionTypes.keyDown) {
    if (action.event.key === "Escape") {
      return _extends({}, newState, {
        open: false
      });
    }
  }
  if (action.type === ListActionTypes.blur) {
    var _action$context$listb;
    if (!((_action$context$listb = action.context.listboxRef.current) != null && _action$context$listb.contains(action.event.relatedTarget))) {
      return _extends({}, newState, {
        open: false,
        highlightedValue: action.context.items[0]
      });
    }
  }
  return newState;
}

// node_modules/@mui/lab/node_modules/@mui/base/useMenu/useMenu.js
function useMenu(parameters = {}) {
  const {
    defaultOpen,
    listboxRef: listboxRefProp,
    open: openProp,
    onOpenChange
  } = parameters;
  const listboxRef = React36.useRef(null);
  const handleRef = useForkRef(listboxRef, listboxRefProp);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const subitemKeys = React36.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getItemDomElement = React36.useCallback((itemId) => {
    var _subitems$get$ref$cur, _subitems$get;
    if (itemId == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const controlledProps = React36.useMemo(() => ({
    open: openProp
  }), [openProp]);
  const stateChangeHandler = React36.useCallback((event, field, fieldValue, reason, state) => {
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(fieldValue);
      if (fieldValue === true && state.highlightedValue !== null) {
        var _subitems$get2, _subitems$get2$ref$cu;
        (_subitems$get2 = subitems.get(state.highlightedValue)) == null ? void 0 : (_subitems$get2$ref$cu = _subitems$get2.ref.current) == null ? void 0 : _subitems$get2$ref$cu.focus();
      }
    }
  }, [onOpenChange, subitems]);
  const {
    dispatch,
    getRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue
    },
    rootRef: mergedListRef
  } = useList_default({
    controlledProps,
    disabledItemsFocusable: true,
    focusManagement: "DOM",
    getItemDomElement,
    getInitialState: () => ({
      selectedValues: [],
      highlightedValue: null,
      open: defaultOpen != null ? defaultOpen : false
    }),
    isItemDisabled: (id) => {
      var _subitems$get3;
      return (subitems == null ? void 0 : (_subitems$get3 = subitems.get(id)) == null ? void 0 : _subitems$get3.disabled) || false;
    },
    items: subitemKeys,
    itemStringifier: (id) => {
      var _subitems$get4, _subitems$get5, _subitems$get5$ref$cu;
      return ((_subitems$get4 = subitems.get(id)) == null ? void 0 : _subitems$get4.label) || ((_subitems$get5 = subitems.get(id)) == null ? void 0 : (_subitems$get5$ref$cu = _subitems$get5.ref.current) == null ? void 0 : _subitems$get5$ref$cu.innerText);
    },
    rootRef: handleRef,
    onStateChange: stateChangeHandler,
    reducerActionContext: {
      listboxRef
    },
    selectionMode: "none",
    stateReducer: menuReducer
  });
  React36.useEffect(() => {
    if (open && highlightedValue === subitemKeys[0]) {
      var _subitems$get6, _subitems$get6$ref, _subitems$get6$ref$cu;
      (_subitems$get6 = subitems.get(subitemKeys[0])) == null ? void 0 : (_subitems$get6$ref = _subitems$get6.ref) == null ? void 0 : (_subitems$get6$ref$cu = _subitems$get6$ref.current) == null ? void 0 : _subitems$get6$ref$cu.focus();
    }
  }, [open, highlightedValue, subitems, subitemKeys]);
  React36.useEffect(() => {
    var _listboxRef$current;
    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(document.activeElement) && highlightedValue !== null) {
      var _subitems$get7, _subitems$get7$ref$cu;
      subitems == null ? void 0 : (_subitems$get7 = subitems.get(highlightedValue)) == null ? void 0 : (_subitems$get7$ref$cu = _subitems$get7.ref.current) == null ? void 0 : _subitems$get7$ref$cu.focus();
    }
  }, [highlightedValue, subitems]);
  const getListboxProps = (otherHandlers = {}) => {
    const rootProps = getRootProps(otherHandlers);
    return _extends({}, otherHandlers, rootProps, {
      role: "menu"
    });
  };
  React36.useDebugValue({
    subitems,
    highlightedValue
  });
  return {
    contextValue: _extends({}, compoundComponentContextValue, listContextValue),
    dispatch,
    getListboxProps,
    highlightedValue,
    listboxRef: mergedListRef,
    menuItems: subitems,
    open
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/useMenu/MenuProvider.js
var React37 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
function MenuProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React37.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React37.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime15.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime15.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/lab/node_modules/@mui/base/Popper/Popper.js
init_extends();
init_objectWithoutPropertiesLoose();
var React39 = __toESM(require_react());
init_esm();
init_lib();
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/Portal/Portal.js
var React38 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types7 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React38.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React38.useState(null);
  const handleRef = useForkRef(React38.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React38.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return React38.cloneElement(children, newProps);
    }
    return (0, import_jsx_runtime16.jsx)(React38.Fragment, {
      children
    });
  }
  return (0, import_jsx_runtime16.jsx)(React38.Fragment, {
    children: mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types7.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types7.default.oneOfType([HTMLElementType, import_prop_types7.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types7.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@mui/lab/node_modules/@mui/base/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPopper", slot);
}
var popperClasses = generateUtilityClasses("MuiPopper", ["root"]);

// node_modules/@mui/lab/node_modules/@mui/base/Popper/Popper.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded6 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"];
var _excluded22 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
var useUtilityClasses5 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
};
var defaultPopperOptions = {};
var PopperTooltip = React39.forwardRef(function PopperTooltip2(props, forwardedRef) {
  var _slots$root;
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const tooltipRef = React39.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React39.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React39.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React39.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React39.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React39.useState(resolveAnchorEl(anchorEl));
  React39.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React39.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses5();
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime17.jsx)(Root, _extends({}, rootProps, {
    children: typeof children === "function" ? children(childProps) : children
  }));
});
var Popper = React39.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const [exited, setExited] = React39.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime17.jsx)(Portal_default, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime17.jsx)(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children
    }))
  });
});
true ? Popper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types8.default.oneOfType([HTMLElementType, import_prop_types8.default.object, import_prop_types8.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types8.default.oneOfType([HTMLElementType, import_prop_types8.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types8.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types8.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types8.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types8.default.arrayOf(import_prop_types8.default.shape({
    data: import_prop_types8.default.object,
    effect: import_prop_types8.default.func,
    enabled: import_prop_types8.default.bool,
    fn: import_prop_types8.default.func,
    name: import_prop_types8.default.any,
    options: import_prop_types8.default.object,
    phase: import_prop_types8.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types8.default.arrayOf(import_prop_types8.default.string),
    requiresIfExists: import_prop_types8.default.arrayOf(import_prop_types8.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types8.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types8.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types8.default.shape({
    modifiers: import_prop_types8.default.array,
    onFirstUpdate: import_prop_types8.default.func,
    placement: import_prop_types8.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types8.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    root: import_prop_types8.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types8.default.bool
} : void 0;
var Popper_default = Popper;

// node_modules/@mui/lab/node_modules/@mui/base/Menu/Menu.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded7 = ["actions", "anchorEl", "children", "defaultOpen", "listboxId", "onOpenChange", "open", "slotProps", "slots"];
function useUtilityClasses6(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "expanded"],
    listbox: ["listbox", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuUtilityClass));
}
var Menu = React40.forwardRef(function Menu2(props, forwardedRef) {
  var _slots$root, _slots$listbox;
  const {
    actions,
    anchorEl,
    children,
    defaultOpen,
    listboxId,
    onOpenChange,
    open: openProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open
  } = useMenu({
    defaultOpen,
    open: openProp,
    onOpenChange,
    listboxId
  });
  React40.useImperativeHandle(actions, () => ({
    dispatch
  }), [dispatch]);
  const ownerState = _extends({}, props, {
    open
  });
  const classes = useUtilityClasses6(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : Popper_default;
  const rootProps = useSlotProps({
    elementType: Root,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      anchorEl,
      open,
      keepMounted: true,
      role: void 0,
      ref: forwardedRef
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    ownerState,
    className: classes.listbox
  });
  return (0, import_jsx_runtime18.jsx)(Root, _extends({}, rootProps, {
    children: (0, import_jsx_runtime18.jsx)(Listbox, _extends({}, listboxProps, {
      children: (0, import_jsx_runtime18.jsx)(MenuProvider, {
        value: contextValue,
        children
      })
    }))
  }));
});
true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType_default,
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   */
  anchorEl: import_prop_types9.default.oneOfType([HTMLElementType, import_prop_types9.default.object, import_prop_types9.default.func]),
  /**
   * @ignore
   */
  children: import_prop_types9.default.node,
  /**
   * @ignore
   */
  defaultOpen: import_prop_types9.default.bool,
  /**
   * @ignore
   */
  listboxId: import_prop_types9.default.string,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onOpenChange: import_prop_types9.default.func,
  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: import_prop_types9.default.bool,
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    listbox: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside the Menu.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    listbox: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/MenuItem/MenuItem.js
init_extends();
init_objectWithoutPropertiesLoose();
var React43 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "disabled", "focusVisible"]);

// node_modules/@mui/lab/node_modules/@mui/base/useMenuItem/useMenuItem.js
init_extends();
var React42 = __toESM(require_react());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/utils/useCompoundItem.js
var React41 = __toESM(require_react());
init_esm();
function useCompoundItem(id, itemMetadata, missingKeyGenerator) {
  const context = React41.useContext(CompoundComponentContext);
  if (context === null) {
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  }
  const {
    registerItem
  } = context;
  const [registeredId, setRegisteredId] = React41.useState(id);
  useEnhancedEffect_default(() => {
    const {
      id: returnedId,
      deregister
    } = registerItem(id, itemMetadata, missingKeyGenerator);
    setRegisteredId(returnedId);
    return deregister;
  }, [registerItem, itemMetadata, missingKeyGenerator, id]);
  return {
    id: registeredId,
    index: registeredId !== void 0 ? context.getItemIndex(registeredId) : -1,
    totalItemCount: context.totalSubitemCount
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/useMenuItem/useMenuItem.js
function useMenuItem(params) {
  const {
    disabled = false,
    id: idParam,
    rootRef: externalRef,
    label
  } = params;
  const id = useId(idParam);
  const itemRef = React42.useRef(null);
  const itemMetadata = React42.useMemo(() => ({
    disabled,
    id: id != null ? id : "",
    label,
    ref: itemRef
  }), [disabled, id, label]);
  const {
    getRootProps: getListRootProps,
    highlighted,
    rootRef: listItemRefHandler
  } = useListItem({
    item: id
  });
  const {
    index,
    totalItemCount
  } = useCompoundItem(id, itemMetadata);
  const {
    getRootProps: getButtonProps,
    focusVisible,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const handleRef = useForkRef(listItemRefHandler, buttonRefHandler, externalRef, itemRef);
  React42.useDebugValue({
    id,
    highlighted,
    disabled,
    label
  });
  if (id === void 0) {
    return {
      getRootProps: (otherHandlers = {}) => _extends({}, otherHandlers, getButtonProps(otherHandlers), {
        role: "menuitem"
      }),
      disabled: false,
      focusVisible,
      highlighted: false,
      index: -1,
      totalItemCount: 0,
      rootRef: handleRef
    };
  }
  const getRootProps = (otherHandlers = {}) => {
    const resolvedButtonProps = _extends({}, otherHandlers, getButtonProps(otherHandlers));
    const resolvedMenuItemProps = _extends({}, resolvedButtonProps, getListRootProps(resolvedButtonProps));
    return _extends({}, otherHandlers, resolvedButtonProps, resolvedMenuItemProps, {
      role: "menuitem",
      ref: handleRef
    });
  };
  return {
    getRootProps,
    disabled,
    focusVisible,
    highlighted,
    index,
    totalItemCount,
    rootRef: handleRef
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/MenuItem/MenuItem.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded8 = ["children", "disabled", "label", "slotProps", "slots"];
function useUtilityClasses7(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuItemUtilityClass));
}
var MenuItem = React43.forwardRef(function MenuItem2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    disabled: disabledProp = false,
    label,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = useMenuItem({
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = _extends({}, props, {
    disabled,
    focusVisible,
    highlighted
  });
  const classes = useUtilityClasses7(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime19.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? MenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types10.default.node,
  /**
   * @ignore
   */
  disabled: import_prop_types10.default.bool,
  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types10.default.string,
  /**
   * The props used for each slot inside the MenuItem.
   * @default {}
   */
  slotProps: import_prop_types10.default.shape({
    root: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object])
  }),
  /**
   * The components used for each slot inside the MenuItem.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types10.default.shape({
    root: import_prop_types10.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Modal/Modal.js
init_extends();
init_objectWithoutPropertiesLoose();
var React44 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Modal/ModalManager.js
init_esm();
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/lab/node_modules/@mui/base/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);

// node_modules/@mui/lab/node_modules/@mui/base/Modal/Modal.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded9 = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
var useUtilityClasses8 = (ownerState) => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
};
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var Modal = React44.forwardRef(function Modal2(props, forwardedRef) {
  var _props$ariaHidden, _slots$root;
  const {
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    manager: managerProp = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,
    onTransitionEnter,
    onTransitionExited,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const manager = managerProp;
  const [exited, setExited] = React44.useState(!open);
  const modal = React44.useRef({});
  const mountNodeRef = React44.useRef(null);
  const modalRef = React44.useRef(null);
  const handleRef = useForkRef(modalRef, forwardedRef);
  const hasTransition = getHasTransition(children);
  const ariaHiddenProp = (_props$ariaHidden = props["aria-hidden"]) != null ? _props$ariaHidden : true;
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React44.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node) => {
    mountNodeRef.current = node;
    if (!node || !modalRef.current) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React44.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React44.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React44.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses8(ownerState);
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const handleKeyDown2 = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: "presentation",
      onKeyDown: handleKeyDown2
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    additionalProps: {
      "aria-hidden": true,
      onClick: handleBackdropClick,
      open
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime20.jsx)(
    Portal_default,
    {
      ref: handlePortalRef,
      container,
      disablePortal,
      children: (0, import_jsx_runtime21.jsxs)(Root, _extends({}, rootProps, {
        children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime20.jsx)(BackdropComponent, _extends({}, backdropProps)) : null, (0, import_jsx_runtime20.jsx)(FocusTrap_default, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open,
          children: React44.cloneElement(children, childProps)
        })]
      }))
    }
  );
});
true ? Modal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types11.default.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types11.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types11.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types11.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types11.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types11.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types11.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types11.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types11.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types11.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types11.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types11.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    backdrop: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    backdrop: import_prop_types11.default.elementType,
    root: import_prop_types11.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/NoSsr/NoSsr.js
var React45 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React45.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React45.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return (0, import_jsx_runtime22.jsx)(React45.Fragment, {
    children: mountedState ? children : fallback
  });
}
true ? NoSsr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types12.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: import_prop_types12.default.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: import_prop_types12.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}

// node_modules/@mui/lab/node_modules/@mui/base/OptionGroup/OptionGroup.js
init_extends();
init_objectWithoutPropertiesLoose();
var React46 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/OptionGroup/optionGroupClasses.js
function getOptionGroupUtilityClass(slot) {
  return generateUtilityClass("MuiOptionGroup", slot);
}
var optionGroupClasses = generateUtilityClasses("MuiOptionGroup", ["root", "disabled", "label", "list"]);

// node_modules/@mui/lab/node_modules/@mui/base/OptionGroup/OptionGroup.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var _excluded10 = ["disabled", "slotProps", "slots"];
function useUtilityClasses9(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUtilityClass));
}
var OptionGroup = React46.forwardRef(function OptionGroup2(props, forwardedRef) {
  const {
    disabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const Root = (slots == null ? void 0 : slots.root) || "li";
  const Label = (slots == null ? void 0 : slots.label) || "span";
  const List = (slots == null ? void 0 : slots.list) || "ul";
  const classes = useUtilityClasses9(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return (0, import_jsx_runtime24.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime23.jsx)(Label, _extends({}, labelProps, {
      children: props.label
    })), (0, import_jsx_runtime23.jsx)(List, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
true ? OptionGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types13.default.node,
  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
  /**
   * The human-readable description of the group.
   */
  label: import_prop_types13.default.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types13.default.shape({
    label: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]),
    list: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]),
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * The components used for each slot inside the OptionGroup.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types13.default.shape({
    label: import_prop_types13.default.elementType,
    list: import_prop_types13.default.elementType,
    root: import_prop_types13.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Option/Option.js
init_extends();
init_objectWithoutPropertiesLoose();
var React48 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Option/optionClasses.js
function getOptionUtilityClass(slot) {
  return generateUtilityClass("MuiOption", slot);
}
var optionClasses = generateUtilityClasses("MuiOption", ["root", "disabled", "selected", "highlighted"]);

// node_modules/@mui/lab/node_modules/@mui/base/useOption/useOption.js
init_extends();
var React47 = __toESM(require_react());
init_esm();
function useOption(params) {
  const {
    value,
    label,
    disabled,
    rootRef: optionRefParam,
    id: idParam
  } = params;
  const {
    getRootProps: getListItemProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const id = useId(idParam);
  const optionRef = React47.useRef(null);
  const selectOption = React47.useMemo(() => ({
    disabled,
    label,
    value,
    ref: optionRef,
    id
  }), [disabled, label, value, id]);
  const {
    index
  } = useCompoundItem(value, selectOption);
  const handleRef = useForkRef(optionRefParam, optionRef, listItemRefHandler);
  return {
    getRootProps: (otherHandlers = {}) => _extends({}, otherHandlers, getListItemProps(otherHandlers), {
      id,
      ref: handleRef,
      role: "option",
      "aria-selected": selected
    }),
    highlighted,
    index,
    selected,
    rootRef: handleRef
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Option/Option.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var _excluded11 = ["children", "disabled", "label", "slotProps", "slots", "value"];
function useUtilityClasses10(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionUtilityClass));
}
var Option = React48.forwardRef(function Option2(props, forwardedRef) {
  var _slots$root, _optionRef$current;
  const {
    children,
    disabled = false,
    label,
    slotProps = {},
    slots = {},
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "li";
  const optionRef = React48.useRef(null);
  const combinedRef = useForkRef(optionRef, forwardedRef);
  const computedLabel = label != null ? label : typeof children === "string" ? children : (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.innerText;
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = useOption({
    disabled,
    label: computedLabel,
    rootRef: combinedRef,
    value
  });
  const ownerState = _extends({}, props, {
    disabled,
    highlighted,
    index,
    selected
  });
  const classes = useUtilityClasses10(ownerState);
  const rootProps = useSlotProps({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime25.jsx)(Root, _extends({}, rootProps, {
    children
  }));
});
true ? Option.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types14.default.node,
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types14.default.string,
  /**
   * The props used for each slot inside the Option.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside the Option.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    root: import_prop_types14.default.elementType
  }),
  /**
   * The value of the option.
   */
  value: import_prop_types14.default.any.isRequired
} : void 0;
var Option_default = React48.memo(Option);

// node_modules/@mui/lab/node_modules/@mui/base/Select/Select.js
init_extends();
init_objectWithoutPropertiesLoose();
var React51 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/useSelect.js
init_extends();
var React49 = __toESM(require_react());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/useSelect.types.js
var SelectActionTypes = {
  buttonClick: "buttonClick",
  buttonArrowKeyDown: "buttonArrowKeyDown"
};

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/defaultOptionStringifier.js
var defaultOptionStringifier = (option) => {
  const {
    label,
    value
  } = option;
  if (typeof label === "string") {
    return label;
  }
  if (typeof value === "string") {
    return value;
  }
  return String(option);
};
var defaultOptionStringifier_default = defaultOptionStringifier;

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/selectReducer.js
init_extends();
function selectReducer(state, action) {
  const {
    open
  } = state;
  const {
    context: {
      selectionMode
    }
  } = action;
  switch (action.type) {
    case SelectActionTypes.buttonClick: {
      var _state$selectedValues;
      const itemToHighlight = (_state$selectedValues = state.selectedValues[0]) != null ? _state$selectedValues : moveHighlight(null, "start", action.context);
      return _extends({}, state, {
        open: !open,
        highlightedValue: !open ? itemToHighlight : null
      });
    }
    case SelectActionTypes.buttonArrowKeyDown:
      if (action.key === "ArrowDown") {
        var _state$selectedValues2;
        const itemToHighlight = (_state$selectedValues2 = state.selectedValues[0]) != null ? _state$selectedValues2 : moveHighlight(null, "start", action.context);
        return _extends({}, state, {
          open: true,
          highlightedValue: itemToHighlight
        });
      }
      if (action.key === "ArrowUp") {
        var _state$selectedValues3;
        const itemToHighlight = (_state$selectedValues3 = state.selectedValues[0]) != null ? _state$selectedValues3 : moveHighlight(null, "end", action.context);
        return _extends({}, state, {
          open: true,
          highlightedValue: itemToHighlight
        });
      }
      break;
    default:
      break;
  }
  const newState = listReducer(state, action);
  switch (action.type) {
    case ListActionTypes.keyDown:
      if (selectionMode === "single" && (action.event.key === "Enter" || action.event.key === " " || action.event.key === "Escape")) {
        return _extends({}, newState, {
          open: false
        });
      }
      break;
    case ListActionTypes.itemClick:
      if (selectionMode === "single") {
        return _extends({}, newState, {
          open: false
        });
      }
      break;
    case ListActionTypes.blur:
      return _extends({}, newState, {
        open: false
      });
    default:
      return newState;
  }
  return newState;
}

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/useSelect.js
function useSelect(props) {
  const {
    buttonRef: buttonRefProp,
    defaultOpen = false,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onHighlightChange,
    onOpenChange,
    open: openProp,
    options: optionsParam,
    optionStringifier = defaultOptionStringifier_default,
    value: valueProp
  } = props;
  const buttonRef = React49.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React49.useRef(null);
  const listboxId = useId(listboxIdProp);
  let defaultValue;
  if (valueProp === void 0 && defaultValueProp === void 0) {
    defaultValue = [];
  } else if (defaultValueProp !== void 0) {
    defaultValue = multiple ? defaultValueProp : [defaultValueProp];
  }
  const value = React49.useMemo(() => {
    if (valueProp !== void 0) {
      return multiple ? valueProp : [valueProp];
    }
    return void 0;
  }, [valueProp, multiple]);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const options = React49.useMemo(() => {
    if (optionsParam != null) {
      return new Map(optionsParam.map((option, index) => [option.value, {
        value: option.value,
        label: option.label,
        disabled: option.disabled,
        ref: React49.createRef(),
        id: `${listboxId}_${index}`
      }]));
    }
    return subitems;
  }, [optionsParam, subitems, listboxId]);
  const ignoreEnterKeyUp = React49.useRef(false);
  const ignoreClick = React49.useRef(false);
  const [listboxFocusRequested, requestListboxFocus] = React49.useState(false);
  const focusListboxIfRequested = React49.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);
  const handleListboxRef = useForkRef(listboxRefProp, listboxRef, focusListboxIfRequested);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
    rootRef: mergedButtonRef
  } = useButton({
    disabled,
    rootRef: handleButtonRef
  });
  const optionValues = React49.useMemo(() => Array.from(options.keys()), [options]);
  const isItemDisabled = React49.useCallback((valueToCheck) => {
    var _option$disabled;
    const option = options.get(valueToCheck);
    return (_option$disabled = option == null ? void 0 : option.disabled) != null ? _option$disabled : false;
  }, [options]);
  const stringifyOption = React49.useCallback((valueToCheck) => {
    const option = options.get(valueToCheck);
    if (!option) {
      return "";
    }
    return optionStringifier(option);
  }, [options, optionStringifier]);
  const controlledState = React49.useMemo(() => ({
    selectedValues: value,
    open: openProp
  }), [value, openProp]);
  const getItemId = React49.useCallback((itemValue) => {
    var _options$get;
    return (_options$get = options.get(itemValue)) == null ? void 0 : _options$get.id;
  }, [options]);
  const handleSelectionChange = React49.useCallback((event, newValues) => {
    if (multiple) {
      onChange == null ? void 0 : onChange(event, newValues);
    } else {
      var _newValues$;
      onChange == null ? void 0 : onChange(event, (_newValues$ = newValues[0]) != null ? _newValues$ : null);
    }
  }, [multiple, onChange]);
  const handleHighlightChange = React49.useCallback((event, newValue) => {
    onHighlightChange == null ? void 0 : onHighlightChange(event, newValue != null ? newValue : null);
  }, [onHighlightChange]);
  const handleStateChange = React49.useCallback((e, field, fieldValue) => {
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(fieldValue);
      if (fieldValue === false && (e == null ? void 0 : e.type) !== "blur") {
        var _buttonRef$current;
        (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
      }
    }
  }, [onOpenChange]);
  const useListParameters = {
    getInitialState: () => {
      var _defaultValue;
      return {
        highlightedValue: null,
        selectedValues: (_defaultValue = defaultValue) != null ? _defaultValue : [],
        open: defaultOpen
      };
    },
    getItemId,
    controlledProps: controlledState,
    isItemDisabled,
    rootRef: handleListboxRef,
    onChange: handleSelectionChange,
    onHighlightChange: handleHighlightChange,
    onStateChange: handleStateChange,
    reducerActionContext: React49.useMemo(() => ({
      multiple
    }), [multiple]),
    items: optionValues,
    itemStringifier: stringifyOption,
    selectionMode: multiple ? "multiple" : "single",
    stateReducer: selectReducer
  };
  const {
    dispatch,
    getRootProps: getListboxRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue: highlightedOption,
      selectedValues: selectedOptions
    },
    rootRef: mergedListboxRef
  } = useList_default(useListParameters);
  React49.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  React49.useEffect(() => {
    requestListboxFocus(open);
  }, [open]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    otherHandlers == null ? void 0 : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (!event.defaultPrevented && open) {
      ignoreClick.current = true;
    }
  };
  const createHandleButtonClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    otherHandlers == null ? void 0 : (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (!event.defaultPrevented && !ignoreClick.current) {
      const action = {
        type: SelectActionTypes.buttonClick,
        event
      };
      dispatch(action);
    }
    ignoreClick.current = false;
  };
  const createHandleButtonKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Enter") {
      ignoreEnterKeyUp.current = true;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: SelectActionTypes.buttonArrowKeyDown,
        key: event.key,
        event
      });
    }
  };
  const createHandleListboxKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    const closingKeys = multiple ? ["Escape"] : ["Escape", "Enter", " "];
    if (open && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current2;
      buttonRef == null ? void 0 : (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
    ignoreEnterKeyUp.current = false;
  };
  useEnhancedEffect_default(() => {
    if (highlightedOption != null) {
      var _options$get2;
      const optionRef = (_options$get2 = options.get(highlightedOption)) == null ? void 0 : _options$get2.ref;
      if (!listboxRef.current || !(optionRef != null && optionRef.current)) {
        return;
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [highlightedOption, options]);
  const getButtonProps = (otherHandlers = {}) => {
    return _extends({}, getButtonRootProps(_extends({}, otherHandlers, {
      onClick: createHandleButtonClick(otherHandlers),
      onMouseDown: createHandleMouseDown(otherHandlers),
      onKeyDown: createHandleButtonKeyDown(otherHandlers)
    })), {
      role: "combobox",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-controls": listboxId
    });
  };
  const getOptionMetadata = React49.useCallback((optionValue) => options.get(optionValue), [options]);
  const getListboxProps = (otherHandlers = {}) => {
    return _extends({}, getListboxRootProps(_extends({}, otherHandlers, {
      onKeyUp: createHandleListboxKeyUp(otherHandlers)
    })), {
      id: listboxId,
      role: "listbox",
      "aria-multiselectable": multiple ? "true" : void 0
    });
  };
  React49.useDebugValue({
    selectedOptions,
    highlightedOption,
    open
  });
  const contextValue = React49.useMemo(() => _extends({}, listContextValue, compoundComponentContextValue), [listContextValue, compoundComponentContextValue]);
  let selectValue;
  if (props.multiple) {
    selectValue = selectedOptions;
  } else {
    selectValue = selectedOptions.length > 0 ? selectedOptions[0] : null;
  }
  return {
    buttonActive,
    buttonFocusVisible,
    buttonRef: mergedButtonRef,
    contextValue,
    disabled,
    dispatch,
    getButtonProps,
    getListboxProps,
    getOptionMetadata,
    listboxRef: mergedListboxRef,
    open,
    options: optionValues,
    value: selectValue,
    highlightedOption
  };
}
var useSelect_default = useSelect;

// node_modules/@mui/lab/node_modules/@mui/base/useSelect/SelectProvider.js
var React50 = __toESM(require_react());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
function SelectProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React50.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React50.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime26.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime26.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/lab/node_modules/@mui/base/Select/selectClasses.js
function getSelectUtilityClass(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses("MuiSelect", ["root", "button", "listbox", "popper", "active", "expanded", "disabled", "focusVisible"]);

// node_modules/@mui/lab/node_modules/@mui/base/Select/Select.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded12 = ["autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "listboxId", "listboxOpen", "multiple", "name", "onChange", "onListboxOpenChange", "optionStringifier", "renderValue", "slotProps", "slots", "value"];
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime27.jsx)(React51.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : "";
}
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return "";
    }
    if (selectedOption.every((o) => typeof o.value === "string" || typeof o.value === "number" || typeof o.value === "boolean")) {
      return selectedOption.map((o) => String(o.value));
    }
    return JSON.stringify(selectedOption.map((o) => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return "";
  }
  if (typeof selectedOption.value === "string" || typeof selectedOption.value === "number") {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function useUtilityClasses11(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popper: ["popper"]
  };
  return composeClasses(slots, useClassNamesOverride(getSelectUtilityClass));
}
var Select = React51.forwardRef(function Select2(props, forwardedRef) {
  var _slots$root, _slots$listbox, _slots$popper;
  const {
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    getSerializedValue = defaultFormValueProvider,
    listboxId,
    listboxOpen: listboxOpenProp,
    multiple = false,
    name,
    onChange,
    onListboxOpenChange,
    optionStringifier = defaultOptionStringifier_default,
    renderValue: renderValueProp,
    slotProps = {},
    slots = {},
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [buttonDefined, setButtonDefined] = React51.useState(false);
  const buttonRef = React51.useRef(null);
  const listboxRef = React51.useRef(null);
  const Button3 = (_slots$root = slots.root) != null ? _slots$root : "button";
  const ListboxRoot = (_slots$listbox = slots.listbox) != null ? _slots$listbox : "ul";
  const PopperComponent = (_slots$popper = slots.popper) != null ? _slots$popper : Popper_default;
  const handleButtonRefChange = React51.useCallback((element) => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = useForkRef(forwardedRef, buttonRef, handleButtonRefChange);
  React51.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionMetadata,
    value,
    open
  } = useSelect_default({
    buttonRef: handleButtonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpenProp,
    onChange,
    onOpenChange: onListboxOpenChange,
    optionStringifier,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open,
    multiple,
    renderValue,
    value
  });
  const classes = useUtilityClasses11(ownerState);
  const buttonProps = useSlotProps({
    elementType: Button3,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: PopperComponent,
    externalSlotProps: slotProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      keepMounted: true,
      open,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popper
  });
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
  }
  return (0, import_jsx_runtime28.jsxs)(React51.Fragment, {
    children: [(0, import_jsx_runtime27.jsx)(Button3, _extends({}, buttonProps, {
      children: renderValue(selectedOptionsMetadata)
    })), buttonDefined && (0, import_jsx_runtime27.jsx)(PopperComponent, _extends({}, popperProps, {
      children: (0, import_jsx_runtime27.jsx)(ListboxRoot, _extends({}, listboxProps, {
        children: (0, import_jsx_runtime27.jsx)(SelectProvider, {
          value: contextValue,
          children
        })
      }))
    })), name && (0, import_jsx_runtime27.jsx)("input", {
      type: "hidden",
      name,
      value: getSerializedValue(selectedOptionsMetadata)
    })]
  });
});
true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types15.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types15.default.node,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types15.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types15.default.any,
  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: import_prop_types15.default.bool,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types15.default.func,
  /**
   * `id` attribute of the listbox element.
   */
  listboxId: import_prop_types15.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types15.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   *
   * @default false
   */
  multiple: import_prop_types15.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   * If the name is provided, the component will render a hidden input element that can be submitted to a server.
   */
  name: import_prop_types15.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types15.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types15.default.func,
  /**
   * A function used to convert the option label to a string.
   * It's useful when labels are elements and need to be converted to plain text
   * to enable navigation using character keys on a keyboard.
   *
   * @default defaultOptionStringifier
   */
  optionStringifier: import_prop_types15.default.func,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types15.default.func,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    listbox: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    popper: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    listbox: import_prop_types15.default.elementType,
    popper: import_prop_types15.default.elementType,
    root: import_prop_types15.default.elementType
  }),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types15.default.any
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Slider/Slider.js
init_extends();
init_objectWithoutPropertiesLoose();
var React53 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
init_clsx_m();
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb"]);

// node_modules/@mui/lab/node_modules/@mui/base/useSlider/useSlider.js
init_extends();
var React52 = __toESM(require_react());
init_esm();
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React52.useRef();
  const [active, setActive] = React52.useState(-1);
  const [open, setOpen] = React52.useState(-1);
  const [dragging, setDragging] = React52.useState(false);
  const moveCount = React52.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = React52.useState(-1);
  const sliderRef = React52.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp(newValue, min, max);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values[index]);
      newValue = newValue < values[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = React52.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = React52.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React52.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React52.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return _extends({}, otherHandlers, ownEventHandlers);
  };
  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Slider/Slider.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded13 = ["aria-label", "aria-valuetext", "aria-labelledby", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelFormat", "isRtl", "defaultValue", "slotProps", "slots"];
function Identity2(x) {
  return x;
}
var useUtilityClasses12 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getSliderUtilityClass));
};
var Slider = React53.forwardRef(function Slider2(props, forwardedRef) {
  var _slots$root, _slots$rail, _slots$track, _slots$thumb, _slots$mark, _slots$markLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = "horizontal",
    scale = Identity2,
    step = 1,
    track = "normal",
    valueLabelFormat = Identity2,
    isRtl = false,
    defaultValue,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const partialOwnerState = _extends({}, props, {
    marks: marksProp,
    disabled,
    isRtl,
    defaultValue,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap
  } = useSlider(_extends({}, partialOwnerState, {
    rootRef: forwardedRef
  }));
  const ownerState = _extends({}, partialOwnerState, {
    marked: marks.length > 0 && marks.some((mark) => mark.label),
    dragging,
    focusedThumbIndex
  });
  const classes = useUtilityClasses12(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_slots$rail = slots.rail) != null ? _slots$rail : "span";
  const railProps = useSlotProps({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = useSlotProps({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = (_slots$mark = slots.mark) != null ? _slots$mark : "span";
  const markProps = useSlotProps({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_slots$markLabel = slots.markLabel) != null ? _slots$markLabel : "span";
  const markLabelProps = useSlotProps({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input3 = slots.input || "input";
  const inputProps = useSlotProps({
    elementType: Input3,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return (0, import_jsx_runtime30.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime29.jsx)(Rail, _extends({}, railProps)), (0, import_jsx_runtime29.jsx)(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime30.jsxs)(React53.Fragment, {
        children: [(0, import_jsx_runtime29.jsx)(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_m_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? (0, import_jsx_runtime29.jsx)(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_m_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps2[axis].offset(percent);
      return (0, import_jsx_runtime30.jsxs)(Thumb, _extends({
        "data-index": index
      }, thumbProps, {
        className: clsx_m_default(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
        style: _extends({}, style, {
          pointerEvents: disableSwap && active !== index ? "none" : void 0
        }, thumbProps.style),
        children: [(0, import_jsx_runtime29.jsx)(Input3, _extends({
          "data-index": index,
          "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
          value: values[index]
        }, inputProps)), ValueLabel ? (0, import_jsx_runtime29.jsx)(ValueLabel, _extends({}, !isHostComponent(ValueLabel) && {
          valueLabelFormat,
          index,
          disabled
        }, valueLabelProps, {
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat
        })) : null]
      }), index);
    })]
  }));
});
true ? Slider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types16.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types16.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types16.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.number), import_prop_types16.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types16.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types16.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types16.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types16.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.shape({
    label: import_prop_types16.default.node,
    value: import_prop_types16.default.number.isRequired
  })), import_prop_types16.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types16.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types16.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types16.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types16.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types16.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types16.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types16.default.func,
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types16.default.shape({
    input: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    mark: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    markLabel: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    rail: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    root: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    thumb: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    track: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    valueLabel: import_prop_types16.default.oneOfType([import_prop_types16.default.any, import_prop_types16.default.func])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types16.default.shape({
    input: import_prop_types16.default.elementType,
    mark: import_prop_types16.default.elementType,
    markLabel: import_prop_types16.default.elementType,
    rail: import_prop_types16.default.elementType,
    root: import_prop_types16.default.elementType,
    thumb: import_prop_types16.default.elementType,
    track: import_prop_types16.default.elementType,
    valueLabel: import_prop_types16.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types16.default.number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types16.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types16.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.number), import_prop_types16.default.number]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.string])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Snackbar/Snackbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React55 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/Snackbar/snackbarClasses.js
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
var snackbarClasses = generateUtilityClasses("MuiSnackbar", ["root"]);

// node_modules/@mui/lab/node_modules/@mui/base/useSnackbar/useSnackbar.js
init_extends();
var React54 = __toESM(require_react());
init_esm();
function useSnackbar(parameters) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = React54.useRef();
  React54.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown2(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose == null ? void 0 : onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback((event, reason) => {
    onClose == null ? void 0 : onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  React54.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = (event) => {
    onClose == null ? void 0 : onClose(event, "clickaway");
  };
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };
  const handleResume = React54.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null ? void 0 : onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null ? void 0 : onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
    handleResume();
  };
  React54.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation"
    }, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Snackbar/Snackbar.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded14 = ["autoHideDuration", "children", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];
var useUtilityClasses13 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getSnackbarUtilityClass));
};
var Snackbar = React55.forwardRef(function Snackbar2(props, forwardedRef) {
  const {
    autoHideDuration = null,
    children,
    disableWindowBlurListener = false,
    exited = true,
    onClose,
    open,
    resumeHideDuration,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const classes = useUtilityClasses13();
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  }));
  const ownerState = props;
  const Root = slots.root || "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = useSlotProps({
    elementType: ClickAwayListener_default,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });
  delete clickAwayListenerProps.ownerState;
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime31.jsx)(ClickAwayListener_default, _extends({}, clickAwayListenerProps, {
    children: (0, import_jsx_runtime31.jsx)(Root, _extends({}, rootProps, {
      children
    }))
  }));
});
true ? Snackbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types17.default.number,
  /**
   * @ignore
   */
  children: import_prop_types17.default.node,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types17.default.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: import_prop_types17.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types17.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types17.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types17.default.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: import_prop_types17.default.shape({
    clickAwayListener: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.shape({
      children: import_prop_types17.default.element.isRequired,
      disableReactTree: import_prop_types17.default.bool,
      mouseEvent: import_prop_types17.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types17.default.func,
      touchEvent: import_prop_types17.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    root: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types17.default.shape({
    root: import_prop_types17.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Switch/Switch.js
init_extends();
init_objectWithoutPropertiesLoose();
var React57 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/useSwitch/useSwitch.js
init_extends();
var React56 = __toESM(require_react());
init_esm();
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  const createHandleInputChange = (otherProps) => (event) => {
    var _otherProps$onChange;
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null ? void 0 : _otherProps$onChange.call(otherProps, event);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React56.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React56.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React56.useRef(null);
  const createHandleFocus = (otherProps) => (event) => {
    var _otherProps$onFocus;
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }
    onFocus == null ? void 0 : onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null ? void 0 : _otherProps$onFocus.call(otherProps, event);
  };
  const createHandleBlur = (otherProps) => (event) => {
    var _otherProps$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    onBlur == null ? void 0 : onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null ? void 0 : _otherProps$onBlur.call(otherProps, event);
  };
  const handleInputRef = useForkRef(focusVisibleRef, inputRef);
  const getInputProps = (otherProps = {}) => _extends({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleInputRef,
    required,
    type: "checkbox"
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    inputRef: handleInputRef,
    readOnly: Boolean(readOnly)
  };
}

// node_modules/@mui/lab/node_modules/@mui/base/Switch/switchClasses.js
function getSwitchUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
var switchClasses = generateUtilityClasses("MuiSwitch", ["root", "input", "track", "thumb", "checked", "disabled", "focusVisible", "readOnly"]);

// node_modules/@mui/lab/node_modules/@mui/base/Switch/Switch.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded15 = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "slotProps", "slots"];
var useUtilityClasses14 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    thumb: ["thumb"],
    input: ["input"],
    track: ["track"]
  };
  return composeClasses(slots, useClassNamesOverride(getSwitchUtilityClass));
};
var Switch = React57.forwardRef(function Switch2(props, forwardedRef) {
  var _slots$root, _slots$thumb, _slots$input, _slots$track;
  const {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses14(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: slotProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input3 = (_slots$input = slots.input) != null ? _slots$input : "input";
  const inputProps = useSlotProps({
    elementType: Input3,
    getSlotProps: getInputProps,
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const Track = slots.track === null ? () => null : (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    ownerState,
    className: classes.track
  });
  return (0, import_jsx_runtime33.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime32.jsx)(Track, _extends({}, trackProps)), (0, import_jsx_runtime32.jsx)(Thumb, _extends({}, thumbProps)), (0, import_jsx_runtime32.jsx)(Input3, _extends({}, inputProps))]
  }));
});
true ? Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types18.default.bool,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types18.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types18.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types18.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types18.default.func,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types18.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types18.default.bool,
  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  slotProps: import_prop_types18.default.shape({
    input: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    thumb: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    track: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
  }),
  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types18.default.shape({
    input: import_prop_types18.default.elementType,
    root: import_prop_types18.default.elementType,
    thumb: import_prop_types18.default.elementType,
    track: import_prop_types18.default.oneOfType([import_prop_types18.default.elementType, import_prop_types18.default.oneOf([null])])
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/TablePagination/TablePagination.js
init_extends();
init_objectWithoutPropertiesLoose();
var React59 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/TablePagination/TablePaginationActions.js
init_extends();
init_objectWithoutPropertiesLoose();
var React58 = __toESM(require_react());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var _excluded16 = ["count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState", "slotProps", "slots"];
var _span;
var _span2;
var _span3;
var _span4;
function LastPageIconDefault() {
  return _span || (_span = (0, import_jsx_runtime34.jsx)("span", {
    children: "⇾|"
  }));
}
function FirstPageIconDefault() {
  return _span2 || (_span2 = (0, import_jsx_runtime34.jsx)("span", {
    children: "|⇽"
  }));
}
function NextPageIconDefault() {
  return _span3 || (_span3 = (0, import_jsx_runtime34.jsx)("span", {
    children: "⇾"
  }));
}
function BackPageIconDefault() {
  return _span4 || (_span4 = (0, import_jsx_runtime34.jsx)("span", {
    children: "⇽"
  }));
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
var TablePaginationActions = React58.forwardRef(function TablePaginationActions2(props, forwardedRef) {
  var _slots$root, _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$backButton, _slots$lastPageIcon, _slots$firstPageIcon, _slots$nextPageIcon, _slots$backPageIcon;
  const {
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton = false,
    showLastButton = false,
    direction,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const ownerState = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState
  });
  const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : "button";
  const firstButtonProps = useSlotProps({
    elementType: FirstButton,
    externalSlotProps: slotProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page)
    },
    ownerState
  });
  const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : "button";
  const lastButtonProps = useSlotProps({
    elementType: LastButton,
    externalSlotProps: slotProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page)
    },
    ownerState
  });
  const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : "button";
  const nextButtonProps = useSlotProps({
    elementType: NextButton,
    externalSlotProps: slotProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    },
    ownerState
  });
  const BackButton = (_slots$backButton = slots.backButton) != null ? _slots$backButton : "button";
  const backButtonProps = useSlotProps({
    elementType: BackButton,
    externalSlotProps: slotProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    },
    ownerState
  });
  const LastPageIcon = (_slots$lastPageIcon = slots.lastPageIcon) != null ? _slots$lastPageIcon : LastPageIconDefault;
  const FirstPageIcon = (_slots$firstPageIcon = slots.firstPageIcon) != null ? _slots$firstPageIcon : FirstPageIconDefault;
  const NextPageIcon = (_slots$nextPageIcon = slots.nextPageIcon) != null ? _slots$nextPageIcon : NextPageIconDefault;
  const BackPageIcon = (_slots$backPageIcon = slots.backPageIcon) != null ? _slots$backPageIcon : BackPageIconDefault;
  return (0, import_jsx_runtime35.jsxs)(Root, _extends({}, rootProps, {
    children: [showFirstButton && (0, import_jsx_runtime34.jsx)(FirstButton, _extends({}, firstButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime34.jsx)(LastPageIcon, {}) : (0, import_jsx_runtime34.jsx)(FirstPageIcon, {})
    })), (0, import_jsx_runtime34.jsx)(BackButton, _extends({}, backButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime34.jsx)(NextPageIcon, {}) : (0, import_jsx_runtime34.jsx)(BackPageIcon, {})
    })), (0, import_jsx_runtime34.jsx)(NextButton, _extends({}, nextButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime34.jsx)(BackPageIcon, {}) : (0, import_jsx_runtime34.jsx)(NextPageIcon, {})
    })), showLastButton && (0, import_jsx_runtime34.jsx)(LastButton, _extends({}, lastButtonProps, {
      children: direction === "rtl" ? (0, import_jsx_runtime34.jsx)(FirstPageIcon, {}) : (0, import_jsx_runtime34.jsx)(LastPageIcon, {})
    }))]
  }));
});
var TablePaginationActions_default = TablePaginationActions;

// node_modules/@mui/lab/node_modules/@mui/base/TablePagination/tablePaginationClasses.js
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
var tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);

// node_modules/@mui/lab/node_modules/@mui/base/TablePagination/TablePagination.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded17 = ["colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelId", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "selectId", "slotProps", "slots"];
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel2(type) {
  return `Go to ${type} page`;
}
var useUtilityClasses15 = () => {
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, useClassNamesOverride(getTablePaginationUtilityClass));
};
var TablePagination = React59.forwardRef(function TablePagination2(props, forwardedRef) {
  var _slots$root, _slots$select, _slots$actions, _slots$menuItem, _slots$selectLabel, _slots$displayedRows, _slots$toolbar, _slots$spacer;
  const {
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel2,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelId: labelIdProp,
    labelRowsPerPage = "Rows per page:",
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectId: selectIdProp,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const ownerState = props;
  const classes = useUtilityClasses15();
  let colSpan;
  const Root = (_slots$root = slots.root) != null ? _slots$root : "td";
  if (Root === "td" || !isHostComponent(Root)) {
    colSpan = colSpanProp || 1e3;
  }
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const selectId = useId(selectIdProp);
  const labelId = useId(labelIdProp);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Select3 = (_slots$select = slots.select) != null ? _slots$select : "select";
  const selectProps = useSlotProps({
    elementType: Select3,
    externalSlotProps: slotProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: (e) => onRowsPerPageChange && onRowsPerPageChange(e),
      "aria-label": rowsPerPage.toString(),
      "aria-labelledby": [labelId, selectId].filter(Boolean).join(" ") || void 0
    },
    ownerState,
    className: classes.select
  });
  const Actions = (_slots$actions = slots.actions) != null ? _slots$actions : TablePaginationActions_default;
  const actionsProps = useSlotProps({
    elementType: Actions,
    externalSlotProps: slotProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem3 = (_slots$menuItem = slots.menuItem) != null ? _slots$menuItem : "option";
  const menuItemProps = useSlotProps({
    elementType: MenuItem3,
    externalSlotProps: slotProps.menuItem,
    additionalProps: {
      value: void 0
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = (_slots$selectLabel = slots.selectLabel) != null ? _slots$selectLabel : "p";
  const selectLabelProps = useSlotProps({
    elementType: SelectLabel,
    externalSlotProps: slotProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = (_slots$displayedRows = slots.displayedRows) != null ? _slots$displayedRows : "p";
  const displayedRowsProps = useSlotProps({
    elementType: DisplayedRows,
    externalSlotProps: slotProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = (_slots$toolbar = slots.toolbar) != null ? _slots$toolbar : "div";
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = (_slots$spacer = slots.spacer) != null ? _slots$spacer : "div";
  const spacerProps = useSlotProps({
    elementType: Spacer,
    externalSlotProps: slotProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return (0, import_jsx_runtime36.jsx)(Root, _extends({}, rootProps, {
    children: (0, import_jsx_runtime37.jsxs)(Toolbar, _extends({}, toolbarProps, {
      children: [(0, import_jsx_runtime36.jsx)(Spacer, _extends({}, spacerProps)), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime36.jsx)(SelectLabel, _extends({}, selectLabelProps, {
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime36.jsx)(Select3, _extends({}, selectProps, {
        children: rowsPerPageOptions.map((rowsPerPageOption) => (0, import_react.createElement)(MenuItem3, _extends({}, menuItemProps, {
          key: typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== "number" && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), (0, import_jsx_runtime36.jsx)(DisplayedRows, _extends({}, displayedRowsProps, {
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), (0, import_jsx_runtime36.jsx)(Actions, _extends({}, actionsProps))]
    }))
  }));
});
true ? TablePagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  colSpan: import_prop_types19.default.number,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: import_prop_types19.default.number.isRequired,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: import_prop_types19.default.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: import_prop_types19.default.func,
  /**
   * Id of the label element within the pagination.
   */
  labelId: import_prop_types19.default.string,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: import_prop_types19.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types19.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types19.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes(integerPropType_default.isRequired, (props) => {
    const {
      count,
      page,
      rowsPerPage
    } = props;
    if (count === -1) {
      return null;
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`);
    }
    return null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType_default.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.shape({
    label: import_prop_types19.default.string.isRequired,
    value: import_prop_types19.default.number.isRequired
  })]).isRequired),
  /**
   * Id of the select element within the pagination.
   */
  selectId: import_prop_types19.default.string,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: import_prop_types19.default.shape({
    actions: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    displayedRows: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    menuItem: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    select: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    selectLabel: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    spacer: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    toolbar: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object])
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types19.default.shape({
    actions: import_prop_types19.default.elementType,
    displayedRows: import_prop_types19.default.elementType,
    menuItem: import_prop_types19.default.elementType,
    root: import_prop_types19.default.elementType,
    select: import_prop_types19.default.elementType,
    selectLabel: import_prop_types19.default.elementType,
    spacer: import_prop_types19.default.elementType,
    toolbar: import_prop_types19.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/TabPanel/TabPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React64 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses = generateUtilityClasses("MuiTabPanel", ["root", "hidden"]);

// node_modules/@mui/lab/node_modules/@mui/base/useTabPanel/useTabPanel.js
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Tabs/Tabs.js
init_extends();
init_objectWithoutPropertiesLoose();
var React63 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/Tabs/tabsClasses.js
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
var tabsClasses = generateUtilityClasses("MuiTabs", ["root", "horizontal", "vertical"]);

// node_modules/@mui/lab/node_modules/@mui/base/useTabs/useTabs.js
init_extends();
var React60 = __toESM(require_react());
init_esm();
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Tabs",
    state: "value"
  });
  const onSelected = React60.useCallback((event, newValue) => {
    setValue(newValue);
    onChange == null ? void 0 : onChange(event, newValue);
  }, [onChange, setValue]);
  const {
    subitems: tabPanels,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React60.useRef(() => void 0);
  const getTabPanelId = React60.useCallback((tabValue) => {
    return tabPanels.get(tabValue);
  }, [tabPanels]);
  const getTabId2 = React60.useCallback((tabPanelId) => {
    return tabIdLookup.current(tabPanelId);
  }, []);
  const registerTabIdLookup = React60.useCallback((lookupFunction) => {
    tabIdLookup.current = lookupFunction;
  }, []);
  return {
    contextValue: _extends({
      direction,
      getTabId: getTabId2,
      getTabPanelId,
      onSelected,
      orientation,
      registerTabIdLookup,
      selectionFollowsFocus,
      value
    }, compoundComponentContextValue)
  };
}
var useTabs_default = useTabs;

// node_modules/@mui/lab/node_modules/@mui/base/useTabs/TabsProvider.js
var React62 = __toESM(require_react());

// node_modules/@mui/lab/node_modules/@mui/base/Tabs/TabsContext.js
var React61 = __toESM(require_react());
var Context = React61.createContext(null);
if (true) {
  Context.displayName = "TabsContext";
}
function useTabsContext() {
  const context = React61.useContext(Context);
  if (context == null) {
    throw new Error("No TabsContext provided");
  }
  return context;
}
var TabsContext_default = Context;

// node_modules/@mui/lab/node_modules/@mui/base/useTabs/TabsProvider.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
function TabsProvider(props) {
  const {
    value: valueProp,
    children
  } = props;
  const {
    direction,
    getItemIndex,
    onSelected,
    orientation,
    registerItem,
    registerTabIdLookup,
    selectionFollowsFocus,
    totalSubitemCount,
    value,
    getTabId: getTabId2,
    getTabPanelId
  } = valueProp;
  const compoundComponentContextValue = React62.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  const tabsContextValue = React62.useMemo(() => ({
    direction,
    getTabId: getTabId2,
    getTabPanelId,
    onSelected,
    orientation,
    registerTabIdLookup,
    selectionFollowsFocus,
    value
  }), [direction, getTabId2, getTabPanelId, onSelected, orientation, registerTabIdLookup, selectionFollowsFocus, value]);
  return (0, import_jsx_runtime38.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime38.jsx)(TabsContext_default.Provider, {
      value: tabsContextValue,
      children
    })
  });
}

// node_modules/@mui/lab/node_modules/@mui/base/Tabs/Tabs.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded18 = ["children", "value", "defaultValue", "orientation", "direction", "onChange", "selectionFollowsFocus", "slotProps", "slots"];
var useUtilityClasses16 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsUtilityClass));
};
var Tabs = React63.forwardRef(function Tabs2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    orientation = "horizontal",
    direction = "ltr",
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const {
    contextValue
  } = useTabs_default(props);
  const ownerState = _extends({}, props, {
    orientation,
    direction
  });
  const classes = useUtilityClasses16(ownerState);
  const TabsRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabsRootProps = useSlotProps({
    elementType: TabsRoot,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime39.jsx)(TabsRoot, _extends({}, tabsRootProps, {
    children: (0, import_jsx_runtime39.jsx)(TabsProvider, {
      value: contextValue,
      children
    })
  }));
});
true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types20.default.node,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types20.default.oneOfType([import_prop_types20.default.number, import_prop_types20.default.string]),
  /**
   * The direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types20.default.oneOf(["ltr", "rtl"]),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types20.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types20.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types20.default.bool,
  /**
   * The props used for each slot inside the Tabs.
   * @default {}
   */
  slotProps: import_prop_types20.default.shape({
    root: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object])
  }),
  /**
   * The components used for each slot inside the Tabs.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types20.default.shape({
    root: import_prop_types20.default.elementType
  }),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `null`.
   */
  value: import_prop_types20.default.oneOfType([import_prop_types20.default.number, import_prop_types20.default.string])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/useTabPanel/useTabPanel.js
function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}
function useTabPanel(parameters) {
  const {
    value: valueParam,
    id: idParam
  } = parameters;
  const context = useTabsContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const {
    value: selectedTabValue,
    getTabId: getTabId2
  } = context;
  const id = useId(idParam);
  const {
    id: value
  } = useCompoundItem(valueParam, id, tabPanelValueGenerator);
  const hidden = value !== selectedTabValue;
  const correspondingTabId = value !== void 0 ? getTabId2(value) : void 0;
  const getRootProps = () => {
    return {
      "aria-labelledby": correspondingTabId != null ? correspondingTabId : void 0,
      hidden,
      id: id != null ? id : void 0
    };
  };
  return {
    hidden,
    getRootProps
  };
}
var useTabPanel_default = useTabPanel;

// node_modules/@mui/lab/node_modules/@mui/base/TabPanel/TabPanel.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded19 = ["children", "value", "slotProps", "slots"];
var useUtilityClasses17 = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabPanelUtilityClass));
};
var TabPanel = React64.forwardRef(function TabPanel2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const {
    hidden,
    getRootProps
  } = useTabPanel_default(props);
  const ownerState = _extends({}, props, {
    hidden
  });
  const classes = useUtilityClasses17(ownerState);
  const TabPanelRoot2 = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabPanelRootProps = useSlotProps({
    elementType: TabPanelRoot2,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tabpanel",
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime40.jsx)(TabPanelRoot2, _extends({}, tabPanelRootProps, {
    children: !hidden && children
  }));
});
true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types21.default.node,
  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object])
  }),
  /**
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    root: import_prop_types21.default.elementType
  }),
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * If not provided, it will fall back to the index of the panel.
   * It is recommended to explicitly provide it, as it's required for the tab panel to be rendered on the server.
   */
  value: import_prop_types21.default.oneOfType([import_prop_types21.default.number, import_prop_types21.default.string])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/TabsList/TabsList.js
init_extends();
init_objectWithoutPropertiesLoose();
var React67 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/lab/node_modules/@mui/base/TabsList/tabsListClasses.js
function getTabsListUtilityClass(slot) {
  return generateUtilityClass("MuiTabsList", slot);
}
var tabsListClasses = generateUtilityClasses("MuiTabsList", ["root", "horizontal", "vertical"]);

// node_modules/@mui/lab/node_modules/@mui/base/useTabsList/useTabsList.js
init_extends();
var React65 = __toESM(require_react());

// node_modules/@mui/lab/node_modules/@mui/base/useTabsList/useTabsList.types.js
var TabsListActionTypes = {
  valueChange: "valueChange"
};

// node_modules/@mui/lab/node_modules/@mui/base/useTabsList/tabsListReducer.js
init_extends();
function tabsListReducer(state, action) {
  if (action.type === TabsListActionTypes.valueChange) {
    return _extends({}, state, {
      highlightedValue: action.value
    });
  }
  const newState = listReducer(state, action);
  const {
    context: {
      selectionFollowsFocus
    }
  } = action;
  if (action.type === ListActionTypes.itemsChange) {
    if (newState.selectedValues.length > 0) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValues[0]
      });
    }
    moveHighlight(null, "reset", action.context);
  }
  if (selectionFollowsFocus && newState.highlightedValue != null) {
    return _extends({}, newState, {
      selectedValues: [newState.highlightedValue]
    });
  }
  return newState;
}

// node_modules/@mui/lab/node_modules/@mui/base/useTabsList/useTabsList.js
function useTabsList(parameters) {
  var _selectedValues$;
  const {
    rootRef: externalRef
  } = parameters;
  const {
    direction = "ltr",
    onSelected,
    orientation = "horizontal",
    value,
    registerTabIdLookup,
    selectionFollowsFocus
  } = useTabsContext();
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React65.useCallback((tabValue) => {
    var _subitems$get;
    return (_subitems$get = subitems.get(tabValue)) == null ? void 0 : _subitems$get.id;
  }, [subitems]);
  registerTabIdLookup(tabIdLookup);
  const subitemKeys = React65.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getTabElement = React65.useCallback((tabValue) => {
    var _subitems$get$ref$cur, _subitems$get2;
    if (tabValue == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get2 = subitems.get(tabValue)) == null ? void 0 : _subitems$get2.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const isRtl = direction === "rtl";
  let listOrientation;
  if (orientation === "vertical") {
    listOrientation = "vertical";
  } else {
    listOrientation = isRtl ? "horizontal-rtl" : "horizontal-ltr";
  }
  const handleChange = React65.useCallback((event, newValue) => {
    var _newValue$;
    onSelected(event, (_newValue$ = newValue[0]) != null ? _newValue$ : null);
  }, [onSelected]);
  const controlledProps = React65.useMemo(() => {
    if (value === void 0) {
      return {};
    }
    return value != null ? {
      selectedValues: [value]
    } : {
      selectedValues: []
    };
  }, [value]);
  const isItemDisabled = React65.useCallback((item) => {
    var _subitems$get$disable, _subitems$get3;
    return (_subitems$get$disable = (_subitems$get3 = subitems.get(item)) == null ? void 0 : _subitems$get3.disabled) != null ? _subitems$get$disable : false;
  }, [subitems]);
  const {
    contextValue: listContextValue,
    dispatch,
    getRootProps: getListboxRootProps,
    state: {
      highlightedValue,
      selectedValues
    },
    rootRef: mergedRootRef
  } = useList_default({
    controlledProps,
    disabledItemsFocusable: !selectionFollowsFocus,
    focusManagement: "DOM",
    getItemDomElement: getTabElement,
    isItemDisabled,
    items: subitemKeys,
    rootRef: externalRef,
    onChange: handleChange,
    orientation: listOrientation,
    reducerActionContext: React65.useMemo(() => ({
      selectionFollowsFocus: selectionFollowsFocus || false
    }), [selectionFollowsFocus]),
    selectionMode: "single",
    stateReducer: tabsListReducer
  });
  React65.useEffect(() => {
    if (value === void 0) {
      return;
    }
    if (value != null) {
      dispatch({
        type: TabsListActionTypes.valueChange,
        value
      });
    }
  }, [dispatch, value]);
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, getListboxRootProps(otherHandlers), {
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      role: "tablist"
    });
  };
  return {
    contextValue: _extends({}, compoundComponentContextValue, listContextValue),
    dispatch,
    getRootProps,
    highlightedValue,
    isRtl,
    orientation,
    rootRef: mergedRootRef,
    selectedValue: (_selectedValues$ = selectedValues[0]) != null ? _selectedValues$ : null
  };
}
var useTabsList_default = useTabsList;

// node_modules/@mui/lab/node_modules/@mui/base/useTabsList/TabsListProvider.js
var React66 = __toESM(require_react());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function TabsListProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React66.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React66.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime41.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime41.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/lab/node_modules/@mui/base/TabsList/TabsList.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded20 = ["children", "slotProps", "slots"];
var useUtilityClasses18 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsListUtilityClass));
};
var TabsList = React67.forwardRef(function TabsList2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = useTabsList_default({
    rootRef: forwardedRef
  });
  const ownerState = _extends({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses18(ownerState);
  const TabsListRoot = (_slots$root = slots.root) != null ? _slots$root : "div";
  const tabsListRootProps = useSlotProps({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime42.jsx)(TabsListProvider, {
    value: contextValue,
    children: (0, import_jsx_runtime42.jsx)(TabsListRoot, _extends({}, tabsListRootProps, {
      children
    }))
  });
});
true ? TabsList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types22.default.node,
  /**
   * The props used for each slot inside the TabsList.
   * @default {}
   */
  slotProps: import_prop_types22.default.shape({
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  /**
   * The components used for each slot inside the TabsList.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types22.default.shape({
    root: import_prop_types22.default.elementType
  })
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/Tab/Tab.js
init_extends();
init_objectWithoutPropertiesLoose();
var React69 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/lab/node_modules/@mui/base/Tab/tabClasses.js
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
var tabClasses = generateUtilityClasses("MuiTab", ["root", "selected", "disabled"]);

// node_modules/@mui/lab/node_modules/@mui/base/useTab/useTab.js
init_extends();
var React68 = __toESM(require_react());
init_esm();
function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}
function useTab(parameters) {
  const {
    value: valueParam,
    rootRef: externalRef,
    disabled = false,
    id: idParam
  } = parameters;
  const tabRef = React68.useRef(null);
  const id = useId(idParam);
  const {
    value: selectedValue,
    selectionFollowsFocus,
    getTabPanelId
  } = useTabsContext();
  const tabMetadata = React68.useMemo(() => ({
    disabled,
    ref: tabRef,
    id
  }), [disabled, tabRef, id]);
  const {
    id: value,
    index,
    totalItemCount: totalTabsCount
  } = useCompoundItem(valueParam, tabMetadata, tabValueGenerator);
  const {
    getRootProps: getTabProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: "button"
  });
  const handleRef = useForkRef(tabRef, externalRef, listItemRefHandler, buttonRefHandler);
  const tabPanelId = value !== void 0 ? getTabPanelId(value) : void 0;
  const getRootProps = (otherHandlers = {}) => {
    const resolvedTabProps = _extends({}, otherHandlers, getTabProps(otherHandlers));
    const resolvedButtonProps = _extends({}, resolvedTabProps, getButtonProps(resolvedTabProps));
    return _extends({}, resolvedButtonProps, {
      role: "tab",
      "aria-controls": tabPanelId,
      "aria-selected": selected,
      id,
      ref: handleRef
    });
  };
  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index,
    rootRef: handleRef,
    // the `selected` state isn't set on the server (it relies on effects to be calculated),
    // so we fall back to checking the `value` prop with the selectedValue from the TabsContext
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}
var useTab_default = useTab;

// node_modules/@mui/lab/node_modules/@mui/base/Tab/Tab.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded21 = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "slotProps", "slots"];
var useUtilityClasses19 = (ownerState) => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabUtilityClass));
};
var Tab = React69.forwardRef(function Tab2(props, forwardedRef) {
  var _slots$root;
  const {
    children,
    disabled = false,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const tabRef = React69.useRef();
  const handleRef = useForkRef(tabRef, forwardedRef);
  const {
    active,
    highlighted,
    selected,
    getRootProps
  } = useTab_default(_extends({}, props, {
    rootRef: handleRef
  }));
  const ownerState = _extends({}, props, {
    active,
    disabled,
    highlighted,
    selected
  });
  const classes = useUtilityClasses19(ownerState);
  const TabRoot = (_slots$root = slots.root) != null ? _slots$root : "button";
  const tabRootProps = useSlotProps({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime43.jsx)(TabRoot, _extends({}, tabRootProps, {
    children
  }));
});
true ? Tab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.shape({
    current: import_prop_types23.default.shape({
      focusVisible: import_prop_types23.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types23.default.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types23.default.bool,
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types23.default.func,
  /**
   * The props used for each slot inside the Tab.
   * @default {}
   */
  slotProps: import_prop_types23.default.shape({
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object])
  }),
  /**
   * The components used for each slot inside the Tab.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types23.default.shape({
    root: import_prop_types23.default.elementType
  }),
  /**
   * You can provide your own value. Otherwise, it falls back to the child position index.
   */
  value: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
init_extends();
init_objectWithoutPropertiesLoose();
var React70 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var ReactDOM2 = __toESM(require_react_dom());
init_esm();
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded23 = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
var TextareaAutosize = React70.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23);
  const {
    current: isControlled
  } = React70.useRef(value != null);
  const inputRef = React70.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = React70.useRef(null);
  const renders = React70.useRef(0);
  const [state, setState] = React70.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = React70.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    if (true) {
      if (renders.current === 20) {
        console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
      }
    }
    return prevState;
  };
  const syncHeight = React70.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState((prevState) => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSync = () => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    ReactDOM2.flushSync(() => {
      setState((prevState) => {
        return updateState(prevState, newState);
      });
    });
  };
  React70.useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      if (inputRef.current) {
        syncHeightWithFlushSync();
      }
    });
    let resizeObserver;
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", handleResize);
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  React70.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime45.jsxs)(React70.Fragment, {
    children: [(0, import_jsx_runtime44.jsx)("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? "hidden" : void 0
      }, style)
    }, other)), (0, import_jsx_runtime44.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        padding: 0
      })
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: import_prop_types24.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types24.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types24.default.string,
  /**
   * @ignore
   */
  style: import_prop_types24.default.object,
  /**
   * @ignore
   */
  value: import_prop_types24.default.oneOfType([import_prop_types24.default.arrayOf(import_prop_types24.default.string), import_prop_types24.default.number, import_prop_types24.default.string])
} : void 0;

// node_modules/@mui/lab/node_modules/@mui/base/useAutocomplete/useAutocomplete.js
init_extends();
var React71 = __toESM(require_react());
init_esm();
function stripDiacritics(string) {
  return typeof string.normalize !== "undefined" ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
var defaultFilterOptions = createFilterOptions();
var pageSize = 5;
var defaultIsActiveElementInListbox = (listboxRef) => {
  var _listboxRef$current$p;
  return listboxRef.current !== null && ((_listboxRef$current$p = listboxRef.current.parentElement) == null ? void 0 : _listboxRef$current$p.contains(document.activeElement));
};
function useAutocomplete(props) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = "Mui",
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = "useAutocomplete",
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = (option) => {
      var _option$label;
      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value2) => option === value2,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = useId(idProp);
  let getOptionLabel = getOptionLabelProp;
  getOptionLabel = (option) => {
    const optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel !== "string") {
      if (true) {
        const erroneousReturn = optionLabel === void 0 ? "undefined" : `${typeof optionLabel} (${optionLabel})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(option)}.`);
      }
      return String(optionLabel);
    }
    return optionLabel;
  };
  const ignoreFocus = React71.useRef(false);
  const firstFocus = React71.useRef(true);
  const inputRef = React71.useRef(null);
  const listboxRef = React71.useRef(null);
  const [anchorEl, setAnchorEl] = React71.useState(null);
  const [focusedTag, setFocusedTag] = React71.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React71.useRef(defaultHighlighted);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: "",
    name: componentName,
    state: "inputValue"
  });
  const [focused, setFocused] = React71.useState(false);
  const resetInputValue = React71.useCallback((event, newValue) => {
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
    if (!isOptionSelected && !clearOnBlur) {
      return;
    }
    let newInputValue;
    if (multiple) {
      newInputValue = "";
    } else if (newValue == null) {
      newInputValue = "";
    } else {
      const optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === "string" ? optionLabel : "";
    }
    if (inputValue === newInputValue) {
      return;
    }
    setInputValueState(newInputValue);
    if (onInputChange) {
      onInputChange(event, newInputValue, "reset");
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: "open"
  });
  const [inputPristine, setInputPristine] = React71.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(
    options.filter((option) => {
      if (filterSelectedOptions && (multiple ? value : [value]).some((value2) => value2 !== null && isOptionEqualToValue(option, value2))) {
        return false;
      }
      return true;
    }),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? "" : inputValue,
      getOptionLabel
    }
  ) : [];
  const previousProps = usePreviousProps_default({
    filteredOptions,
    value
  });
  React71.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }
    if (freeSolo && !valueChange) {
      return;
    }
    resetInputValue(null, value);
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      const missingValue = (multiple ? value : [value]).filter((value2) => !options.some((option) => isOptionEqualToValue(option, value2)));
      if (missingValue.length > 0) {
        console.warn([`MUI: The value provided to ${componentName} is invalid.`, `None of the options match with \`${missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join("\n"));
      }
    }
  }
  const focusTag = useEventCallback((tagToFocus) => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  });
  React71.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);
  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      if (direction === "next" && nextFocus === filteredOptions.length || direction === "previous" && nextFocus === -1) {
        return -1;
      }
      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);
      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute("aria-disabled") === "true";
      if (option && !option.hasAttribute("tabindex") || nextFocusDisabled) {
        nextFocus += direction === "next" ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const setHighlightedIndex = useEventCallback(({
    event,
    index,
    reason = "auto"
  }) => {
    highlightedIndexRef.current = index;
    if (index === -1) {
      inputRef.current.removeAttribute("aria-activedescendant");
    } else {
      inputRef.current.setAttribute("aria-activedescendant", `${id}-option-${index}`);
    }
    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }
    if (!listboxRef.current) {
      return;
    }
    const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    if (prev) {
      prev.classList.remove(`${unstable_classNamePrefix}-focused`);
      prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
    }
    const listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
    if (!listboxNode) {
      return;
    }
    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
    if (!option) {
      return;
    }
    option.classList.add(`${unstable_classNamePrefix}-focused`);
    if (reason === "keyboard") {
      option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
    }
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== "mouse") {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = useEventCallback(({
    event,
    diff,
    direction = "next",
    reason = "auto"
  }) => {
    if (!popupOpen) {
      return;
    }
    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;
      if (diff === "reset") {
        return defaultHighlighted;
      }
      if (diff === "start") {
        return 0;
      }
      if (diff === "end") {
        return maxIndex;
      }
      const newIndex = highlightedIndexRef.current + diff;
      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }
        return maxIndex;
      }
      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }
        return 0;
      }
      return newIndex;
    };
    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    });
    if (autoComplete && diff !== "reset") {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;
        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const checkHighlightedOptionExists = () => {
    const isSameValue = (value1, value2) => {
      const label1 = value1 ? getOptionLabel(value1) : "";
      const label2 = value2 ? getOptionLabel(value2) : "";
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption) {
        const previousHighlightedOptionExists = filteredOptions.some((option) => {
          return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
        });
        if (previousHighlightedOptionExists) {
          return true;
        }
      }
    }
    return false;
  };
  const syncHighlightedIndex = React71.useCallback(() => {
    if (!popupOpen) {
      return;
    }
    if (checkHighlightedOptionExists()) {
      return;
    }
    const valueItem = multiple ? value[0] : value;
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: "reset"
      });
      return;
    }
    if (!listboxRef.current) {
      return;
    }
    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];
      if (multiple && currentOption && findIndex(value, (val) => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }
      const itemIndex = findIndex(filteredOptions, (optionItem) => isOptionEqualToValue(optionItem, valueItem));
      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: "reset"
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }
      return;
    }
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    }
    setHighlightedIndex({
      index: highlightedIndexRef.current
    });
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple
  ]);
  const handleListboxRef = useEventCallback((node) => {
    setRef(listboxRef, node);
    if (!node) {
      return;
    }
    syncHighlightedIndex();
  });
  if (true) {
    React71.useEffect(() => {
      if (!inputRef.current || inputRef.current.nodeName !== "INPUT") {
        if (inputRef.current && inputRef.current.nodeName === "TEXTAREA") {
          console.warn([`A textarea element was provided to ${componentName} where input was expected.`, `This is not a supported scenario but it may work under certain conditions.`, `A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).`, `Make sure to test keyboard navigation and add custom event handlers if necessary.`].join("\n"));
        } else {
          console.error([`MUI: Unable to find the input element. It was resolved to ${inputRef.current} while an HTMLInputElement was expected.`, `Instead, ${componentName} expects an input element.`, "", componentName === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join("\n"));
        }
      }
    }, [componentName]);
  }
  React71.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  const handleOpen = (event) => {
    if (open) {
      return;
    }
    setOpenState(true);
    setInputPristine(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }
    setOpenState(false);
    if (onClose) {
      onClose(event, reason);
    }
  };
  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(event, newValue, reason, details);
    }
    setValueState(newValue);
  };
  const isTouch = React71.useRef(false);
  const selectNewValue = (event, option, reasonProp = "selectOption", origin = "options") => {
    let reason = reasonProp;
    let newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      if (true) {
        const matches = newValue.filter((val) => isOptionEqualToValue(option, val));
        if (matches.length > 1) {
          console.error([`MUI: The \`isOptionEqualToValue\` method of ${componentName} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${matches.length} matches.`].join("\n"));
        }
      }
      const itemIndex = findIndex(newValue, (valueItem) => isOptionEqualToValue(option, valueItem));
      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== "freeSolo") {
        newValue.splice(itemIndex, 1);
        reason = "removeOption";
      }
    }
    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });
    if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
      handleClose(event, reason);
    }
    if (blurOnSelect === true || blurOnSelect === "touch" && isTouch.current || blurOnSelect === "mouse" && !isTouch.current) {
      inputRef.current.blur();
    }
  };
  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      if (direction === "next" && nextFocus === value.length || direction === "previous" && nextFocus === -1) {
        return -1;
      }
      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);
      if (!option || !option.hasAttribute("tabindex") || option.disabled || option.getAttribute("aria-disabled") === "true") {
        nextFocus += direction === "next" ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }
    if (inputValue === "") {
      handleClose(event, "toggleInput");
    }
    let nextTag = focusedTag;
    if (focusedTag === -1) {
      if (inputValue === "" && direction === "previous") {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === "next" ? 1 : -1;
      if (nextTag < 0) {
        nextTag = 0;
      }
      if (nextTag === value.length) {
        nextTag = -1;
      }
    }
    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };
  const handleClear = (event) => {
    ignoreFocus.current = true;
    setInputValueState("");
    if (onInputChange) {
      onInputChange(event, "", "clear");
    }
    handleValue(event, multiple ? [] : null, "clear");
  };
  const handleKeyDown2 = (other) => (event) => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
    if (event.defaultMuiPrevented) {
      return;
    }
    if (focusedTag !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
    if (event.which !== 229) {
      switch (event.key) {
        case "Home":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "start",
              direction: "next",
              reason: "keyboard",
              event
            });
          }
          break;
        case "End":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "end",
              direction: "previous",
              reason: "keyboard",
              event
            });
          }
          break;
        case "PageUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "PageDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowLeft":
          handleFocusTag(event, "previous");
          break;
        case "ArrowRight":
          handleFocusTag(event, "next");
          break;
        case "Enter":
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
            event.preventDefault();
            if (disabled) {
              return;
            }
            selectNewValue(event, option, "selectOption");
            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== "" && inputValueIsSelectedValue === false) {
            if (multiple) {
              event.preventDefault();
            }
            selectNewValue(event, inputValue, "createOption", "freeSolo");
          }
          break;
        case "Escape":
          if (popupOpen) {
            event.preventDefault();
            event.stopPropagation();
            handleClose(event, "escape");
          } else if (clearOnEscape && (inputValue !== "" || multiple && value.length > 0)) {
            event.preventDefault();
            event.stopPropagation();
            handleClear(event);
          }
          break;
        case "Backspace":
          if (multiple && !readOnly && inputValue === "" && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
        case "Delete":
          if (multiple && !readOnly && inputValue === "" && value.length > 0 && focusedTag !== -1) {
            const index = focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
        default:
      }
    }
  };
  const handleFocus = (event) => {
    setFocused(true);
    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };
  const handleBlur2 = (event) => {
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;
    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], "blur");
    } else if (autoSelect && freeSolo && inputValue !== "") {
      selectNewValue(event, inputValue, "blur", "freeSolo");
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }
    handleClose(event, "blur");
  };
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);
      if (onInputChange) {
        onInputChange(event, newValue, "input");
      }
    }
    if (newValue === "") {
      if (!disableClearable && !multiple) {
        handleValue(event, null, "clear");
      }
    } else {
      handleOpen(event);
    }
  };
  const handleOptionMouseMove = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    if (highlightedIndexRef.current !== index) {
      setHighlightedIndex({
        event,
        index,
        reason: "mouse"
      });
    }
  };
  const handleOptionTouchStart = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    });
    isTouch.current = true;
  };
  const handleOptionClick = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    selectNewValue(event, filteredOptions[index], "selectOption");
    isTouch.current = false;
  };
  const handleTagDelete = (index) => (event) => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, "removeOption", {
      option: value[index]
    });
  };
  const handlePopupIndicator = (event) => {
    if (open) {
      handleClose(event, "toggleInput");
    } else {
      handleOpen(event);
    }
  };
  const handleMouseDown = (event) => {
    if (event.target.getAttribute("id") !== id) {
      event.preventDefault();
    }
  };
  const handleClick = () => {
    inputRef.current.focus();
    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }
    firstFocus.current = false;
  };
  const handleInputMouseDown = (event) => {
    if (inputValue === "" || !open) {
      handlePopupIndicator(event);
    }
  };
  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    const indexBy = /* @__PURE__ */ new Map();
    let warn25 = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);
      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn25) {
            console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`.");
            warn25 = true;
          }
          indexBy.set(group, true);
        }
        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }
      return acc;
    }, []);
  }
  if (disabledProp && focused) {
    handleBlur2();
  }
  return {
    getRootProps: (other = {}) => _extends({
      "aria-owns": listboxAvailable ? `${id}-listbox` : null
    }, other, {
      onKeyDown: handleKeyDown2(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur2,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": popupOpen ? "" : null,
      "aria-autocomplete": autoComplete ? "both" : "list",
      "aria-controls": listboxAvailable ? `${id}-listbox` : void 0,
      "aria-expanded": listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: inputRef,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => _extends({
      key: index,
      "data-tag-index": index,
      tabIndex: -1
    }, !readOnly && {
      onDelete: handleTagDelete(index)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${id}-listbox`,
      "aria-labelledby": `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some((value2) => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: "option",
        id: `${id}-option-${index}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        "data-option-index": index,
        "aria-disabled": disabled,
        "aria-selected": selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

// node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js
init_generateUtilityClass();
function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass("MuiLoadingButton", slot);
}
var loadingButtonClasses = generateUtilityClasses("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]);
var loadingButtonClasses_default = loadingButtonClasses;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var _excluded24 = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
var useUtilityClasses20 = (ownerState) => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading"],
    startIcon: [loading && `startIconLoading${capitalize_default(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${capitalize_default(loadingPosition)}`],
    loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${capitalize_default(loadingPosition)}`]
  };
  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var rootShouldForwardProp = (prop) => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
var LoadingButtonRoot = styled_default(Button_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    return [styles2.root, styles2.startIconLoadingStart && {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}`]: styles2.startIconLoadingStart
    }, styles2.endIconLoadingEnd && {
      [`& .${loadingButtonClasses_default.endIconLoadingEnd}`]: styles2.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => _extends({
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === "center" && {
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: theme.transitions.duration.short
  }),
  [`&.${loadingButtonClasses_default.loading}`]: {
    color: "transparent"
  }
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
var LoadingButtonLoadingIndicator = styled_default("div", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.loadingIndicator, styles2[`loadingIndicator${capitalize_default(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, ownerState.loadingPosition === "start" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  left: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "start" && ownerState.variant === "text" && {
  left: 6
}, ownerState.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === "end" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  right: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "end" && ownerState.variant === "text" && {
  right: 6
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  position: "relative",
  left: -10
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  position: "relative",
  right: -10
}));
var LoadingButton = React72.forwardRef(function LoadingButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLoadingButton"
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const id = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime46.jsx)(CircularProgress_default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = _extends({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });
  const classes = useUtilityClasses20(ownerState);
  const loadingButtonLoadingIndicator = loading ? (0, import_jsx_runtime46.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState,
    children: loadingIndicator
  }) : null;
  return (0, import_jsx_runtime47.jsxs)(LoadingButtonRoot, _extends({
    disabled: disabled || loading,
    id,
    ref
  }, other, {
    variant,
    classes,
    ownerState,
    children: [ownerState.loadingPosition === "end" ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : children]
  }));
});
true ? LoadingButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types25.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types25.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types25.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types25.default.string,
  /**
   * If `true`, the loading indicator is shown.
   * @default false
   */
  loading: import_prop_types25.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types25.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: chainPropTypes(import_prop_types25.default.oneOf(["start", "end", "center"]), (props) => {
    if (props.loadingPosition === "start" && !props.startIcon) {
      return new Error(`MUI: The loadingPosition="start" should be used in combination with startIcon.`);
    }
    if (props.loadingPosition === "end" && !props.endIcon) {
      return new Error(`MUI: The loadingPosition="end" should be used in combination with endIcon.`);
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types25.default.oneOfType([import_prop_types25.default.oneOf(["contained", "outlined", "text"]), import_prop_types25.default.string])
} : void 0;
var LoadingButton_default = LoadingButton;

// node_modules/@mui/lab/LocalizationProvider/LocalizationProvider.js
var React73 = __toESM(require_react());
var warnedOnce15 = false;
var warn11 = () => {
  if (!warnedOnce15) {
    console.warn(["MUI: The LocalizationProvider component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { LocalizationProvider } from '@mui/x-date-pickers'`", "or `import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce15 = true;
  }
};
var LocalizationProvider = React73.forwardRef(function DeprecatedLocalizationProvider() {
  warn11();
  return null;
});
var LocalizationProvider_default = LocalizationProvider;

// node_modules/@mui/lab/MobileDatePicker/MobileDatePicker.js
var React74 = __toESM(require_react());
var warnedOnce16 = false;
var warn12 = () => {
  if (!warnedOnce16) {
    console.warn(["MUI: The MobileDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileDatePicker } from '@mui/x-date-pickers'`", "or `import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce16 = true;
  }
};
var MobileDatePicker = React74.forwardRef(function DeprecatedMobileDatePicker(props, ref) {
  warn12();
  return null;
});
var MobileDatePicker_default = MobileDatePicker;

// node_modules/@mui/lab/MobileDateRangePicker/MobileDateRangePicker.js
var React75 = __toESM(require_react());
var warnedOnce17 = false;
var warn13 = () => {
  if (!warnedOnce17) {
    console.warn(["MUI: The MobileDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { MobileDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce17 = true;
  }
};
var MobileDateRangePicker = React75.forwardRef(function DeprecatedMobileDateRangePicker() {
  warn13();
  return null;
});
var MobileDateRangePicker_default = MobileDateRangePicker;

// node_modules/@mui/lab/MobileDateTimePicker/MobileDateTimePicker.js
var React76 = __toESM(require_react());
var warnedOnce18 = false;
var warn14 = () => {
  if (!warnedOnce18) {
    console.warn(["MUI: The MobileDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileDateTimePicker } from '@mui/x-date-pickers'`", "or `import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce18 = true;
  }
};
var MobileDateTimePicker = React76.forwardRef(function DeprecatedMobileDateTimePicker() {
  warn14();
  return null;
});
var MobileDateTimePicker_default = MobileDateTimePicker;

// node_modules/@mui/lab/MobileTimePicker/MobileTimePicker.js
var React77 = __toESM(require_react());
var warnedOnce19 = false;
var warn15 = () => {
  if (!warnedOnce19) {
    console.warn(["MUI: The MobileTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileTimePicker } from '@mui/x-date-pickers'`", "or `import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce19 = true;
  }
};
var MobileTimePicker = React77.forwardRef(function DeprecatedMobileTimePicker() {
  warn15();
  return null;
});
var MobileTimePicker_default = MobileTimePicker;

// node_modules/@mui/lab/MonthPicker/MonthPicker.js
var React78 = __toESM(require_react());
var warnedOnce20 = false;
var warn16 = () => {
  if (!warnedOnce20) {
    console.warn(["MUI: The MonthPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MonthPicker } from '@mui/x-date-pickers'`", "or `import { MonthPicker } from '@mui/x-date-pickers/MonthPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce20 = true;
  }
};
var MonthPicker = React78.forwardRef(function DeprecatedMonthPicker() {
  warn16();
  return null;
});
var MonthPicker_default = MonthPicker;
var monthPickerClasses = {};
var getMonthPickerUtilityClass = (slot) => {
  warn16();
  return "";
};

// node_modules/@mui/lab/Pagination/Pagination.js
init_extends();
var React79 = __toESM(require_react());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var warnedOnce21 = false;
var Pagination_default2 = React79.forwardRef(function DeprecatedPagination(props, ref) {
  if (!warnedOnce21) {
    console.warn(["MUI: The Pagination component was moved from the lab to the core.", "", "You should use `import { Pagination } from '@mui/material'`", "or `import Pagination from '@mui/material/Pagination'`"].join("\n"));
    warnedOnce21 = true;
  }
  return (0, import_jsx_runtime48.jsx)(Pagination_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/PaginationItem/PaginationItem.js
init_extends();
var React80 = __toESM(require_react());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var warnedOnce22 = false;
var PaginationItem_default2 = React80.forwardRef(function DeprecatedPaginationItem(props, ref) {
  if (!warnedOnce22) {
    console.warn(["MUI: The PaginationItem component was moved from the lab to the core.", "", "You should use `import { PaginationItem } from '@mui/material'`", "or `import PaginationItem from '@mui/material/PaginationItem'`"].join("\n"));
    warnedOnce22 = true;
  }
  return (0, import_jsx_runtime49.jsx)(PaginationItem_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/CalendarPickerSkeleton/CalendarPickerSkeleton.js
var React81 = __toESM(require_react());
var warnedOnce23 = false;
var warn17 = () => {
  if (!warnedOnce23) {
    console.warn(["MUI: The CalendarPickerSkeleton component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { CalendarPickerSkeleton } from '@mui/x-date-pickers'`", "or `import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce23 = true;
  }
};
var CalendarPickerSkeleton = React81.forwardRef(function DeprecatedCalendarPickerSkeleton() {
  warn17();
  return null;
});
var CalendarPickerSkeleton_default = CalendarPickerSkeleton;
var calendarPickerSkeletonClasses = {};
var getCalendarPickerSkeletonUtilityClass = (slot) => {
  warn17();
  return "";
};

// node_modules/@mui/lab/PickersDay/PickersDay.js
var React82 = __toESM(require_react());
var warnedOnce24 = false;
var warn18 = () => {
  if (!warnedOnce24) {
    console.warn(["MUI: The PickersDay component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { PickersDay } from '@mui/x-date-pickers'`", "or `import { PickersDay } from '@mui/x-date-pickers/PickersDay'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce24 = true;
  }
};
var PickersDay = React82.forwardRef(function DeprecatedPickersDay() {
  warn18();
  return null;
});
var PickersDay_default = PickersDay;
var pickersDayClasses = {};
var getPickersDayUtilityClass = (slot) => {
  warn18();
  return "";
};

// node_modules/@mui/lab/Rating/Rating.js
init_extends();
var React83 = __toESM(require_react());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var warnedOnce25 = false;
var Rating_default2 = React83.forwardRef(function DeprecatedRating(props, ref) {
  if (!warnedOnce25) {
    console.warn(["MUI: The Rating component was moved from the lab to the core.", "", "You should use `import { Rating } from '@mui/material'`", "or `import Rating from '@mui/material/Rating'`"].join("\n"));
    warnedOnce25 = true;
  }
  return (0, import_jsx_runtime50.jsx)(Rating_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/Skeleton/Skeleton.js
init_extends();
var React84 = __toESM(require_react());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var warnedOnce26 = false;
var Skeleton_default2 = React84.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce26) {
    console.warn(["MUI: The Skeleton component was moved from the lab to the core.", "", "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join("\n"));
    warnedOnce26 = true;
  }
  return (0, import_jsx_runtime51.jsx)(Skeleton_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDial/SpeedDial.js
init_extends();
var React85 = __toESM(require_react());
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var warnedOnce27 = false;
var SpeedDial_default2 = React85.forwardRef(function DeprecatedSpeedDial(props, ref) {
  if (!warnedOnce27) {
    console.warn(["MUI: The SpeedDial component was moved from the lab to the core.", "", "You should use `import { SpeedDial } from '@mui/material'`", "or `import SpeedDial from '@mui/material/SpeedDial'`"].join("\n"));
    warnedOnce27 = true;
  }
  return (0, import_jsx_runtime52.jsx)(SpeedDial_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDialAction/SpeedDialAction.js
init_extends();
var React86 = __toESM(require_react());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var warnedOnce28 = false;
var SpeedDialAction_default2 = React86.forwardRef(function DeprecatedSpeedDialAction(props, ref) {
  if (!warnedOnce28) {
    console.warn(["MUI: The SpeedDialAction component was moved from the lab to the core.", "", "You should use `import { SpeedDialAction } from '@mui/material'`", "or `import SpeedDialAction from '@mui/material/SpeedDialAction'`"].join("\n"));
    warnedOnce28 = true;
  }
  return (0, import_jsx_runtime53.jsx)(SpeedDialAction_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDialIcon/SpeedDialIcon.js
init_extends();
var React87 = __toESM(require_react());
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var warnedOnce29 = false;
var SpeedDialIcon_default2 = React87.forwardRef(function DeprecatedSpeedDialIcon(props, ref) {
  if (!warnedOnce29) {
    console.warn(["MUI: The SpeedDialIcon component was moved from the lab to the core.", "", "You should use `import { SpeedDialIcon } from '@mui/material'`", "or `import SpeedDialIcon from '@mui/material/SpeedDialIcon'`"].join("\n"));
    warnedOnce29 = true;
  }
  return (0, import_jsx_runtime54.jsx)(SpeedDialIcon_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/StaticDatePicker/StaticDatePicker.js
var React88 = __toESM(require_react());
var warnedOnce30 = false;
var warn19 = () => {
  if (!warnedOnce30) {
    console.warn(["MUI: The StaticDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticDatePicker } from '@mui/x-date-pickers'`", "or `import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce30 = true;
  }
};
var StaticDatePicker = React88.forwardRef(function DeprecatedStaticDatePicker() {
  warn19();
  return null;
});
var StaticDatePicker_default = StaticDatePicker;

// node_modules/@mui/lab/StaticDateRangePicker/StaticDateRangePicker.js
var React89 = __toESM(require_react());
var warnedOnce31 = false;
var warn20 = () => {
  if (!warnedOnce31) {
    console.warn(["MUI: The StaticDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { StaticDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce31 = true;
  }
};
var StaticDateRangePicker = React89.forwardRef(function DeprecatedStaticDateRangePicker() {
  warn20();
  return null;
});
var StaticDateRangePicker_default = StaticDateRangePicker;

// node_modules/@mui/lab/StaticDateTimePicker/StaticDateTimePicker.js
var React90 = __toESM(require_react());
var warnedOnce32 = false;
var warn21 = () => {
  if (!warnedOnce32) {
    console.warn(["MUI: The StaticDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticDateTimePicker } from '@mui/x-date-pickers'`", "or `import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce32 = true;
  }
};
var StaticDateTimePicker = React90.forwardRef(function DeprecatedStaticDateTimePicker() {
  warn21();
  return null;
});
var StaticDateTimePicker_default = StaticDateTimePicker;

// node_modules/@mui/lab/StaticTimePicker/StaticTimePicker.js
var React91 = __toESM(require_react());
var warnedOnce33 = false;
var warn22 = () => {
  if (!warnedOnce33) {
    console.warn(["MUI: The StaticTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticTimePicker } from '@mui/x-date-pickers'`", "or `import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce33 = true;
  }
};
var StaticTimePicker = React91.forwardRef(function DeprecatedStaticTimePicker() {
  warn22();
  return null;
});
var StaticTimePicker_default = StaticTimePicker;

// node_modules/@mui/lab/TabContext/TabContext.js
var React92 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var Context2 = React92.createContext(null);
if (true) {
  Context2.displayName = "TabContext";
}
function useUniquePrefix() {
  const [id, setId] = React92.useState(null);
  React92.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}
function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = React92.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return (0, import_jsx_runtime55.jsx)(Context2.Provider, {
    value: context,
    children
  });
}
true ? TabContext.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types26.default.node,
  /**
   * The value of the currently selected `Tab`.
   */
  value: import_prop_types26.default.string.isRequired
} : void 0;
function useTabContext() {
  return React92.useContext(Context2);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}

// node_modules/@mui/lab/TabList/TabList.js
init_extends();
init_objectWithoutPropertiesLoose();
var React93 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var _excluded25 = ["children"];
var TabList = React93.forwardRef(function TabList2(props, ref) {
  const {
    children: childrenProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const children = React93.Children.map(childrenProp, (child) => {
    if (!React93.isValidElement(child)) {
      return null;
    }
    return React93.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      "aria-controls": getPanelId(context, child.props.value),
      id: getTabId(context, child.props.value)
    });
  });
  return (0, import_jsx_runtime56.jsx)(Tabs_default, _extends({}, other, {
    ref,
    value: context.value,
    children
  }));
});
true ? TabList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A list of `<Tab />` elements.
   */
  children: import_prop_types27.default.node
} : void 0;
var TabList_default = TabList;

// node_modules/@mui/lab/TabPanel/TabPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React94 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/lab/TabPanel/tabPanelClasses.js
init_generateUtilityClass();
function getTabPanelUtilityClass2(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses2 = generateUtilityClasses("MuiTabPanel", ["root"]);
var tabPanelClasses_default2 = tabPanelClasses2;

// node_modules/@mui/lab/TabPanel/TabPanel.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var _excluded26 = ["children", "className", "value"];
var useUtilityClasses21 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTabPanelUtilityClass2, classes);
};
var TabPanelRoot = styled_default("div", {
  name: "MuiTabPanel",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
var TabPanel3 = React94.forwardRef(function TabPanel4(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabPanel"
  });
  const {
    children,
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const ownerState = _extends({}, props);
  const classes = useUtilityClasses21(ownerState);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);
  return (0, import_jsx_runtime57.jsx)(TabPanelRoot, _extends({
    "aria-labelledby": tabId,
    className: clsx_m_default(classes.root, className),
    hidden: value !== context.value,
    id,
    ref,
    role: "tabpanel",
    ownerState
  }, other, {
    children: value === context.value && children
  }));
});
true ? TabPanel3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types28.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types28.default.object,
  /**
   * @ignore
   */
  className: import_prop_types28.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object]),
  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: import_prop_types28.default.string.isRequired
} : void 0;
var TabPanel_default2 = TabPanel3;

// node_modules/@mui/lab/TimePicker/TimePicker.js
var React95 = __toESM(require_react());
var warnedOnce34 = false;
var warn23 = () => {
  if (!warnedOnce34) {
    console.warn(["MUI: The TimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { TimePicker } from '@mui/x-date-pickers'`", "or `import { TimePicker } from '@mui/x-date-pickers/TimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce34 = true;
  }
};
var TimePicker = React95.forwardRef(function DeprecatedTimePicker() {
  warn23();
  return null;
});
var TimePicker_default = TimePicker;

// node_modules/@mui/lab/Timeline/Timeline.js
init_extends();
init_objectWithoutPropertiesLoose();
var React97 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/lab/Timeline/TimelineContext.js
var React96 = __toESM(require_react());
var TimelineContext = React96.createContext({});
if (true) {
  TimelineContext.displayName = "TimelineContext";
}
var TimelineContext_default = TimelineContext;

// node_modules/@mui/lab/Timeline/timelineClasses.js
init_generateUtilityClass();
function getTimelineUtilityClass(slot) {
  return generateUtilityClass("MuiTimeline", slot);
}
var timelineClasses = generateUtilityClasses("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate"]);
var timelineClasses_default = timelineClasses;

// node_modules/@mui/lab/Timeline/Timeline.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var _excluded27 = ["position", "className"];
var useUtilityClasses22 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", position && `position${capitalize_default(position)}`]
  };
  return composeClasses(slots, getTimelineUtilityClass, classes);
};
var TimelineRoot = styled_default("ul", {
  name: "MuiTimeline",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.position && styles2[`position${capitalize_default(ownerState.position)}`]];
  }
})({
  display: "flex",
  flexDirection: "column",
  padding: "6px 16px",
  flexGrow: 1
});
var Timeline = React97.forwardRef(function Timeline2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeline"
  });
  const {
    position = "right",
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const ownerState = _extends({}, props, {
    position
  });
  const classes = useUtilityClasses22(ownerState);
  const contextValue = React97.useMemo(() => ({
    position
  }), [position]);
  return (0, import_jsx_runtime58.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime58.jsx)(TimelineRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types29.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types29.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types29.default.string,
  /**
   * The position where the TimelineContent should appear relative to the time axis.
   * @default 'right'
   */
  position: import_prop_types29.default.oneOf(["alternate", "left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object])
} : void 0;
var Timeline_default = Timeline;

// node_modules/@mui/lab/TimelineConnector/TimelineConnector.js
init_extends();
init_objectWithoutPropertiesLoose();
var React98 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/lab/TimelineConnector/timelineConnectorClasses.js
init_generateUtilityClass();
function getTimelineConnectorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineConnector", slot);
}
var timelineConnectorClasses = generateUtilityClasses("MuiTimelineConnector", ["root"]);
var timelineConnectorClasses_default = timelineConnectorClasses;

// node_modules/@mui/lab/TimelineConnector/TimelineConnector.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var _excluded28 = ["className"];
var useUtilityClasses23 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineConnectorUtilityClass, classes);
};
var TimelineConnectorRoot = styled_default("span", {
  name: "MuiTimelineConnector",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => {
  return {
    width: 2,
    backgroundColor: (theme.vars || theme).palette.grey[400],
    flexGrow: 1
  };
});
var TimelineConnector = React98.forwardRef(function TimelineConnector2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineConnector"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const ownerState = props;
  const classes = useUtilityClasses23(ownerState);
  return (0, import_jsx_runtime59.jsx)(TimelineConnectorRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types30.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types30.default.object,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object])
} : void 0;
var TimelineConnector_default = TimelineConnector;

// node_modules/@mui/lab/TimelineContent/TimelineContent.js
init_objectWithoutPropertiesLoose();
init_extends();
var React99 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/lab/TimelineContent/timelineContentClasses.js
init_generateUtilityClass();
function getTimelineContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineContent", slot);
}
var timelineContentClasses = generateUtilityClasses("MuiTimelineContent", ["root", "positionLeft", "positionRight", "positionAlternate"]);
var timelineContentClasses_default = timelineContentClasses;

// node_modules/@mui/lab/TimelineContent/TimelineContent.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var _excluded29 = ["className"];
var useUtilityClasses24 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize_default(position)}`]
  };
  return composeClasses(slots, getTimelineContentUtilityClass, classes);
};
var TimelineContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`]];
  }
})(({
  ownerState
}) => _extends({
  flex: 1,
  padding: "6px 16px",
  textAlign: "left"
}, ownerState.position === "left" && {
  textAlign: "right"
}));
var TimelineContent = React99.forwardRef(function TimelineContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const {
    position: positionContext
  } = React99.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "right"
  });
  const classes = useUtilityClasses24(ownerState);
  return (0, import_jsx_runtime60.jsx)(TimelineContentRoot, _extends({
    component: "div",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types31.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types31.default.object,
  /**
   * @ignore
   */
  className: import_prop_types31.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object])
} : void 0;
var TimelineContent_default = TimelineContent;

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
init_objectWithoutPropertiesLoose();
init_extends();
var React100 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/lab/TimelineDot/timelineDotClasses.js
init_generateUtilityClass();
function getTimelineDotUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineDot", slot);
}
var timelineDotClasses = generateUtilityClasses("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
var timelineDotClasses_default = timelineDotClasses;

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var _excluded30 = ["className", "color", "variant"];
var useUtilityClasses25 = (ownerState) => {
  const {
    color,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, color !== "inherit" && `${variant}${capitalize_default(color)}`]
  };
  return composeClasses(slots, getTimelineDotUtilityClass, classes);
};
var TimelineDotRoot = styled_default("span", {
  name: "MuiTimelineDot",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.color !== "inherit" && `${ownerState.variant}${capitalize_default(ownerState.color)}`], styles2[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: "flex",
  alignSelf: "baseline",
  borderStyle: "solid",
  borderWidth: 2,
  padding: 4,
  borderRadius: "50%",
  boxShadow: (theme.vars || theme).shadows[1],
  margin: "11.5px 0"
}, ownerState.variant === "filled" && _extends({
  borderColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  color: (theme.vars || theme).palette.grey[50],
  backgroundColor: (theme.vars || theme).palette.grey[400]
} : {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main
})), ownerState.variant === "outlined" && _extends({
  boxShadow: "none",
  backgroundColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  borderColor: (theme.vars || theme).palette.grey[400]
} : {
  borderColor: (theme.vars || theme).palette[ownerState.color].main
}))));
var TimelineDot = React100.forwardRef(function TimelineDot2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineDot"
  });
  const {
    className,
    color = "grey",
    variant = "filled"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const ownerState = _extends({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses25(ownerState);
  return (0, import_jsx_runtime61.jsx)(TimelineDotRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineDot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * The dot can have a different colors.
   * @default 'grey'
   */
  color: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["error", "grey", "info", "inherit", "primary", "secondary", "success", "warning"]), import_prop_types32.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object]),
  /**
   * The dot can appear filled or outlined.
   * @default 'filled'
   */
  variant: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["filled", "outlined"]), import_prop_types32.default.string])
} : void 0;
var TimelineDot_default = TimelineDot;

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
init_objectWithoutPropertiesLoose();
init_extends();
var React102 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
init_objectWithoutPropertiesLoose();
init_extends();
var React101 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
init_clsx_m();
init_utils();

// node_modules/@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses.js
init_generateUtilityClass();
function getTimelineOppositeContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineOppositeContent", slot);
}
var timelineOppositeContentClasses = generateUtilityClasses("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate"]);
var timelineOppositeContentClasses_default = timelineOppositeContentClasses;

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var _excluded31 = ["className"];
var useUtilityClasses26 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize_default(position)}`]
  };
  return composeClasses(slots, getTimelineOppositeContentUtilityClass, classes);
};
var TimelineOppositeContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineOppositeContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`]];
  }
})(({
  ownerState
}) => _extends({
  padding: "6px 16px",
  marginRight: "auto",
  textAlign: "right",
  flex: 1
}, ownerState.position === "left" && {
  textAlign: "left"
}));
var TimelineOppositeContent = React101.forwardRef(function TimelineOppositeContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineOppositeContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const {
    position: positionContext
  } = React101.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "left"
  });
  const classes = useUtilityClasses26(ownerState);
  return (0, import_jsx_runtime62.jsx)(TimelineOppositeContentRoot, _extends({
    component: "div",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineOppositeContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types33.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types33.default.object,
  /**
   * @ignore
   */
  className: import_prop_types33.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object])
} : void 0;
TimelineOppositeContent.muiName = "TimelineOppositeContent";
var TimelineOppositeContent_default = TimelineOppositeContent;

// node_modules/@mui/lab/TimelineItem/timelineItemClasses.js
init_generateUtilityClass();
function getTimelineItemUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineItem", slot);
}
var timelineItemClasses = generateUtilityClasses("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "missingOppositeContent"]);
var timelineItemClasses_default = timelineItemClasses;

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var _excluded32 = ["position", "className"];
var useUtilityClasses27 = (ownerState) => {
  const {
    position,
    classes,
    hasOppositeContent
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize_default(position)}`, !hasOppositeContent && "missingOppositeContent"]
  };
  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};
var TimelineItemRoot = styled_default("li", {
  name: "MuiTimelineItem",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`]];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  display: "flex",
  position: "relative",
  minHeight: 70
}, ownerState.position === "left" && {
  flexDirection: "row-reverse"
}, ownerState.position === "alternate" && {
  "&:nth-of-type(even)": {
    flexDirection: "row-reverse",
    [`& .${timelineContentClasses_default.root}`]: {
      textAlign: "right"
    },
    [`& .${timelineOppositeContentClasses_default.root}`]: {
      textAlign: "left"
    }
  }
}, !ownerState.hasOppositeContent && {
  "&:before": {
    content: '""',
    flex: 1,
    padding: "6px 16px"
  }
}));
var TimelineItem = React102.forwardRef(function TimelineItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineItem"
  });
  const {
    position: positionProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const {
    position: positionContext
  } = React102.useContext(TimelineContext_default);
  let hasOppositeContent = false;
  React102.Children.forEach(props.children, (child) => {
    if (isMuiElement_default(child, ["TimelineOppositeContent"])) {
      hasOppositeContent = true;
    }
  });
  const ownerState = _extends({}, props, {
    position: positionProp || positionContext || "right",
    hasOppositeContent
  });
  const classes = useUtilityClasses27(ownerState);
  const contextValue = React102.useMemo(() => ({
    position: ownerState.position
  }), [ownerState.position]);
  return (0, import_jsx_runtime63.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime63.jsx)(TimelineItemRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? TimelineItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * @ignore
   */
  className: import_prop_types34.default.string,
  /**
   * The position where the timeline's item should appear.
   */
  position: import_prop_types34.default.oneOf(["left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object])
} : void 0;
var TimelineItem_default = TimelineItem;

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
init_extends();
init_objectWithoutPropertiesLoose();
var React103 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
init_clsx_m();

// node_modules/@mui/lab/TimelineSeparator/timelineSeparatorClasses.js
init_generateUtilityClass();
function getTimelineSeparatorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineSeparator", slot);
}
var timelineSeparatorClasses = generateUtilityClasses("MuiTimelineSeparator", ["root"]);
var timelineSeparatorClasses_default = timelineSeparatorClasses;

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var _excluded33 = ["className"];
var useUtilityClasses28 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineSeparatorUtilityClass, classes);
};
var TimelineSeparatorRoot = styled_default("div", {
  name: "MuiTimelineSeparator",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "flex",
  flexDirection: "column",
  flex: 0,
  alignItems: "center"
});
var TimelineSeparator = React103.forwardRef(function TimelineSeparator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineSeparator"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const ownerState = props;
  const classes = useUtilityClasses28(ownerState);
  return (0, import_jsx_runtime64.jsx)(TimelineSeparatorRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineSeparator.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  /**
   * @ignore
   */
  className: import_prop_types35.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object])
} : void 0;
var TimelineSeparator_default = TimelineSeparator;

// node_modules/@mui/lab/ToggleButton/ToggleButton.js
init_extends();
var React104 = __toESM(require_react());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var warnedOnce35 = false;
var ToggleButton_default2 = React104.forwardRef(function DeprecatedToggleButton(props, ref) {
  if (!warnedOnce35) {
    console.warn(["MUI: The ToggleButton component was moved from the lab to the core.", "", "You should use `import { ToggleButton } from '@mui/material'`", "or `import ToggleButton from '@mui/material/ToggleButton'`"].join("\n"));
    warnedOnce35 = true;
  }
  return (0, import_jsx_runtime65.jsx)(ToggleButton_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/ToggleButtonGroup/ToggleButtonGroup.js
init_extends();
var React105 = __toESM(require_react());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var warnedOnce36 = false;
var ToggleButtonGroup_default2 = React105.forwardRef(function DeprecatedToggleButtonGroup(props, ref) {
  if (!warnedOnce36) {
    console.warn(["MUI: The ToggleButtonGroup component was moved from the lab to the core.", "", "You should use `import { ToggleButtonGroup } from '@mui/material'`", "or `import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'`"].join("\n"));
    warnedOnce36 = true;
  }
  return (0, import_jsx_runtime66.jsx)(ToggleButtonGroup_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/TreeItem/TreeItem.js
init_objectWithoutPropertiesLoose();
init_extends();
var React110 = __toESM(require_react());
init_clsx_m();
var import_prop_types38 = __toESM(require_prop_types());
init_esm();
init_utils();

// node_modules/@mui/lab/TreeView/TreeViewContext.js
var React106 = __toESM(require_react());
var TreeViewContext = React106.createContext({});
if (true) {
  TreeViewContext.displayName = "TreeViewContext";
}
var TreeViewContext_default = TreeViewContext;

// node_modules/@mui/lab/TreeView/descendants.js
init_objectWithoutPropertiesLoose();
init_extends();
var React107 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _excluded34 = ["element"];
function findIndex2(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
function binaryFindElement(array, element) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle].element === element) {
      return middle;
    }
    if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
var DescendantContext = React107.createContext({});
if (true) {
  DescendantContext.displayName = "DescendantContext";
}
function usePrevious(value) {
  const ref = React107.useRef(null);
  React107.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var noop = () => {
};
function useDescendant(descendant) {
  const [, forceUpdate] = React107.useState();
  const {
    registerDescendant = noop,
    unregisterDescendant = noop,
    descendants = [],
    parentId = null
  } = React107.useContext(DescendantContext);
  const index = findIndex2(descendants, (item) => item.element === descendant.element);
  const previousDescendants = usePrevious(descendants);
  const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
    return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
  });
  useEnhancedEffect_default2(() => {
    if (descendant.element) {
      registerDescendant(_extends({}, descendant, {
        index
      }));
      return () => {
        unregisterDescendant(descendant.element);
      };
    }
    forceUpdate({});
    return void 0;
  }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
  return {
    parentId,
    index
  };
}
function DescendantProvider(props) {
  const {
    children,
    id
  } = props;
  const [items, set] = React107.useState([]);
  const registerDescendant = React107.useCallback((_ref) => {
    let {
      element
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded34);
    set((oldItems) => {
      let newItems;
      if (oldItems.length === 0) {
        return [_extends({}, other, {
          element,
          index: 0
        })];
      }
      const index = binaryFindElement(oldItems, element);
      if (oldItems[index] && oldItems[index].element === element) {
        newItems = oldItems;
      } else {
        const newItem = _extends({}, other, {
          element,
          index
        });
        newItems = oldItems.slice();
        newItems.splice(index, 0, newItem);
      }
      newItems.forEach((item, position) => {
        item.index = position;
      });
      return newItems;
    });
  }, []);
  const unregisterDescendant = React107.useCallback((element) => {
    set((oldItems) => oldItems.filter((item) => element !== item.element));
  }, []);
  const value = React107.useMemo(() => ({
    descendants: items,
    registerDescendant,
    unregisterDescendant,
    parentId: id
  }), [items, registerDescendant, unregisterDescendant, id]);
  return (0, import_jsx_runtime67.jsx)(DescendantContext.Provider, {
    value,
    children
  });
}
true ? DescendantProvider.propTypes = {
  children: import_prop_types36.default.node,
  id: import_prop_types36.default.string
} : void 0;

// node_modules/@mui/lab/TreeItem/TreeItemContent.js
init_extends();
init_objectWithoutPropertiesLoose();
var React109 = __toESM(require_react());
init_clsx_m();
var import_prop_types37 = __toESM(require_prop_types());

// node_modules/@mui/lab/TreeItem/useTreeItem.js
var React108 = __toESM(require_react());
function useTreeItem(nodeId) {
  const {
    focus,
    isExpanded,
    isExpandable,
    isFocused,
    isDisabled,
    isSelected,
    multiSelect,
    selectNode,
    selectRange,
    toggleExpansion
  } = React108.useContext(TreeViewContext_default);
  const expandable = isExpandable ? isExpandable(nodeId) : false;
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const handleExpansion = (event) => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (expandable && !(multiple && isExpanded(nodeId))) {
        toggleExpansion(event, nodeId);
      }
    }
  };
  const handleSelection = (event) => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (multiple) {
        if (event.shiftKey) {
          selectRange(event, {
            end: nodeId
          });
        } else {
          selectNode(event, nodeId, true);
        }
      } else {
        selectNode(event, nodeId);
      }
    }
  };
  const preventSelection = (event) => {
    if (event.shiftKey || event.ctrlKey || event.metaKey || disabled) {
      event.preventDefault();
    }
  };
  return {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  };
}

// node_modules/@mui/lab/TreeItem/TreeItemContent.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _excluded35 = ["classes", "className", "displayIcon", "expansionIcon", "icon", "label", "nodeId", "onClick", "onMouseDown"];
var TreeItemContent = React109.forwardRef(function TreeItemContent2(props, ref) {
  const {
    classes,
    className,
    displayIcon,
    expansionIcon,
    icon: iconProp,
    label,
    nodeId,
    onClick,
    onMouseDown
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId);
  const icon = iconProp || expansionIcon || displayIcon;
  const handleMouseDown = (event) => {
    preventSelection(event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  const handleClick = (event) => {
    handleExpansion(event);
    handleSelection(event);
    if (onClick) {
      onClick(event);
    }
  };
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions -- Key event is handled by the TreeView */
    (0, import_jsx_runtime69.jsxs)("div", _extends({
      className: clsx_m_default(className, classes.root, expanded && classes.expanded, selected && classes.selected, focused && classes.focused, disabled && classes.disabled),
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      ref
    }, other, {
      children: [(0, import_jsx_runtime68.jsx)("div", {
        className: classes.iconContainer,
        children: icon
      }), (0, import_jsx_runtime68.jsx)("div", {
        className: classes.label,
        children: label
      })]
    }))
  );
});
true ? TreeItemContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types37.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types37.default.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: import_prop_types37.default.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: import_prop_types37.default.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: import_prop_types37.default.node,
  /**
   * The tree node label.
   */
  label: import_prop_types37.default.node,
  /**
   * The id of the node.
   */
  nodeId: import_prop_types37.default.string.isRequired,
  /**
   * @ignore
   */
  onClick: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types37.default.func
} : void 0;
var TreeItemContent_default = TreeItemContent;

// node_modules/@mui/lab/TreeItem/treeItemClasses.js
init_generateUtilityClass();
function getTreeItemUtilityClass(slot) {
  return generateUtilityClass("MuiTreeItem", slot);
}
var treeItemClasses = generateUtilityClasses("MuiTreeItem", ["root", "group", "content", "expanded", "selected", "focused", "disabled", "iconContainer", "label"]);
var treeItemClasses_default = treeItemClasses;

// node_modules/@mui/lab/TreeItem/TreeItem.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var _excluded36 = ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"];
var useUtilityClasses29 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    expanded: ["expanded"],
    selected: ["selected"],
    focused: ["focused"],
    disabled: ["disabled"],
    iconContainer: ["iconContainer"],
    label: ["label"],
    group: ["group"]
  };
  return composeClasses(slots, getTreeItemUtilityClass, classes);
};
var TreeItemRoot = styled_default("li", {
  name: "MuiTreeItem",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  outline: 0
});
var StyledTreeItemContent = styled_default(TreeItemContent_default, {
  name: "MuiTreeItem",
  slot: "Content",
  overridesResolver: (props, styles2) => {
    return [styles2.content, styles2.iconContainer && {
      [`& .${treeItemClasses_default.iconContainer}`]: styles2.iconContainer
    }, styles2.label && {
      [`& .${treeItemClasses_default.label}`]: styles2.label
    }];
  }
})(({
  theme
}) => ({
  padding: "0 8px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${treeItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    backgroundColor: "transparent"
  },
  [`&.${treeItemClasses_default.focused}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${treeItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${treeItemClasses_default.focused}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`& .${treeItemClasses_default.iconContainer}`]: {
    marginRight: 4,
    width: 15,
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    "& svg": {
      fontSize: 18
    }
  },
  [`& .${treeItemClasses_default.label}`]: _extends({
    width: "100%",
    // fixes overflow - see https://github.com/mui/material-ui/issues/27372
    minWidth: 0,
    paddingLeft: 4,
    position: "relative"
  }, theme.typography.body1)
}));
var TreeItemGroup = styled_default(Collapse_default, {
  name: "MuiTreeItem",
  slot: "Group",
  overridesResolver: (props, styles2) => styles2.group
})({
  margin: 0,
  padding: 0,
  marginLeft: 17
});
var TreeItem = React110.forwardRef(function TreeItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTreeItem"
  });
  const {
    children,
    className,
    collapseIcon,
    ContentComponent = TreeItemContent_default,
    ContentProps,
    endIcon,
    expandIcon,
    disabled: disabledProp,
    icon,
    id: idProp,
    label,
    nodeId,
    onClick,
    onMouseDown,
    TransitionComponent = Collapse_default,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const {
    icons: contextIcons = {},
    focus,
    isExpanded,
    isFocused,
    isSelected,
    isDisabled,
    multiSelect,
    disabledItemsFocusable,
    mapFirstChar,
    unMapFirstChar,
    registerNode,
    unregisterNode,
    treeId
  } = React110.useContext(TreeViewContext_default);
  let id = null;
  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = `${treeId}-${nodeId}`;
  }
  const [treeitemElement, setTreeitemElement] = React110.useState(null);
  const contentRef = React110.useRef(null);
  const handleRef = useForkRef_default(setTreeitemElement, ref);
  const descendant = React110.useMemo(() => ({
    element: treeitemElement,
    id: nodeId
  }), [nodeId, treeitemElement]);
  const {
    index,
    parentId
  } = useDescendant(descendant);
  const expandable = Boolean(Array.isArray(children) ? children.length : children);
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const ownerState = _extends({}, props, {
    expanded,
    focused,
    selected,
    disabled
  });
  const classes = useUtilityClasses29(ownerState);
  let displayIcon;
  let expansionIcon;
  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }
  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }
  React110.useEffect(() => {
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index,
        parentId,
        expandable,
        disabled: disabledProp
      });
      return () => {
        unregisterNode(nodeId);
      };
    }
    return void 0;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  React110.useEffect(() => {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return () => {
        unMapFirstChar(nodeId);
      };
    }
    return void 0;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  let ariaSelected;
  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    ariaSelected = true;
  }
  function handleFocus(event) {
    if (event.target === event.currentTarget) {
      let rootElement;
      if (typeof event.target.getRootNode === "function") {
        rootElement = event.target.getRootNode();
      } else {
        rootElement = ownerDocument_default(event.target);
      }
      rootElement.getElementById(treeId).focus({
        preventScroll: true
      });
    }
    const unfocusable = !disabledItemsFocusable && disabled;
    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }
  return (0, import_jsx_runtime71.jsxs)(TreeItemRoot, _extends({
    className: clsx_m_default(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id,
    tabIndex: -1
  }, other, {
    ownerState,
    onFocus: handleFocus,
    children: [(0, import_jsx_runtime70.jsx)(StyledTreeItemContent, _extends({
      as: ContentComponent,
      ref: contentRef,
      classes: {
        root: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        disabled: classes.disabled,
        iconContainer: classes.iconContainer,
        label: classes.label
      },
      label,
      nodeId,
      onClick,
      onMouseDown,
      icon,
      expansionIcon,
      displayIcon,
      ownerState
    }, ContentProps)), children && (0, import_jsx_runtime70.jsx)(DescendantProvider, {
      id: nodeId,
      children: (0, import_jsx_runtime70.jsx)(TreeItemGroup, _extends({
        as: TransitionComponent,
        unmountOnExit: true,
        className: classes.group,
        in: expanded,
        component: "ul",
        role: "group"
      }, TransitionProps, {
        children
      }))
    })]
  }));
});
true ? TreeItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types38.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types38.default.object,
  /**
   * @ignore
   */
  className: import_prop_types38.default.string,
  /**
   * The icon used to collapse the node.
   */
  collapseIcon: import_prop_types38.default.node,
  /**
   * The component used for the content node.
   * @default TreeItemContent
   */
  ContentComponent: elementTypeAcceptingRef_default,
  /**
   * Props applied to ContentComponent
   */
  ContentProps: import_prop_types38.default.object,
  /**
   * If `true`, the node is disabled.
   * @default false
   */
  disabled: import_prop_types38.default.bool,
  /**
   * The icon displayed next to a end node.
   */
  endIcon: import_prop_types38.default.node,
  /**
   * The icon used to expand the node.
   */
  expandIcon: import_prop_types38.default.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: import_prop_types38.default.node,
  /**
   * @ignore
   */
  id: import_prop_types38.default.string,
  /**
   * The tree node label.
   */
  label: import_prop_types38.default.node,
  /**
   * The id of the node.
   */
  nodeId: import_prop_types38.default.string.isRequired,
  /**
   * @ignore
   */
  onClick: import_prop_types38.default.func,
  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus: unsupportedProp_default,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types38.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: import_prop_types38.default.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: import_prop_types38.default.object
} : void 0;
var TreeItem_default = TreeItem;

// node_modules/@mui/lab/TreeView/TreeView.js
init_extends();
init_objectWithoutPropertiesLoose();
var React111 = __toESM(require_react());
init_clsx_m();
var import_prop_types39 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/lab/TreeView/treeViewClasses.js
init_generateUtilityClass();
function getTreeViewUtilityClass(slot) {
  return generateUtilityClass("MuiTreeView", slot);
}
var treeViewClasses = generateUtilityClasses("MuiTreeView", ["root"]);
var treeViewClasses_default = treeViewClasses;

// node_modules/@mui/lab/TreeView/TreeView.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var _excluded37 = ["children", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disabledItemsFocusable", "disableSelection", "expanded", "id", "multiSelect", "onBlur", "onFocus", "onKeyDown", "onNodeFocus", "onNodeSelect", "onNodeToggle", "selected"];
var useUtilityClasses30 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTreeViewUtilityClass, classes);
};
var TreeViewRoot = styled_default("ul", {
  name: "MuiTreeView",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  padding: 0,
  margin: 0,
  listStyle: "none",
  outline: 0
});
function isPrintableCharacter(string) {
  return string && string.length === 1 && string.match(/\S/);
}
function findNextFirstChar(firstChars, startIndex, char) {
  for (let i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }
  return -1;
}
function noopSelection() {
  return false;
}
var defaultDefaultExpanded = [];
var defaultDefaultSelected = [];
var TreeView = React111.forwardRef(function TreeView2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTreeView"
  });
  const {
    children,
    className,
    defaultCollapseIcon,
    defaultEndIcon,
    defaultExpanded = defaultDefaultExpanded,
    defaultExpandIcon,
    defaultParentIcon,
    defaultSelected = defaultDefaultSelected,
    disabledItemsFocusable = false,
    disableSelection = false,
    expanded: expandedProp,
    id: idProp,
    multiSelect = false,
    onBlur,
    onFocus,
    onKeyDown,
    onNodeFocus,
    onNodeSelect,
    onNodeToggle,
    selected: selectedProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    defaultExpanded,
    defaultSelected,
    disabledItemsFocusable,
    disableSelection,
    multiSelect
  });
  const classes = useUtilityClasses30(ownerState);
  const treeId = useId_default(idProp);
  const treeRef = React111.useRef(null);
  const handleRef = useForkRef_default(treeRef, ref);
  const [focusedNodeId, setFocusedNodeId] = React111.useState(null);
  const nodeMap = React111.useRef({});
  const firstCharMap = React111.useRef({});
  const [expanded, setExpandedState] = useControlled_default({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "TreeView",
    state: "expanded"
  });
  const [selected, setSelectedState] = useControlled_default({
    controlled: selectedProp,
    default: defaultSelected,
    name: "TreeView",
    state: "selected"
  });
  const isExpanded = React111.useCallback((id) => Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false, [expanded]);
  const isExpandable = React111.useCallback((id) => nodeMap.current[id] && nodeMap.current[id].expandable, []);
  const isSelected = React111.useCallback((id) => Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id, [selected]);
  const isDisabled = React111.useCallback((id) => {
    let node = nodeMap.current[id];
    if (!node) {
      return false;
    }
    if (node.disabled) {
      return true;
    }
    while (node.parentId != null) {
      node = nodeMap.current[node.parentId];
      if (node.disabled) {
        return true;
      }
    }
    return false;
  }, []);
  const isFocused = (id) => focusedNodeId === id;
  const getChildrenIds = (id) => Object.keys(nodeMap.current).map((key) => {
    return nodeMap.current[key];
  }).filter((node) => node.parentId === id).sort((a, b) => a.index - b.index).map((child) => child.id);
  const getNavigableChildrenIds = (id) => {
    let childrenIds = getChildrenIds(id);
    if (!disabledItemsFocusable) {
      childrenIds = childrenIds.filter((node) => !isDisabled(node));
    }
    return childrenIds;
  };
  const getNextNode = (id) => {
    if (isExpanded(id) && getNavigableChildrenIds(id).length > 0) {
      return getNavigableChildrenIds(id)[0];
    }
    let node = nodeMap.current[id];
    while (node != null) {
      const siblings = getNavigableChildrenIds(node.parentId);
      const nextSibling = siblings[siblings.indexOf(node.id) + 1];
      if (nextSibling) {
        return nextSibling;
      }
      node = nodeMap.current[node.parentId];
    }
    return null;
  };
  const getPreviousNode = (id) => {
    const node = nodeMap.current[id];
    const siblings = getNavigableChildrenIds(node.parentId);
    const nodeIndex = siblings.indexOf(id);
    if (nodeIndex === 0) {
      return node.parentId;
    }
    let currentNode = siblings[nodeIndex - 1];
    while (isExpanded(currentNode) && getNavigableChildrenIds(currentNode).length > 0) {
      currentNode = getNavigableChildrenIds(currentNode).pop();
    }
    return currentNode;
  };
  const getLastNode = () => {
    let lastNode = getNavigableChildrenIds(null).pop();
    while (isExpanded(lastNode)) {
      lastNode = getNavigableChildrenIds(lastNode).pop();
    }
    return lastNode;
  };
  const getFirstNode = () => getNavigableChildrenIds(null)[0];
  const getParent = (id) => nodeMap.current[id].parentId;
  const findOrderInTremauxTree = (nodeAId, nodeBId) => {
    if (nodeAId === nodeBId) {
      return [nodeAId, nodeBId];
    }
    const nodeA = nodeMap.current[nodeAId];
    const nodeB = nodeMap.current[nodeBId];
    if (nodeA.parentId === nodeB.id || nodeB.parentId === nodeA.id) {
      return nodeB.parentId === nodeA.id ? [nodeA.id, nodeB.id] : [nodeB.id, nodeA.id];
    }
    const aFamily = [nodeA.id];
    const bFamily = [nodeB.id];
    let aAncestor = nodeA.parentId;
    let bAncestor = nodeB.parentId;
    let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
    let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
    let continueA = true;
    let continueB = true;
    while (!bAncestorIsCommon && !aAncestorIsCommon) {
      if (continueA) {
        aFamily.push(aAncestor);
        aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
        continueA = aAncestor !== null;
        if (!aAncestorIsCommon && continueA) {
          aAncestor = nodeMap.current[aAncestor].parentId;
        }
      }
      if (continueB && !aAncestorIsCommon) {
        bFamily.push(bAncestor);
        bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
        continueB = bAncestor !== null;
        if (!bAncestorIsCommon && continueB) {
          bAncestor = nodeMap.current[bAncestor].parentId;
        }
      }
    }
    const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
    const ancestorFamily = getChildrenIds(commonAncestor);
    const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
    const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
    return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [nodeAId, nodeBId] : [nodeBId, nodeAId];
  };
  const getNodesInRange = (nodeA, nodeB) => {
    const [first, last] = findOrderInTremauxTree(nodeA, nodeB);
    const nodes = [first];
    let current = first;
    while (current !== last) {
      current = getNextNode(current);
      nodes.push(current);
    }
    return nodes;
  };
  const focus = (event, id) => {
    if (id) {
      setFocusedNodeId(id);
      if (onNodeFocus) {
        onNodeFocus(event, id);
      }
    }
  };
  const focusNextNode = (event, id) => focus(event, getNextNode(id));
  const focusPreviousNode = (event, id) => focus(event, getPreviousNode(id));
  const focusFirstNode = (event) => focus(event, getFirstNode());
  const focusLastNode = (event) => focus(event, getLastNode());
  const focusByFirstCharacter = (event, id, char) => {
    let start;
    let index;
    const lowercaseChar = char.toLowerCase();
    const firstCharIds = [];
    const firstChars = [];
    Object.keys(firstCharMap.current).forEach((nodeId) => {
      const firstChar = firstCharMap.current[nodeId];
      const map = nodeMap.current[nodeId];
      const visible = map.parentId ? isExpanded(map.parentId) : true;
      const shouldBeSkipped = disabledItemsFocusable ? false : isDisabled(nodeId);
      if (visible && !shouldBeSkipped) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    });
    start = firstCharIds.indexOf(id) + 1;
    if (start >= firstCharIds.length) {
      start = 0;
    }
    index = findNextFirstChar(firstChars, start, lowercaseChar);
    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    }
    if (index > -1) {
      focus(event, firstCharIds[index]);
    }
  };
  const toggleExpansion = (event, value = focusedNodeId) => {
    let newExpanded;
    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter((id) => id !== value);
    } else {
      newExpanded = [value].concat(expanded);
    }
    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }
    setExpandedState(newExpanded);
  };
  const expandAllSiblings = (event, id) => {
    const map = nodeMap.current[id];
    const siblings = getChildrenIds(map.parentId);
    const diff = siblings.filter((child) => isExpandable(child) && !isExpanded(child));
    const newExpanded = expanded.concat(diff);
    if (diff.length > 0) {
      setExpandedState(newExpanded);
      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  const lastSelectedNode = React111.useRef(null);
  const lastSelectionWasRange = React111.useRef(false);
  const currentRangeSelection = React111.useRef([]);
  const handleRangeArrowSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      next,
      current
    } = nodes;
    if (!next || !current) {
      return;
    }
    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }
    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter((id) => id === start || id !== current);
        currentRangeSelection.current = currentRangeSelection.current.filter((id) => id === start || id !== current);
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }
    if (onNodeSelect) {
      onNodeSelect(event, base);
    }
    setSelectedState(base);
  };
  const handleRangeSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      end
    } = nodes;
    if (lastSelectionWasRange.current) {
      base = base.filter((id) => currentRangeSelection.current.indexOf(id) === -1);
    }
    let range = getNodesInRange(start, end);
    range = range.filter((node) => !isDisabled(node));
    currentRangeSelection.current = range;
    let newSelected = base.concat(range);
    newSelected = newSelected.filter((id, i) => newSelected.indexOf(id) === i);
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleMultipleSelect = (event, value) => {
    let newSelected;
    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter((id) => id !== value);
    } else {
      newSelected = [value].concat(selected);
    }
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleSingleSelect = (event, value) => {
    const newSelected = multiSelect ? [value] : value;
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const selectNode = (event, id, multiple = false) => {
    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }
      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }
    return false;
  };
  const selectRange = (event, nodes, stacked = false) => {
    const {
      start = lastSelectedNode.current,
      end,
      current
    } = nodes;
    if (stacked) {
      handleRangeArrowSelect(event, {
        start,
        next: end,
        current
      });
    } else if (start != null && end != null) {
      handleRangeSelect(event, {
        start,
        end
      });
    }
    lastSelectionWasRange.current = true;
  };
  const rangeSelectToFirst = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getFirstNode()
    });
  };
  const rangeSelectToLast = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getLastNode()
    });
  };
  const selectNextNode = (event, id) => {
    if (!isDisabled(getNextNode(id))) {
      selectRange(event, {
        end: getNextNode(id),
        current: id
      }, true);
    }
  };
  const selectPreviousNode = (event, id) => {
    if (!isDisabled(getPreviousNode(id))) {
      selectRange(event, {
        end: getPreviousNode(id),
        current: id
      }, true);
    }
  };
  const selectAllNodes = (event) => {
    selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  const registerNode = React111.useCallback((node) => {
    const {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    } = node;
    nodeMap.current[id] = {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    };
  }, []);
  const unregisterNode = React111.useCallback((id) => {
    const newMap = _extends({}, nodeMap.current);
    delete newMap[id];
    nodeMap.current = newMap;
    setFocusedNodeId((oldFocusedNodeId) => {
      if (oldFocusedNodeId === id && treeRef.current === ownerDocument_default(treeRef.current).activeElement) {
        return getChildrenIds(null)[0];
      }
      return oldFocusedNodeId;
    });
  }, []);
  const mapFirstChar = React111.useCallback((id, firstChar) => {
    firstCharMap.current[id] = firstChar;
  }, []);
  const unMapFirstChar = React111.useCallback((id) => {
    const newMap = _extends({}, firstCharMap.current);
    delete newMap[id];
    firstCharMap.current = newMap;
  }, []);
  const handleNextArrow = (event) => {
    if (isExpandable(focusedNodeId)) {
      if (isExpanded(focusedNodeId)) {
        focusNextNode(event, focusedNodeId);
      } else if (!isDisabled(focusedNodeId)) {
        toggleExpansion(event);
      }
    }
    return true;
  };
  const handlePreviousArrow = (event) => {
    if (isExpanded(focusedNodeId) && !isDisabled(focusedNodeId)) {
      toggleExpansion(event, focusedNodeId);
      return true;
    }
    const parent = getParent(focusedNodeId);
    if (parent) {
      focus(event, parent);
      return true;
    }
    return false;
  };
  const handleKeyDown2 = (event) => {
    let flag = false;
    const key = event.key;
    if (event.altKey || event.currentTarget !== event.target || !focusedNodeId) {
      return;
    }
    const ctrlPressed = event.ctrlKey || event.metaKey;
    switch (key) {
      case " ":
        if (!disableSelection && !isDisabled(focusedNodeId)) {
          if (multiSelect && event.shiftKey) {
            selectRange(event, {
              end: focusedNodeId
            });
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case "Enter":
        if (!isDisabled(focusedNodeId)) {
          if (isExpandable(focusedNodeId)) {
            toggleExpansion(event);
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case "ArrowDown":
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectNextNode(event, focusedNodeId);
        }
        focusNextNode(event, focusedNodeId);
        flag = true;
        break;
      case "ArrowUp":
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectPreviousNode(event, focusedNodeId);
        }
        focusPreviousNode(event, focusedNodeId);
        flag = true;
        break;
      case "ArrowRight":
        if (isRtl) {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }
        break;
      case "ArrowLeft":
        if (isRtl) {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }
        break;
      case "Home":
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToFirst(event, focusedNodeId);
        }
        focusFirstNode(event);
        flag = true;
        break;
      case "End":
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToLast(event, focusedNodeId);
        }
        focusLastNode(event);
        flag = true;
        break;
      default:
        if (key === "*") {
          expandAllSiblings(event, focusedNodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === "a" && !disableSelection) {
          selectAllNodes(event);
          flag = true;
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(event, focusedNodeId, key);
          flag = true;
        }
    }
    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleFocus = (event) => {
    if (event.target === event.currentTarget) {
      const firstSelected = Array.isArray(selected) ? selected[0] : selected;
      focus(event, firstSelected || getNavigableChildrenIds(null)[0]);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur2 = (event) => {
    setFocusedNodeId(null);
    if (onBlur) {
      onBlur(event);
    }
  };
  const activeDescendant = nodeMap.current[focusedNodeId] ? nodeMap.current[focusedNodeId].idAttribute : null;
  return (0, import_jsx_runtime72.jsx)(TreeViewContext_default.Provider, {
    // TODO: fix this lint error
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value: {
      icons: {
        defaultCollapseIcon,
        defaultExpandIcon,
        defaultParentIcon,
        defaultEndIcon
      },
      focus,
      toggleExpansion,
      isExpanded,
      isExpandable,
      isFocused,
      isSelected,
      isDisabled,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      multiSelect,
      disabledItemsFocusable,
      mapFirstChar,
      unMapFirstChar,
      registerNode,
      unregisterNode,
      treeId
    },
    children: (0, import_jsx_runtime72.jsx)(DescendantProvider, {
      children: (0, import_jsx_runtime72.jsx)(TreeViewRoot, _extends({
        role: "tree",
        id: treeId,
        "aria-activedescendant": activeDescendant,
        "aria-multiselectable": multiSelect,
        className: clsx_m_default(classes.root, className),
        ref: handleRef,
        tabIndex: 0,
        onKeyDown: handleKeyDown2,
        onFocus: handleFocus,
        onBlur: handleBlur2,
        ownerState
      }, other, {
        children
      }))
    })
  });
});
true ? TreeView.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types39.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types39.default.object,
  /**
   * @ignore
   */
  className: import_prop_types39.default.string,
  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon: import_prop_types39.default.node,
  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon: import_prop_types39.default.node,
  /**
   * Expanded node ids. (Uncontrolled)
   * @default []
   */
  defaultExpanded: import_prop_types39.default.arrayOf(import_prop_types39.default.string),
  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon: import_prop_types39.default.node,
  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon: import_prop_types39.default.node,
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   * @default []
   */
  defaultSelected: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.string), import_prop_types39.default.string]),
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types39.default.bool,
  /**
   * If `true` selection is disabled.
   * @default false
   */
  disableSelection: import_prop_types39.default.bool,
  /**
   * Expanded node ids. (Controlled)
   */
  expanded: import_prop_types39.default.arrayOf(import_prop_types39.default.string),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types39.default.string,
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect: import_prop_types39.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types39.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types39.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types39.default.func,
  /**
   * Callback fired when tree items are focused.
   *
   * @param {React.SyntheticEvent} event The event source of the callback **Warning**: This is a generic event not a focus event.
   * @param {string} value of the focused node.
   */
  onNodeFocus: import_prop_types39.default.func,
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {React.SyntheticEvent} event The event source of the callback
   * @param {string[] | string} nodeIds Ids of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect: import_prop_types39.default.func,
  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle: import_prop_types39.default.func,
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.string), import_prop_types39.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object])
} : void 0;
var TreeView_default = TreeView;

// node_modules/@mui/lab/YearPicker/YearPicker.js
var warnedOnce37 = false;
var warn24 = () => {
  if (!warnedOnce37) {
    console.warn(["MUI: The YearPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { YearPicker } from '@mui/x-date-pickers'`", "or `import { YearPicker } from '@mui/x-date-pickers/YearPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce37 = true;
  }
};
var YearPicker = function DeprecatedYearPicker() {
  warn24();
  return null;
};
var YearPicker_default = YearPicker;
var yearPickerClasses = {};
var getYearPickerUtilityClass = (slot) => {
  warn24();
  return "";
};

// node_modules/@mui/lab/Masonry/Masonry.js
init_objectWithoutPropertiesLoose();
init_extends();
var ReactDOM3 = __toESM(require_react_dom());
init_esm2();
init_esm();
init_clsx_m();
var import_prop_types40 = __toESM(require_prop_types());
var React112 = __toESM(require_react());

// node_modules/@mui/lab/Masonry/masonryClasses.js
init_generateUtilityClass();
function getMasonryUtilityClass(slot) {
  return generateUtilityClass("MuiMasonry", slot);
}
var masonryClasses = generateUtilityClasses("MuiMasonry", ["root"]);
var masonryClasses_default = masonryClasses;

// node_modules/@mui/lab/Masonry/Masonry.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var _excluded38 = ["children", "className", "component", "columns", "spacing", "defaultColumns", "defaultHeight", "defaultSpacing"];
var parseToNumber = (val) => {
  return Number(val.replace("px", ""));
};
var lineBreakStyle = {
  flexBasis: "100%",
  width: 0,
  margin: 0,
  padding: 0
};
var useUtilityClasses31 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMasonryUtilityClass, classes);
};
var getStyle = ({
  ownerState,
  theme
}) => {
  let styles2 = {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "flex-start",
    boxSizing: "border-box",
    "& > *": {
      boxSizing: "border-box"
    }
  };
  const stylesSSR = {};
  if (ownerState.isSSR) {
    const orderStyleSSR = {};
    const defaultSpacing = parseToNumber(theme.spacing(ownerState.defaultSpacing));
    for (let i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i % ownerState.defaultColumns})`] = {
        order: i
      };
    }
    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR["& > *"] = _extends({}, styles2["& > *"], orderStyleSSR, {
      margin: defaultSpacing / 2,
      width: `calc(${(100 / ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`
    });
    return _extends({}, styles2, stylesSSR);
  }
  const spacingValues = resolveBreakpointValues({
    values: ownerState.spacing,
    breakpoints: theme.breakpoints.values
  });
  const transformer = createUnarySpacing(theme);
  const spacingStyleFromPropValue = (propValue) => {
    let spacing;
    if (typeof propValue === "string" && !Number.isNaN(Number(propValue)) || typeof propValue === "number") {
      const themeSpacingValue = Number(propValue);
      spacing = getValue(transformer, themeSpacingValue);
    } else {
      spacing = propValue;
    }
    return _extends({
      margin: `calc(0px - (${spacing} / 2))`,
      "& > *": {
        margin: `calc(${spacing} / 2)`
      }
    }, ownerState.maxColumnHeight && {
      height: typeof spacing === "number" ? Math.ceil(ownerState.maxColumnHeight + parseToNumber(spacing)) : `calc(${ownerState.maxColumnHeight}px + ${spacing})`
    });
  };
  styles2 = deepmerge(styles2, handleBreakpoints({
    theme
  }, spacingValues, spacingStyleFromPropValue));
  const columnValues = resolveBreakpointValues({
    values: ownerState.columns,
    breakpoints: theme.breakpoints.values
  });
  const columnStyleFromPropValue = (propValue) => {
    const columnValue = Number(propValue);
    const width = `${(100 / columnValue).toFixed(2)}%`;
    const spacing = typeof spacingValues === "string" && !Number.isNaN(Number(spacingValues)) || typeof spacingValues === "number" ? getValue(transformer, Number(spacingValues)) : "0px";
    return {
      "& > *": {
        width: `calc(${width} - ${spacing})`
      }
    };
  };
  styles2 = deepmerge(styles2, handleBreakpoints({
    theme
  }, columnValues, columnStyleFromPropValue));
  if (typeof spacingValues === "object") {
    styles2 = deepmerge(styles2, handleBreakpoints({
      theme
    }, spacingValues, (propValue, breakpoint) => {
      if (breakpoint) {
        const themeSpacingValue = Number(propValue);
        const lastBreakpoint = Object.keys(columnValues).pop();
        const spacing = getValue(transformer, themeSpacingValue);
        const column = typeof columnValues === "object" ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        const width = `${(100 / column).toFixed(2)}%`;
        return {
          "& > *": {
            width: `calc(${width} - ${spacing})`
          }
        };
      }
      return null;
    }));
  }
  return styles2;
};
var MasonryRoot = styled_default("div", {
  name: "MuiMasonry",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    return [styles2.root];
  }
})(getStyle);
var Masonry = React112.forwardRef(function Masonry2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMasonry"
  });
  const {
    children,
    className,
    component = "div",
    columns = 4,
    spacing = 1,
    defaultColumns,
    defaultHeight,
    defaultSpacing
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const masonryRef = React112.useRef();
  const [maxColumnHeight, setMaxColumnHeight] = React112.useState();
  const isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== void 0 && defaultSpacing !== void 0;
  const [numberOfLineBreaks, setNumberOfLineBreaks] = React112.useState(isSSR ? defaultColumns - 1 : 0);
  const ownerState = _extends({}, props, {
    spacing,
    columns,
    maxColumnHeight,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    isSSR
  });
  const classes = useUtilityClasses31(ownerState);
  const handleResize = (masonryChildren) => {
    if (!masonryRef.current || !masonryChildren || masonryChildren.length === 0) {
      return;
    }
    const masonry = masonryRef.current;
    const masonryFirstChild = masonryRef.current.firstChild;
    const parentWidth = masonry.clientWidth;
    const firstChildWidth = masonryFirstChild.clientWidth;
    if (parentWidth === 0 || firstChildWidth === 0) {
      return;
    }
    const firstChildComputedStyle = window.getComputedStyle(masonryFirstChild);
    const firstChildMarginLeft = parseToNumber(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseToNumber(firstChildComputedStyle.marginRight);
    const currentNumberOfColumns = Math.round(parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight));
    const columnHeights = new Array(currentNumberOfColumns).fill(0);
    let skip = false;
    masonry.childNodes.forEach((child) => {
      if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === "line-break" || skip) {
        return;
      }
      const childComputedStyle = window.getComputedStyle(child);
      const childMarginTop = parseToNumber(childComputedStyle.marginTop);
      const childMarginBottom = parseToNumber(childComputedStyle.marginBottom);
      const childHeight = parseToNumber(childComputedStyle.height) ? Math.ceil(parseToNumber(childComputedStyle.height)) + childMarginTop + childMarginBottom : 0;
      if (childHeight === 0) {
        skip = true;
        return;
      }
      for (let i = 0; i < child.childNodes.length; i += 1) {
        const nestedChild = child.childNodes[i];
        if (nestedChild.tagName === "IMG" && nestedChild.clientHeight === 0) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        columnHeights[currentMinColumnIndex] += childHeight;
        const order = currentMinColumnIndex + 1;
        child.style.order = order;
      }
    });
    if (!skip) {
      ReactDOM3.flushSync(() => {
        setMaxColumnHeight(Math.max(...columnHeights));
        setNumberOfLineBreaks(currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0);
      });
    }
  };
  const observer = React112.useRef(typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(handleResize));
  React112.useEffect(() => {
    const resizeObserver = observer.current;
    if (resizeObserver === void 0) {
      return void 0;
    }
    if (masonryRef.current) {
      masonryRef.current.childNodes.forEach((childNode) => {
        resizeObserver.observe(childNode);
      });
    }
    return () => resizeObserver ? resizeObserver.disconnect() : {};
  }, [columns, spacing, children]);
  const handleRef = useForkRef(ref, masonryRef);
  const lineBreaks = new Array(numberOfLineBreaks).fill("").map((_, index) => (0, import_jsx_runtime73.jsx)("span", {
    "data-class": "line-break",
    style: _extends({}, lineBreakStyle, {
      order: index + 1
    })
  }, index));
  return (0, import_jsx_runtime74.jsxs)(MasonryRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, className),
    ref: handleRef,
    ownerState
  }, other, {
    children: [children, lineBreaks]
  }));
});
true ? Masonry.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types40.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types40.default.object,
  /**
   * @ignore
   */
  className: import_prop_types40.default.string,
  /**
   * Number of columns.
   * @default 4
   */
  columns: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string])), import_prop_types40.default.number, import_prop_types40.default.object, import_prop_types40.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types40.default.elementType,
  /**
   * The default number of columns of the component. This is provided for server-side rendering.
   */
  defaultColumns: import_prop_types40.default.number,
  /**
   * The default height of the component in px. This is provided for server-side rendering.
   */
  defaultHeight: import_prop_types40.default.number,
  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing. This is provided for server-side rendering.
   */
  defaultSpacing: import_prop_types40.default.number,
  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   * @default 1
   */
  spacing: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.string])), import_prop_types40.default.number, import_prop_types40.default.object, import_prop_types40.default.string]),
  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object, import_prop_types40.default.bool])), import_prop_types40.default.func, import_prop_types40.default.object])
} : void 0;
var Masonry_default = Masonry;
export {
  Alert_default2 as Alert,
  AlertTitle_default2 as AlertTitle,
  Autocomplete_default2 as Autocomplete,
  AvatarGroup_default2 as AvatarGroup,
  CalendarPicker_default as CalendarPicker,
  CalendarPickerSkeleton_default as CalendarPickerSkeleton,
  ClockPicker_default as ClockPicker,
  DatePicker_default as DatePicker,
  DateRangePicker_default as DateRangePicker,
  DateRangePickerDay_default as DateRangePickerDay,
  DateTimePicker_default as DateTimePicker,
  DesktopDatePicker_default as DesktopDatePicker,
  DesktopDateRangePicker_default as DesktopDateRangePicker,
  DesktopDateTimePicker_default as DesktopDateTimePicker,
  DesktopTimePicker_default as DesktopTimePicker,
  LoadingButton_default as LoadingButton,
  LocalizationProvider_default as LocalizationProvider,
  Masonry_default as Masonry,
  MobileDatePicker_default as MobileDatePicker,
  MobileDateRangePicker_default as MobileDateRangePicker,
  MobileDateTimePicker_default as MobileDateTimePicker,
  MobileTimePicker_default as MobileTimePicker,
  MonthPicker_default as MonthPicker,
  Pagination_default2 as Pagination,
  PaginationItem_default2 as PaginationItem,
  PickersDay_default as PickersDay,
  Rating_default2 as Rating,
  Skeleton_default2 as Skeleton,
  SpeedDial_default2 as SpeedDial,
  SpeedDialAction_default2 as SpeedDialAction,
  SpeedDialIcon_default2 as SpeedDialIcon,
  StaticDatePicker_default as StaticDatePicker,
  StaticDateRangePicker_default as StaticDateRangePicker,
  StaticDateTimePicker_default as StaticDateTimePicker,
  StaticTimePicker_default as StaticTimePicker,
  TabContext,
  TabList_default as TabList,
  TabPanel_default2 as TabPanel,
  TimePicker_default as TimePicker,
  Timeline_default as Timeline,
  TimelineConnector_default as TimelineConnector,
  TimelineContent_default as TimelineContent,
  TimelineDot_default as TimelineDot,
  TimelineItem_default as TimelineItem,
  TimelineOppositeContent_default as TimelineOppositeContent,
  TimelineSeparator_default as TimelineSeparator,
  ToggleButton_default2 as ToggleButton,
  ToggleButtonGroup_default2 as ToggleButtonGroup,
  TreeItem_default as TreeItem,
  TreeView_default as TreeView,
  YearPicker_default as YearPicker,
  calendarPickerClasses,
  calendarPickerSkeletonClasses,
  clockPickerClasses,
  getCalendarPickerSkeletonUtilityClass,
  getDateRangePickerDayUtilityClass,
  getLoadingButtonUtilityClass,
  getMasonryUtilityClass,
  getMonthPickerUtilityClass,
  getPanelId,
  getPickersDayUtilityClass,
  getTabId,
  getTabPanelUtilityClass2 as getTabPanelUtilityClass,
  getTimelineConnectorUtilityClass,
  getTimelineContentUtilityClass,
  getTimelineDotUtilityClass,
  getTimelineItemUtilityClass,
  getTimelineOppositeContentUtilityClass,
  getTimelineSeparatorUtilityClass,
  getTimelineUtilityClass,
  getTreeItemUtilityClass,
  getTreeViewUtilityClass,
  getYearPickerUtilityClass,
  loadingButtonClasses_default as loadingButtonClasses,
  masonryClasses_default as masonryClasses,
  monthPickerClasses,
  pickersDayClasses,
  tabPanelClasses_default2 as tabPanelClasses,
  timelineClasses_default as timelineClasses,
  timelineConnectorClasses_default as timelineConnectorClasses,
  timelineContentClasses_default as timelineContentClasses,
  timelineDotClasses_default as timelineDotClasses,
  timelineItemClasses_default as timelineItemClasses,
  timelineOppositeContentClasses_default as timelineOppositeContentClasses,
  timelineSeparatorClasses_default as timelineSeparatorClasses,
  treeItemClasses_default as treeItemClasses,
  treeViewClasses_default as treeViewClasses,
  useAutocomplete,
  usePagination,
  useTabContext,
  useTreeItem,
  yearPickerClasses
};
/*! Bundled license information:

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-alpha.128
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/lab/index.js:
  (**
   * @mui/lab v5.0.0-alpha.129
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_lab.js.map
