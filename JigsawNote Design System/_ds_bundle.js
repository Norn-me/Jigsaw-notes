/* @ds-bundle: {"format":4,"namespace":"JigsawNoteDesignSystem_94fd87","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/actions/ButtonGroup.jsx"},{"name":"Link","sourcePath":"components/actions/Link.jsx"},{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"CardBody","sourcePath":"components/data-display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/data-display/Card.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Code","sourcePath":"components/data-display/Code.jsx"},{"name":"Divider","sourcePath":"components/data-display/Divider.jsx"},{"name":"Kbd","sourcePath":"components/data-display/Kbd.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"User","sourcePath":"components/data-display/User.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastViewport","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"CheckboxGroup","sourcePath":"components/forms/CheckboxGroup.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"InputOTP","sourcePath":"components/forms/InputOTP.jsx"},{"name":"NumberInput","sourcePath":"components/forms/NumberInput.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Calendar","sourcePath":"components/media/Calendar.jsx"},{"name":"Carousel","sourcePath":"components/media/Carousel.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"1b66330b4362","components/actions/ButtonGroup.jsx":"9db915cdbd59","components/actions/Link.jsx":"4de704588f4b","components/data-display/Accordion.jsx":"18fbe1b916c5","components/data-display/Avatar.jsx":"b132a7704d65","components/data-display/Badge.jsx":"54f1deb2dddb","components/data-display/Card.jsx":"46acd2401c97","components/data-display/Chip.jsx":"ecfdbb955013","components/data-display/Code.jsx":"ea39cf4c8370","components/data-display/Divider.jsx":"cc33ae92fbf3","components/data-display/Kbd.jsx":"d6a46a714095","components/data-display/Table.jsx":"e2d39a8dafc8","components/data-display/User.jsx":"16683cd65cc5","components/feedback/Alert.jsx":"1f03e88f80de","components/feedback/Progress.jsx":"8b1fbeb79121","components/feedback/Spinner.jsx":"3f41b3b4d4b7","components/feedback/Toast.jsx":"474f79d08327","components/feedback/Tooltip.jsx":"58952019e79e","components/forms/Checkbox.jsx":"85ac543eb144","components/forms/CheckboxGroup.jsx":"41f4d08257a9","components/forms/Input.jsx":"a3a7661b7eb5","components/forms/InputOTP.jsx":"0d8908e743e4","components/forms/NumberInput.jsx":"984da3bfce9e","components/forms/Radio.jsx":"8a6f489abc61","components/forms/Select.jsx":"4a23c2db2abe","components/forms/Slider.jsx":"1e1dd7906967","components/forms/Switch.jsx":"ec06babf185a","components/icons/Icon.jsx":"e54f4da2c7aa","components/media/Calendar.jsx":"0e5a9ab52ef0","components/media/Carousel.jsx":"9b93b974f068","components/navigation/Tabs.jsx":"281924f06efc","ui_kits/app/CommandBar.jsx":"dcfca7f1beb1","ui_kits/app/Editor.jsx":"19b48ff961c1","ui_kits/app/NoteList.jsx":"931dc5d47356","ui_kits/app/Sidebar.jsx":"1e5d4bee8b52","ui_kits/app/data.js":"2016e1cbf4ab"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldShell","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.JigsawNoteDesignSystem_94fd87 = window.JigsawNoteDesignSystem_94fd87 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 32,
    minWidth: 64,
    px: 12,
    font: "var(--text-small)",
    gap: 8,
    radius: "var(--radius-small)",
    icon: 34
  },
  md: {
    height: 40,
    minWidth: 80,
    px: 16,
    font: "var(--text-small)",
    gap: 8,
    radius: "var(--radius-medium)",
    icon: 40
  },
  lg: {
    height: 48,
    minWidth: 96,
    px: 24,
    font: "var(--text-medium)",
    gap: 10,
    radius: "var(--radius-large)",
    icon: 48
  }
};
const RADII = {
  none: "var(--radius-none)",
  sm: "var(--radius-small)",
  md: "var(--radius-medium)",
  lg: "var(--radius-large)",
  full: "var(--radius-full)"
};
function variantStyle(variant, color) {
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const flat = `var(--color-${color}-flat)`;
  const soft = `var(--color-${color}-600)`;
  const textColor = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color})`;
  switch (variant) {
    case "bordered":
      return {
        background: "transparent",
        color: textColor,
        border: `var(--border-medium) solid ${c}`
      };
    case "light":
      return {
        background: "transparent",
        color: textColor,
        "--hoverBg": flat
      };
    case "flat":
      return {
        background: flat,
        color: color === "default" ? "var(--color-default-foreground)" : soft
      };
    case "faded":
      return {
        background: "var(--color-default-100)",
        color: "var(--color-default-foreground)",
        border: "var(--border-medium) solid var(--color-default-200)"
      };
    case "shadow":
      return {
        background: c,
        color: fg,
        boxShadow: color === "default" ? "var(--shadow-medium)" : `0 6px 18px color-mix(in srgb, ${c} 45%, transparent)`
      };
    case "ghost":
      return {
        background: "transparent",
        color: textColor,
        border: `var(--border-medium) solid ${c}`,
        "--hoverBg": c,
        "--hoverFg": fg
      };
    case "solid":
    default:
      return {
        background: c,
        color: fg
      };
  }
}
function Button({
  children,
  size = "md",
  variant = "solid",
  color = "default",
  radius,
  isIconOnly = false,
  isDisabled = false,
  isLoading = false,
  fullWidth = false,
  startContent,
  endContent,
  className = "",
  style = {},
  onClick,
  type = "button",
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const vs = variantStyle(variant, color);
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    fontSize: s.font,
    lineHeight: 1,
    whiteSpace: "nowrap",
    userSelect: "none",
    height: s.height,
    minWidth: isIconOnly ? s.height : s.minWidth,
    width: isIconOnly ? s.height : fullWidth ? "100%" : undefined,
    padding: isIconOnly ? 0 : `0 ${s.px}px`,
    borderRadius: radius ? RADII[radius] : s.radius,
    border: vs.border || "var(--border-medium) solid transparent",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? "var(--disabled-opacity)" : 1,
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), opacity var(--dur-base), box-shadow var(--dur-base)",
    transform: press && !isDisabled ? "scale(0.97)" : "scale(1)",
    ...vs
  };
  if (hover && !isDisabled) {
    if (vs["--hoverBg"]) {
      base.background = vs["--hoverBg"];
      if (vs["--hoverFg"]) base.color = vs["--hoverFg"];
    } else base.opacity = "var(--hover-opacity)";
  }
  delete base["--hoverBg"];
  delete base["--hoverFg"];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: `jn-button ${className}`,
    style: {
      ...base,
      ...style
    },
    disabled: isDisabled,
    onClick: isDisabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), isLoading && /*#__PURE__*/React.createElement(Spinner, {
    size: size
  }), !isLoading && startContent, children, !isLoading && endContent);
}
function Spinner({
  size
}) {
  const d = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "jn-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes jn-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/ButtonGroup.jsx
try { (() => {
/** Groups Buttons into a single attached row; children keep their color/variant
 *  but corners are flattened between them. */
function ButtonGroup({
  children,
  fullWidth = false,
  className = "",
  style = {}
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-button-group ${className}`,
    style: {
      display: "inline-flex",
      width: fullWidth ? "100%" : undefined,
      ...style
    }
  }, items.map((child, i) => {
    const first = i === 0,
      last = i === items.length - 1;
    const radius = {
      borderTopLeftRadius: first ? undefined : 0,
      borderBottomLeftRadius: first ? undefined : 0,
      borderTopRightRadius: last ? undefined : 0,
      borderBottomRightRadius: last ? undefined : 0,
      marginLeft: first ? 0 : -1
    };
    return React.cloneElement(child, {
      key: i,
      fullWidth: fullWidth || child.props.fullWidth,
      style: {
        ...radius,
        ...(child.props.style || {})
      }
    });
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/actions/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: "var(--text-small)",
  md: "var(--text-medium)",
  lg: "var(--text-large)"
};

/** Inline text link. Primary green by default; supports underline modes and block (button-like) rendering. */
function Link({
  children,
  href = "#",
  color = "primary",
  size = "md",
  underline = "hover",
  isBlock = false,
  isExternal = false,
  isDisabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const c = color === "foreground" ? "var(--color-foreground)" : `var(--color-${color})`;
  const showUnderline = underline === "always" || underline === "hover" && hover || underline === "active";
  const st = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "var(--font-sans)",
    fontSize: SIZE[size],
    fontWeight: "var(--fw-medium)",
    color: c,
    textDecoration: showUnderline ? "underline" : "none",
    textUnderlineOffset: 3,
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? "var(--disabled-opacity)" : hover ? "var(--hover-opacity)" : 1,
    padding: isBlock ? "4px 8px" : 0,
    borderRadius: isBlock ? "var(--radius-small)" : 0,
    background: isBlock && hover ? `var(--color-${color === "foreground" ? "default" : color}-flat)` : "transparent",
    transition: "opacity var(--dur-base), background var(--dur-base)",
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: isDisabled ? undefined : href,
    className: `jn-link ${className}`,
    style: st,
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noreferrer noopener" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, isExternal && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M7 7h10v10"
  })));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Link.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Accordion.jsx
try { (() => {
/** Accordion — vertical list of expandable panels. Pass items=[{key,title,subtitle,content,startContent}]. */
function Accordion({
  items = [],
  defaultExpandedKeys = [],
  selectionMode = "single",
  variant = "light",
  isCompact = false,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultExpandedKeys));
  const toggle = k => {
    setOpen(prev => {
      const next = new Set(selectionMode === "single" ? [] : prev);
      if (prev.has(k)) next.delete(k);else next.add(k);
      return next;
    });
  };
  const wrap = {
    light: {},
    shadow: {
      background: "var(--color-content1)",
      borderRadius: "var(--radius-large)",
      boxShadow: "var(--shadow-medium)",
      padding: "0 16px"
    },
    bordered: {
      border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-large)",
      padding: "0 16px"
    },
    splitted: {}
  }[variant] || {};
  const splitted = variant === "splitted";
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-accordion ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: splitted ? 12 : 0,
      ...wrap,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(it.key);
    const pad = isCompact ? "12px 4px" : "16px 4px";
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: splitted ? {
        background: "var(--color-content1)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-large)",
        padding: "0 16px",
        boxShadow: "var(--shadow-small)"
      } : {}
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => !it.isDisabled && toggle(it.key),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: pad,
        background: "transparent",
        border: "none",
        cursor: it.isDisabled ? "not-allowed" : "pointer",
        opacity: it.isDisabled ? "var(--disabled-opacity)" : 1,
        borderTop: i === 0 || splitted ? "none" : "1px solid var(--color-divider)",
        textAlign: "left"
      }
    }, it.startContent, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-medium)",
        fontWeight: "var(--fw-medium)",
        color: "var(--color-foreground)"
      }
    }, it.title), it.subtitle && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-muted)"
      }
    }, it.subtitle)), /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--text-muted)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 16px",
        fontSize: "var(--text-small)",
        color: "var(--text-muted)",
        lineHeight: "var(--leading-medium)"
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: 32,
  md: 40,
  lg: 56
};
const RAD = {
  none: "0",
  sm: "var(--radius-small)",
  md: "var(--radius-medium)",
  lg: "var(--radius-large)",
  full: "9999px"
};
function initials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/** Avatar — image, initials, or icon fallback. Optional colored ring (isBordered). */
function Avatar({
  src,
  name,
  icon,
  size = "md",
  radius = "full",
  color = "default",
  isBordered = false,
  className = "",
  style = {},
  ...rest
}) {
  const [err, setErr] = React.useState(false);
  const d = SZ[size] || SZ.md;
  const showImg = src && !err;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jn-avatar ${className}`,
    style: {
      width: d,
      height: d,
      borderRadius: RAD[radius],
      flexShrink: 0,
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: showImg ? "transparent" : "var(--color-default-200)",
      color: color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-foreground)`,
      boxShadow: isBordered ? `0 0 0 2px var(--color-background), 0 0 0 4px var(--color-${color === "default" ? "default-400" : color})` : "none",
      fontFamily: "var(--font-sans)",
      fontSize: d * 0.4,
      fontWeight: "var(--fw-medium)",
      userSelect: "none",
      ...style
    }
  }, rest), showImg ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "",
    onError: () => setErr(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : name ? initials(name) : icon || /*#__PURE__*/React.createElement("svg", {
    width: d * 0.6,
    height: d * 0.6,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z"
  })));
}

/** Overlapping stack of avatars with an optional +N surplus chip. */
function AvatarGroup({
  children,
  max = 5,
  total,
  size = "md",
  className = "",
  style = {}
}) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = (total ?? items.length) - shown.length;
  const d = SZ[size] || SZ.md;
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-avatar-group ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -d * 0.3,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--color-background)"
    }
  }, React.cloneElement(c, {
    size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -d * 0.3,
      width: d,
      height: d,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--color-background)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-default-300)",
      color: "var(--color-default-foreground)",
      fontSize: d * 0.34,
      fontWeight: "var(--fw-medium)"
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** Badge — small count / status marker overlaid on a child (icon, avatar, button). */
function Badge({
  children,
  content,
  color = "primary",
  variant = "solid",
  size = "md",
  placement = "top-right",
  isDot = false,
  showOutline = true,
  isInvisible = false,
  className = "",
  style = {}
}) {
  const dim = size === "sm" ? 16 : size === "lg" ? 22 : 18;
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const pos = {
    "top-right": {
      top: 0,
      right: 0,
      transform: "translate(40%,-40%)"
    },
    "top-left": {
      top: 0,
      left: 0,
      transform: "translate(-40%,-40%)"
    },
    "bottom-right": {
      bottom: 0,
      right: 0,
      transform: "translate(40%,40%)"
    },
    "bottom-left": {
      bottom: 0,
      left: 0,
      transform: "translate(-40%,40%)"
    }
  }[placement];
  const badgeStyle = {
    position: "absolute",
    ...pos,
    zIndex: 2,
    minWidth: isDot ? 10 : dim,
    height: isDot ? 10 : dim,
    padding: isDot ? 0 : "0 5px",
    borderRadius: "var(--radius-full)",
    display: isInvisible ? "none" : "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "var(--text-tiny)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    background: variant === "flat" ? `var(--color-${color}-flat)` : c,
    color: variant === "flat" ? `var(--color-${color}-600)` : fg,
    border: showOutline ? "2px solid var(--color-background)" : "none"
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `jn-badge ${className}`,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: badgeStyle
  }, isDot ? null : content));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RAD = {
  none: "0",
  sm: "var(--radius-small)",
  md: "var(--radius-medium)",
  lg: "var(--radius-large)"
};
const SHA = {
  none: "none",
  sm: "var(--shadow-small)",
  md: "var(--shadow-medium)",
  lg: "var(--shadow-large)"
};

/** Surface container. Compose with CardHeader / CardBody / CardFooter. */
function Card({
  children,
  radius = "lg",
  shadow = "md",
  isPressable = false,
  isHoverable = false,
  isBlurred = false,
  className = "",
  style = {},
  onPress,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jn-card ${className}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => isPressable && setPress(true),
    onMouseUp: () => setPress(false),
    onClick: isPressable ? onPress : undefined,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      background: isBlurred ? "color-mix(in srgb, var(--color-content1) 70%, transparent)" : "var(--color-content1)",
      backdropFilter: isBlurred ? "blur(12px)" : undefined,
      color: "var(--color-content1-foreground)",
      border: "1px solid var(--color-divider)",
      borderRadius: RAD[radius],
      boxShadow: SHA[shadow],
      overflow: "hidden",
      cursor: isPressable ? "pointer" : "default",
      transform: press ? "scale(0.985)" : isHoverable && hover ? "translateY(-2px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-card-header ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 20px",
      ...style
    }
  }, children);
}
function CardBody({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-card-body ${className}`,
    style: {
      padding: "8px 20px 16px",
      flex: 1,
      ...style
    }
  }, children);
}
function CardFooter({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-card-footer ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 20px",
      borderTop: "1px solid var(--color-divider)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
const SZ = {
  sm: {
    h: 20,
    px: 8,
    font: "var(--text-tiny)",
    gap: 4
  },
  md: {
    h: 26,
    px: 10,
    font: "var(--text-small)",
    gap: 6
  },
  lg: {
    h: 32,
    px: 12,
    font: "var(--text-medium)",
    gap: 6
  }
};
function chipColors(variant, color) {
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const flat = `var(--color-${color}-flat)`;
  const text = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-600)`;
  switch (variant) {
    case "bordered":
      return {
        background: "transparent",
        color: color === "default" ? "var(--color-default-foreground)" : c,
        border: `var(--border-medium) solid ${c}`
      };
    case "flat":
      return {
        background: flat,
        color: text,
        border: "var(--border-medium) solid transparent"
      };
    case "faded":
      return {
        background: "var(--color-default-100)",
        color: "var(--color-default-foreground)",
        border: "var(--border-medium) solid var(--color-default-300)"
      };
    case "light":
      return {
        background: "transparent",
        color: color === "default" ? "var(--color-default-foreground)" : c,
        border: "var(--border-medium) solid transparent"
      };
    case "dot":
      return {
        background: "transparent",
        color: "var(--color-foreground)",
        border: "var(--border-medium) solid var(--color-default-300)"
      };
    case "shadow":
      return {
        background: c,
        color: fg,
        boxShadow: `0 4px 12px color-mix(in srgb, ${c} 45%, transparent)`,
        border: "var(--border-medium) solid transparent"
      };
    default:
      return {
        background: c,
        color: fg,
        border: "var(--border-medium) solid transparent"
      };
  }
}

/** Chip / tag — compact status or filter pill. Supports 7 variants, close button, start/end content, dot. */
function Chip({
  children,
  variant = "solid",
  color = "default",
  size = "md",
  radius = "full",
  startContent,
  endContent,
  onClose,
  avatar,
  className = "",
  style = {}
}) {
  const s = SZ[size] || SZ.md;
  const cs = chipColors(variant, color);
  const rad = {
    none: "0",
    sm: "var(--radius-small)",
    md: "var(--radius-medium)",
    lg: "var(--radius-large)",
    full: "var(--radius-full)"
  }[radius];
  return /*#__PURE__*/React.createElement("span", {
    className: `jn-chip ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.h,
      padding: avatar ? `0 ${s.px}px 0 2px` : `0 ${s.px}px`,
      borderRadius: rad,
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--fw-medium)",
      whiteSpace: "nowrap",
      ...cs,
      ...style
    }
  }, variant === "dot" && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: `var(--color-${color})`
    }
  }), avatar, startContent, children, endContent, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      display: "inline-flex",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      marginLeft: 1,
      color: "currentColor",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Code.jsx
try { (() => {
const SZ = {
  sm: "var(--text-tiny)",
  md: "var(--text-small)",
  lg: "var(--text-medium)"
};

/** Inline code snippet with a soft tinted background and mono font. */
function Code({
  children,
  color = "default",
  size = "md",
  className = "",
  style = {}
}) {
  const flat = color === "default" ? "var(--color-default-flat)" : `var(--color-${color}-flat)`;
  const text = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-600)`;
  return /*#__PURE__*/React.createElement("code", {
    className: `jn-code ${className}`,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: SZ[size],
      background: flat,
      color: text,
      padding: "2px 7px",
      borderRadius: "var(--radius-small)",
      border: "1px solid color-mix(in srgb, currentColor 18%, transparent)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Code });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Code.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Divider.jsx
try { (() => {
/** Divider — thin separator line, horizontal (default) or vertical. */
function Divider({
  orientation = "horizontal",
  className = "",
  style = {}
}) {
  const v = orientation === "vertical";
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    className: `jn-divider ${className}`,
    style: {
      background: "var(--color-divider)",
      flexShrink: 0,
      border: "none",
      width: v ? 1 : "100%",
      height: v ? "100%" : 1,
      alignSelf: v ? "stretch" : undefined,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Kbd.jsx
try { (() => {
const NAMED = {
  command: "⌘",
  shift: "⇧",
  ctrl: "⌃",
  option: "⌥",
  alt: "⌥",
  enter: "↵",
  delete: "⌫",
  escape: "esc",
  tab: "⇥",
  capslock: "⇪",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
  space: "␣"
};

/** Keyboard key display. Pass named modifier keys plus a literal character. */
function Kbd({
  children,
  keys = [],
  className = "",
  style = {}
}) {
  const list = Array.isArray(keys) ? keys : [keys];
  return /*#__PURE__*/React.createElement("kbd", {
    className: `jn-kbd ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-tiny)",
      padding: "3px 7px",
      minHeight: 22,
      borderRadius: "var(--radius-small)",
      background: "var(--color-default-100)",
      color: "var(--color-default-foreground)",
      border: "1px solid var(--color-default-300)",
      boxShadow: "0 1px 0 var(--color-default-300)",
      ...style
    }
  }, list.map((k, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "1.05em"
    }
  }, NAMED[k] || k)), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
/** Data table. columns=[{key,label,align}], rows=[{key,...}]. Supports striping, selection, hover. */
function Table({
  columns = [],
  rows = [],
  selectionMode = "none",
  selectedKeys,
  onSelectionChange,
  isStriped = false,
  removeWrapper = false,
  color = "primary",
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(new Set());
  const sel = selectedKeys !== undefined ? selectedKeys : internal;
  const setSel = s => {
    if (selectedKeys === undefined) setInternal(s);
    onSelectionChange && onSelectionChange(s);
  };
  const toggle = k => {
    const n = new Set(sel);
    n.has(k) ? n.delete(k) : n.add(k);
    setSel(n);
  };
  const allChecked = rows.length > 0 && rows.every(r => sel.has(r.key));
  const toggleAll = () => setSel(allChecked ? new Set() : new Set(rows.map(r => r.key)));
  const showSel = selectionMode !== "none";
  const wrap = removeWrapper ? {} : {
    background: "var(--color-content1)",
    border: "1px solid var(--color-divider)",
    borderRadius: "var(--radius-large)",
    boxShadow: "var(--shadow-small)",
    overflow: "hidden"
  };
  const Check = ({
    on,
    onClick
  }) => /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? `var(--color-${color})` : "transparent",
      border: on ? `2px solid var(--color-${color})` : "2px solid var(--color-default-400)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: `var(--color-${color}-foreground)`,
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-table ${className}`,
    style: {
      ...wrap,
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--color-default-100)"
    }
  }, showSel && /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 16px",
      width: 40
    }
  }, /*#__PURE__*/React.createElement(Check, {
    on: allChecked,
    onClick: toggleAll
  })), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: "12px 16px",
      textAlign: c.align || "left",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-tiny)",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const on = sel.has(r.key);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.key,
      onClick: () => showSel && toggle(r.key),
      style: {
        background: on ? "var(--color-primary-flat)" : isStriped && i % 2 ? "var(--color-default-100)" : "transparent",
        cursor: showSel ? "pointer" : "default",
        transition: "background var(--dur-fast)"
      }
    }, showSel && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement(Check, {
      on: on,
      onClick: () => toggle(r.key)
    })), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: "12px 16px",
        textAlign: c.align || "left",
        color: "var(--color-foreground)",
        borderTop: "1px solid var(--color-divider)"
      }
    }, r[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/User.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Identity block — avatar plus name and secondary description line. */
function User({
  name,
  description,
  avatarProps = {},
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-user ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({}, avatarProps, {
    name: avatarProps.name || (typeof name === "string" ? name : undefined)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--fw-medium)",
      color: "var(--color-foreground)"
    }
  }, name), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { User });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/User.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ICONS = {
  primary: "info",
  secondary: "info",
  default: "info",
  success: "check",
  warning: "warn",
  danger: "error"
};
function Glyph({
  kind,
  color
}) {
  const stroke = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color})`;
  const p = {
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v5M12 8h.01"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.5 12 2.5 2.5 4.5-5"
    })),
    warn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    })),
    error: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 9l-6 6M9 9l6 6"
    }))
  }[ICONS[color]];
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: stroke,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p);
}

/** Alert — inline status banner. variant flat (default) / solid / bordered / faded. */
function Alert({
  title,
  description,
  children,
  color = "default",
  variant = "flat",
  icon,
  onClose,
  isClosable = false,
  className = "",
  style = {}
}) {
  const c = `var(--color-${color})`;
  let bg,
    text,
    border = "1px solid transparent";
  if (variant === "solid") {
    bg = c;
    text = `var(--color-${color}-foreground)`;
  } else if (variant === "bordered") {
    bg = "transparent";
    text = "var(--color-foreground)";
    border = `1px solid ${c}`;
  } else if (variant === "faded") {
    bg = "var(--color-content1)";
    text = "var(--color-foreground)";
    border = "1px solid var(--color-divider)";
  } else {
    bg = color === "default" ? "var(--color-default-flat)" : `var(--color-${color}-flat)`;
    text = "var(--color-foreground)";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-alert ${className}`,
    role: "alert",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 14px",
      borderRadius: "var(--radius-medium)",
      background: bg,
      color: text,
      border,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginTop: 1,
      color: variant === "solid" ? `var(--color-${color}-foreground)` : undefined
    }
  }, icon || /*#__PURE__*/React.createElement(Glyph, {
    kind: color,
    color: variant === "solid" ? "default" : color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--fw-semibold)"
    }
  }, title), (description || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      opacity: 0.85,
      marginTop: title ? 2 : 0
    }
  }, description || children)), isClosable && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "currentColor",
      opacity: 0.6,
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
const H = {
  sm: 6,
  md: 10,
  lg: 14
};

/** Progress bar. Determinate by value, or isIndeterminate for a sliding sweep. Striped optional. */
function Progress({
  value = 0,
  minValue = 0,
  maxValue = 100,
  label,
  showValueLabel = false,
  color = "primary",
  size = "md",
  radius = "full",
  isIndeterminate = false,
  isStriped = false,
  className = "",
  style = {}
}) {
  const pct = Math.min(100, Math.max(0, (value - minValue) / (maxValue - minValue) * 100));
  const h = H[size] || H.md;
  const rad = radius === "full" ? "var(--radius-full)" : radius === "none" ? "0" : "var(--radius-small)";
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-progress ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      ...style
    }
  }, (label || showValueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: rad,
      background: "var(--color-default-200)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: rad,
      background: `var(--color-${color})`,
      width: isIndeterminate ? "40%" : `${pct}%`,
      backgroundImage: isStriped ? "linear-gradient(45deg,rgba(255,255,255,.18) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.18) 50%,rgba(255,255,255,.18) 75%,transparent 75%)" : undefined,
      backgroundSize: isStriped ? "16px 16px" : undefined,
      animation: isIndeterminate ? "jn-prog 1.1s var(--ease-in-out) infinite" : undefined,
      transition: "width var(--dur-base) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-prog{0%{left:-40%;position:absolute}100%{left:100%;position:absolute}}`)));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
const D = {
  sm: 20,
  md: 28,
  lg: 38
};

/** Spinner — indeterminate loading indicator (dual-ring). */
function Spinner({
  label,
  color = "primary",
  size = "md",
  labelColor,
  className = "",
  style = {}
}) {
  const d = D[size] || D.md;
  const c = `var(--color-${color})`;
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-spinner ${className}`,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: d,
      height: d,
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: `3px solid var(--color-default-300)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "3px solid transparent",
      borderTopColor: c,
      animation: "jn-sp 0.7s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-sp{to{transform:rotate(360deg)}}`)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: labelColor ? `var(--color-${labelColor})` : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const GLYPH = {
  default: null,
  primary: "info",
  secondary: "info",
  success: "check",
  warning: "warn",
  danger: "error"
};

/** Toast — transient notification card. Render inside a ToastViewport (fixed corner stack). */
function Toast({
  title,
  description,
  color = "default",
  icon,
  onClose,
  className = "",
  style = {}
}) {
  const c = `var(--color-${color})`;
  const paths = {
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v5M12 8h.01"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.5 12 2.5 2.5 4.5-5"
    })),
    warn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    })),
    error: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 9l-6 6M9 9l6 6"
    }))
  }[GLYPH[color]];
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-toast ${className}`,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: "14px 16px",
      borderRadius: "var(--radius-large)",
      background: "var(--color-content1)",
      color: "var(--color-foreground)",
      border: "1px solid var(--color-divider)",
      boxShadow: "var(--shadow-large)",
      fontFamily: "var(--font-sans)",
      animation: "jn-toast-in .28s var(--ease-out)",
      ...style
    }
  }, paths && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginTop: 1,
      width: 34,
      height: 34,
      borderRadius: "var(--radius-medium)",
      alignItems: "center",
      justifyContent: "center",
      background: `var(--color-${color}-flat)`,
      color: c,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--fw-semibold)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-toast-in{from{opacity:0;transform:translateY(10px)}}`));
}

/** Fixed-position stack for Toasts. */
function ToastViewport({
  children,
  placement = "bottom-right"
}) {
  const p = {
    "bottom-right": {
      bottom: 20,
      right: 20
    },
    "bottom-left": {
      bottom: 20,
      left: 20
    },
    "top-right": {
      top: 20,
      right: 20
    },
    "top-left": {
      top: 20,
      left: 20
    }
  }[placement];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...p
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastViewport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — hover/focus popover anchored to its child. */
function Tooltip({
  children,
  content,
  placement = "top",
  color = "default",
  showArrow = true,
  delay = 100,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef();
  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  const bg = color === "default" ? "var(--color-content1)" : `var(--color-${color})`;
  const fg = color === "default" ? "var(--color-foreground)" : `var(--color-${color}-foreground)`;
  const border = color === "default" ? "1px solid var(--color-divider)" : "none";
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: 8
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 8
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: 8
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: 8
    }
  }[placement];
  const arrowPos = {
    top: {
      top: "100%",
      left: "50%",
      marginLeft: -4,
      marginTop: -4
    },
    bottom: {
      bottom: "100%",
      left: "50%",
      marginLeft: -4,
      marginBottom: -4
    },
    left: {
      left: "100%",
      top: "50%",
      marginTop: -4,
      marginLeft: -4
    },
    right: {
      right: "100%",
      top: "50%",
      marginTop: -4,
      marginRight: -4
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: `jn-tooltip ${className}`,
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      background: bg,
      color: fg,
      border,
      boxShadow: "var(--shadow-large)",
      padding: "6px 10px",
      borderRadius: "var(--radius-medium)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-tiny)",
      fontWeight: "var(--fw-medium)",
      animation: "jn-tt 0.14s var(--ease-out)",
      ...style
    }
  }, content, showArrow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...arrowPos,
      width: 8,
      height: 8,
      background: bg,
      borderRight: border,
      borderBottom: border,
      transform: "rotate(45deg)"
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-tt{from{opacity:0;transform:scale(.92) translateX(-50%)}}`)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const BOX = {
  sm: 16,
  md: 20,
  lg: 24
};
const RAD = {
  none: 0,
  sm: 4,
  md: 6,
  lg: 7,
  full: "50%"
};
function Checkbox({
  children,
  isSelected,
  defaultSelected = false,
  onValueChange,
  value,
  color = "primary",
  size = "md",
  radius = "sm",
  isDisabled = false,
  isIndeterminate = false,
  lineThrough = false,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultSelected);
  const checked = isSelected !== undefined ? isSelected : internal;
  const b = BOX[size] || BOX.md;
  const toggle = () => {
    if (isDisabled) return;
    const next = !checked;
    if (isSelected === undefined) setInternal(next);
    onValueChange && onValueChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `jn-checkbox ${className}`,
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: b,
      height: b,
      flexShrink: 0,
      borderRadius: RAD[radius],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked || isIndeterminate ? `var(--color-${color})` : "transparent",
      border: checked || isIndeterminate ? `2px solid var(--color-${color})` : "2px solid var(--color-default-400)",
      transition: "background var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
      transform: checked || isIndeterminate ? "scale(1)" : "scale(1)"
    }
  }, isIndeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: b * 0.5,
      height: 2,
      background: `var(--color-${color}-foreground)`,
      borderRadius: 2
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: b * 0.7,
    height: b * 0.7,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: `var(--color-${color}-foreground)`,
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), children && /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: lineThrough && checked ? "line-through" : "none",
      color: lineThrough && checked ? "var(--text-muted)" : "inherit"
    }
  }, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/CheckboxGroup.jsx
try { (() => {
/** Groups related checkboxes with a label, layout (vertical/horizontal) and optional description. */
function CheckboxGroup({
  children,
  label,
  description,
  orientation = "vertical",
  value,
  defaultValue = [],
  onChange,
  color = "primary",
  size = "md",
  isDisabled = false,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const setSel = (val, on) => {
    const next = on ? [...selected, val] : selected.filter(v => v !== val);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-checkbox-group ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: orientation === "horizontal" ? "row" : "column",
      flexWrap: "wrap",
      gap: orientation === "horizontal" ? 16 : 10
    }
  }, React.Children.map(children, child => {
    if (!child) return child;
    const v = child.props.value;
    return React.cloneElement(child, {
      color: child.props.color || color,
      size: child.props.size || size,
      isDisabled: isDisabled || child.props.isDisabled,
      isSelected: selected.includes(v),
      onValueChange: on => setSel(v, on)
    });
  })), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { CheckboxGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CheckboxGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 36,
    px: 10,
    font: "var(--text-small)",
    radius: "var(--radius-small)"
  },
  md: {
    h: 40,
    px: 12,
    font: "var(--text-small)",
    radius: "var(--radius-medium)"
  },
  lg: {
    h: 48,
    px: 14,
    font: "var(--text-medium)",
    radius: "var(--radius-large)"
  }
};
function fieldShell({
  variant,
  size,
  color,
  isInvalid,
  isDisabled,
  focused,
  hover
}) {
  const s = SIZES[size] || SIZES.md;
  const activeColor = isInvalid ? "var(--color-danger)" : `var(--color-${color})`;
  const base = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minHeight: s.h,
    padding: `0 ${s.px}px`,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    borderRadius: variant === "underlined" ? 0 : s.radius,
    transition: "background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)",
    opacity: isDisabled ? "var(--disabled-opacity)" : 1
  };
  if (variant === "bordered") {
    base.background = "transparent";
    base.border = `var(--border-medium) solid ${isInvalid ? "var(--color-danger)" : focused ? activeColor : hover ? "var(--color-default-400)" : "var(--color-default-300)"}`;
  } else if (variant === "underlined") {
    base.background = "transparent";
    base.borderBottom = `var(--border-medium) solid ${isInvalid ? "var(--color-danger)" : focused ? activeColor : "var(--color-default-300)"}`;
    base.borderRadius = 0;
  } else if (variant === "faded") {
    base.background = "var(--color-default-100)";
    base.border = `var(--border-medium) solid ${focused ? activeColor : "var(--color-default-200)"}`;
  } else {
    /* flat */
    base.background = hover || focused ? "var(--color-default-200)" : "var(--color-default-100)";
    base.border = "var(--border-medium) solid transparent";
    if (isInvalid) base.background = "var(--color-danger-flat)";
  }
  return base;
}
function Input({
  label,
  placeholder,
  description,
  errorMessage,
  value,
  defaultValue,
  onChange,
  type = "text",
  variant = "flat",
  color = "primary",
  size = "md",
  radius,
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  startContent,
  endContent,
  labelPlacement = "outside",
  className = "",
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const shell = fieldShell({
    variant,
    size,
    color,
    isInvalid,
    isDisabled,
    focused,
    hover
  });
  if (radius) shell.borderRadius = {
    none: "0",
    sm: "var(--radius-small)",
    md: "var(--radius-medium)",
    lg: "var(--radius-large)",
    full: "var(--radius-full)"
  }[radius];
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-input ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && labelPlacement !== "inside" && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-small)",
      color: isInvalid ? "var(--color-danger)" : "var(--color-foreground)",
      fontWeight: "var(--fw-medium)"
    }
  }, label, isRequired && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: shell,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, startContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, startContent), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    disabled: isDisabled,
    readOnly: isReadOnly,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: s.h - 4,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--color-foreground)",
      fontFamily: "inherit",
      fontSize: "inherit"
    }
  }, rest)), endContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, endContent)), (description || isInvalid && errorMessage) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: isInvalid ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, isInvalid && errorMessage ? errorMessage : description));
}
Object.assign(__ds_scope, { fieldShell, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputOTP.jsx
try { (() => {
const SZ = {
  sm: 40,
  md: 48,
  lg: 56
};

/** One-time-password field — a row of single-character cells with a caret on the active cell. */
function InputOTP({
  length = 4,
  value,
  defaultValue = "",
  onChange,
  variant = "bordered",
  color = "primary",
  size = "md",
  isPassword = false,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  const s = SZ[size] || SZ.md;
  const set = v => {
    const nv = v.slice(0, length);
    if (value === undefined) setInternal(nv);
    onChange && onChange(nv);
  };
  const activeIdx = Math.min(val.length, length - 1);
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-input-otp ${className}`,
    style: {
      display: "inline-flex",
      gap: 10,
      position: "relative",
      ...style
    },
    onClick: () => ref.current && ref.current.focus()
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    value: val,
    inputMode: "numeric",
    onChange: e => set(e.target.value.replace(/[^0-9]/g, "")),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: 1,
      height: 1
    }
  }), Array.from({
    length
  }).map((_, i) => {
    const filled = i < val.length;
    const isActive = focused && i === activeIdx;
    const char = filled ? isPassword ? "•" : val[i] : "";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: s,
        height: s,
        borderRadius: "var(--radius-medium)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--text-large)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--color-foreground)",
        background: variant === "flat" ? "var(--color-default-100)" : "transparent",
        border: `var(--border-medium) solid ${isActive ? `var(--color-${color})` : "var(--color-default-300)"}`,
        boxShadow: isActive ? `0 0 0 3px color-mix(in srgb, var(--color-${color}) 25%, transparent)` : "none",
        transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
      }
    }, char || isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        height: s * 0.4,
        background: `var(--color-${color})`,
        animation: "jn-otp-blink 1s steps(2) infinite"
      }
    }), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-otp-blink{50%{opacity:0}}`));
  }));
}
Object.assign(__ds_scope, { InputOTP });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputOTP.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberInput.jsx
try { (() => {
/** Numeric input with stepper buttons. */
function NumberInput({
  label,
  description,
  value,
  defaultValue = 0,
  onChange,
  min,
  max,
  step = 1,
  variant = "flat",
  color = "primary",
  size = "md",
  isDisabled = false,
  formatOptions,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [hover, setHover] = React.useState(false);
  const val = value !== undefined ? value : internal;
  const set = n => {
    let x = n;
    if (min !== undefined) x = Math.max(min, x);
    if (max !== undefined) x = Math.min(max, x);
    if (value === undefined) setInternal(x);
    onChange && onChange(x);
  };
  const shell = __ds_scope.fieldShell({
    variant,
    size,
    color,
    isInvalid: false,
    isDisabled,
    focused: false,
    hover
  });
  const btn = dir => /*#__PURE__*/React.createElement("button", {
    type: "button",
    tabIndex: -1,
    onClick: () => set(val + dir * step),
    disabled: isDisabled,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 18,
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, dir > 0 ? /*#__PURE__*/React.createElement("path", {
    d: "m6 15 6-6 6 6"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-number-input ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: shell,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    value: val,
    disabled: isDisabled,
    onChange: e => {
      const n = Number(e.target.value.replace(/[^0-9.-]/g, ""));
      if (!Number.isNaN(n)) set(n);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--color-foreground)",
      fontFamily: "inherit",
      fontSize: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, btn(1), btn(-1))), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { NumberInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const DOT = {
  sm: 16,
  md: 20,
  lg: 24
};
function Radio({
  children,
  value,
  isSelected,
  onSelect,
  description,
  color = "primary",
  size = "md",
  isDisabled = false,
  className = "",
  style = {}
}) {
  const d = DOT[size] || DOT.md;
  return /*#__PURE__*/React.createElement("label", {
    className: `jn-radio ${className}`,
    onClick: () => !isDisabled && onSelect && onSelect(value),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 8,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      flexShrink: 0,
      borderRadius: "50%",
      marginTop: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `2px solid ${isSelected ? `var(--color-${color})` : "var(--color-default-400)"}`,
      transition: "border-color var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d * 0.5,
      height: d * 0.5,
      borderRadius: "50%",
      background: `var(--color-${color})`,
      transform: isSelected ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  })), children && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", null, children), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description)));
}

/** Radio group — one selection across Radio children. */
function RadioGroup({
  children,
  label,
  description,
  orientation = "vertical",
  value,
  defaultValue,
  onChange,
  color = "primary",
  size = "md",
  isDisabled = false,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-radio-group ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: orientation === "horizontal" ? "row" : "column",
      flexWrap: "wrap",
      gap: orientation === "horizontal" ? 16 : 10
    }
  }, React.Children.map(children, child => child && React.cloneElement(child, {
    color: child.props.color || color,
    size: child.props.size || size,
    isDisabled: isDisabled || child.props.isDisabled,
    isSelected: selected === child.props.value,
    onSelect: select
  }))), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select / dropdown. Closed trigger matches Input's shell; opens a floating listbox. */
function Select({
  label,
  placeholder = "Select…",
  description,
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "flat",
  color = "primary",
  size = "md",
  isInvalid = false,
  isDisabled = false,
  startContent,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const [hover, setHover] = React.useState(false);
  const sel = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const shell = __ds_scope.fieldShell({
    variant,
    size,
    color,
    isInvalid,
    isDisabled,
    focused: open,
    hover
  });
  const current = items.find(i => (i.key ?? i.value) === sel);
  const choose = k => {
    if (value === undefined) setInternal(k);
    onChange && onChange(k);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-select ${className}`,
    ref: ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => !isDisabled && setOpen(!open),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...shell,
      cursor: isDisabled ? "not-allowed" : "pointer"
    }
  }, startContent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, startContent), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: current ? "var(--color-foreground)" : "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      zIndex: 30,
      background: "var(--color-content1)",
      border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-medium)",
      boxShadow: "var(--shadow-large)",
      padding: 6,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, items.map(it => {
    const k = it.key ?? it.value;
    const active = k === sel;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: () => choose(k),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "8px 10px",
        borderRadius: "var(--radius-small)",
        cursor: "pointer",
        fontSize: "var(--text-small)",
        color: "var(--color-foreground)",
        background: active ? "var(--color-primary-flat)" : "transparent"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--color-default-200)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), active && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--color-primary)",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })));
  })), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
const TRACK = {
  sm: 4,
  md: 6,
  lg: 8
};
const THUMB = {
  sm: 16,
  md: 20,
  lg: 24
};

/** Slider — single value. Green fill, draggable thumb, optional label & value display. */
function Slider({
  label,
  value,
  defaultValue = 0,
  onChange,
  minValue = 0,
  maxValue = 100,
  step = 1,
  color = "primary",
  size = "md",
  showValue = true,
  isDisabled = false,
  startContent,
  endContent,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  const pct = (val - minValue) / (maxValue - minValue) * 100;
  const t = TRACK[size] || TRACK.md,
    th = THUMB[size] || THUMB.md;
  const setFromClientX = clientX => {
    if (!ref.current || isDisabled) return;
    const r = ref.current.getBoundingClientRect();
    let p = (clientX - r.left) / r.width;
    p = Math.min(1, Math.max(0, p));
    let v = minValue + p * (maxValue - minValue);
    v = Math.round(v / step) * step;
    v = Math.min(maxValue, Math.max(minValue, v));
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const onDown = e => {
    if (isDisabled) return;
    setFromClientX(e.clientX);
    const move = ev => setFromClientX(ev.clientX);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-slider ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      opacity: isDisabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, val)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, startContent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, startContent), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseDown: onDown,
    style: {
      position: "relative",
      flex: 1,
      height: th,
      display: "flex",
      alignItems: "center",
      cursor: isDisabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: t,
      borderRadius: "var(--radius-full)",
      background: "var(--color-default-300)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: t,
      borderRadius: "var(--radius-full)",
      background: `var(--color-${color})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - ${th / 2}px)`,
      width: th,
      height: th,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-medium)",
      border: `2px solid var(--color-${color})`
    }
  })), endContent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, endContent)));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const DIM = {
  sm: {
    w: 36,
    h: 20,
    knob: 14
  },
  md: {
    w: 44,
    h: 24,
    knob: 18
  },
  lg: {
    w: 52,
    h: 28,
    knob: 22
  }
};
function Switch({
  children,
  isSelected,
  defaultSelected = false,
  onValueChange,
  color = "primary",
  size = "md",
  isDisabled = false,
  startContent,
  endContent,
  thumbIcon,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultSelected);
  const on = isSelected !== undefined ? isSelected : internal;
  const d = DIM[size] || DIM.md;
  const gap = (d.h - d.knob) / 2;
  const toggle = () => {
    if (isDisabled) return;
    const next = !on;
    if (isSelected === undefined) setInternal(next);
    onValueChange && onValueChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `jn-switch ${className}`,
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1,
      userSelect: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d.w,
      height: d.h,
      borderRadius: "var(--radius-full)",
      position: "relative",
      flexShrink: 0,
      background: on ? `var(--color-${color})` : "var(--color-default-300)",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: gap,
      left: on ? d.w - d.knob - gap : gap,
      width: d.knob,
      height: d.knob,
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: d.knob * 0.55,
      color: on ? `var(--color-${color})` : "var(--color-default-500)",
      boxShadow: "var(--shadow-small)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  }, thumbIcon || (on ? startContent : endContent))), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — wraps the Iconify web component. The source kit uses the Vuesax and Solar
 * icon families; reference any Iconify icon by full name, e.g. "solar:notebook-bold",
 * "solar:magnifer-linear", "vaadin:vuesax". Paints with currentColor.
 * Requires the iconify-icon script (loaded by cards / kits via CDN).
 */
function Icon({
  name,
  size = 20,
  color,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("iconify-icon", _extends({
    icon: name,
    width: size,
    height: size,
    class: `jn-icon ${className}`,
    style: {
      display: "inline-flex",
      color: color || "currentColor",
      verticalAlign: "middle",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/media/Calendar.jsx
try { (() => {
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Calendar — single-date month grid with prev/next navigation. */
function Calendar({
  value,
  defaultValue,
  onChange,
  color = "primary",
  className = "",
  style = {}
}) {
  const today = new Date();
  const initial = defaultValue ? new Date(defaultValue) : today;
  const [selected, setSelected] = React.useState(value ? new Date(value) : defaultValue ? new Date(defaultValue) : null);
  const [view, setView] = React.useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const sel = value ? new Date(value) : selected;
  const y = view.getFullYear(),
    m = view.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const pick = d => {
    const dt = new Date(y, m, d);
    if (value === undefined) setSelected(dt);
    onChange && onChange(dt);
  };
  const same = (d, ref) => ref && ref.getFullYear() === y && ref.getMonth() === m && ref.getDate() === d;
  const nav = dir => setView(new Date(y, m + dir, 1));
  const NavBtn = ({
    dir,
    children
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(dir),
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--radius-medium)",
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-default-200)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-calendar ${className}`,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 8,
      padding: 14,
      width: 280,
      background: "var(--color-content1)",
      border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-large)",
      boxShadow: "var(--shadow-medium)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(NavBtn, {
    dir: -1
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--color-foreground)"
    }
  }, MONTHS[m], " ", y), /*#__PURE__*/React.createElement(NavBtn, {
    dir: 1
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 2
    }
  }, DOW.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      fontSize: "var(--text-tiny)",
      color: "var(--text-subtle)",
      padding: "4px 0"
    }
  }, d)), cells.map((d, i) => {
    if (d === null) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const isSel = same(d, sel);
    const isToday = same(d, today);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => pick(d),
      style: {
        height: 32,
        borderRadius: "var(--radius-medium)",
        border: "none",
        cursor: "pointer",
        fontSize: "var(--text-small)",
        fontFamily: "inherit",
        background: isSel ? `var(--color-${color})` : "transparent",
        color: isSel ? `var(--color-${color}-foreground)` : "var(--color-foreground)",
        fontWeight: isSel || isToday ? "var(--fw-semibold)" : "var(--fw-regular)",
        outline: isToday && !isSel ? `1px solid var(--color-${color})` : "none",
        transition: "background var(--dur-fast)"
      },
      onMouseEnter: e => {
        if (!isSel) e.currentTarget.style.background = "var(--color-default-200)";
      },
      onMouseLeave: e => {
        if (!isSel) e.currentTarget.style.background = "transparent";
      }
    }, d);
  })));
}
Object.assign(__ds_scope, { Calendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Calendar.jsx", error: String((e && e.message) || e) }); }

// components/media/Carousel.jsx
try { (() => {
/** Carousel — horizontal slide viewer with arrows and dot indicators. slides=[ReactNode]. */
function Carousel({
  slides = [],
  defaultIndex = 0,
  autoPlay = false,
  interval = 4000,
  showArrows = true,
  showIndicators = true,
  radius = "lg",
  className = "",
  style = {}
}) {
  const [idx, setIdx] = React.useState(defaultIndex);
  const n = slides.length;
  const go = i => setIdx((i + n) % n);
  React.useEffect(() => {
    if (!autoPlay || n < 2) return;
    const t = setInterval(() => setIdx(p => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, n]);
  const rad = {
    none: "0",
    sm: "var(--radius-small)",
    md: "var(--radius-medium)",
    lg: "var(--radius-large)"
  }[radius];
  const Arrow = ({
    dir,
    children
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => go(idx + dir),
    style: {
      position: "absolute",
      top: "50%",
      [dir < 0 ? "left" : "right"]: 10,
      transform: "translateY(-50%)",
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      zIndex: 3,
      background: "color-mix(in srgb, var(--color-content1) 80%, transparent)",
      backdropFilter: "blur(6px)",
      color: "var(--color-foreground)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-medium)"
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-carousel ${className}`,
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: rad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      transform: `translateX(-${idx * 100}%)`,
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 100%",
      minWidth: 0
    }
  }, s))), showArrows && n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Arrow, {
    dir: -1
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), /*#__PURE__*/React.createElement(Arrow, {
    dir: 1
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })))), showIndicators && n > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      gap: 6,
      zIndex: 3
    }
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => go(i),
    style: {
      width: i === idx ? 22 : 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      border: "none",
      cursor: "pointer",
      background: i === idx ? "var(--color-primary)" : "color-mix(in srgb, var(--color-foreground) 40%, transparent)",
      transition: "width var(--dur-base)"
    }
  }))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const PAD = {
  sm: "6px 10px",
  md: "8px 14px",
  lg: "10px 18px"
};
const FONT = {
  sm: "var(--text-small)",
  md: "var(--text-small)",
  lg: "var(--text-medium)"
};

/** Tabs — segmented navigation. items=[{key,title,content}]. variant solid/underlined/bordered/light. */
function Tabs({
  items = [],
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "md",
  fullWidth = false,
  isDisabled = false,
  className = "",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultSelectedKey ?? items[0]?.key);
  const sel = selectedKey !== undefined ? selectedKey : internal;
  const select = k => {
    if (selectedKey === undefined) setInternal(k);
    onSelectionChange && onSelectionChange(k);
  };
  const rad = {
    none: "0",
    sm: "var(--radius-small)",
    md: "var(--radius-medium)",
    lg: "var(--radius-large)",
    full: "var(--radius-full)"
  }[radius];
  const isUnderlined = variant === "underlined";
  const listStyle = {
    display: "inline-flex",
    gap: isUnderlined ? 4 : 4,
    padding: isUnderlined ? 0 : 4,
    width: fullWidth ? "100%" : undefined,
    background: isUnderlined || variant === "light" ? "transparent" : "var(--color-default-100)",
    borderRadius: rad,
    borderBottom: isUnderlined ? "1px solid var(--color-divider)" : "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jn-tabs ${className}`,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: listStyle
  }, items.map(it => {
    const active = it.key === sel;
    const base = {
      position: "relative",
      flex: fullWidth ? 1 : undefined,
      textAlign: "center",
      padding: PAD[size],
      borderRadius: isUnderlined ? 0 : rad,
      border: "none",
      cursor: isDisabled || it.isDisabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: FONT[size],
      fontWeight: "var(--fw-medium)",
      background: "transparent",
      color: active ? undefined : "var(--text-muted)",
      transition: "color var(--dur-base), background var(--dur-base)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    };
    if (active) {
      if (isUnderlined) {
        base.color = `var(--color-${color})`;
      } else if (variant === "bordered") {
        base.background = "var(--color-content1)";
        base.color = "var(--color-foreground)";
        base.boxShadow = "var(--shadow-small)";
        base.border = "1px solid var(--color-divider)";
      } else if (variant === "light") {
        base.background = `var(--color-${color}-flat)`;
        base.color = `var(--color-${color}-600)`;
      } else {
        base.background = color === "default" ? "var(--color-content1)" : `var(--color-${color})`;
        base.color = color === "default" ? "var(--color-foreground)" : `var(--color-${color}-foreground)`;
        base.boxShadow = "var(--shadow-small)";
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      role: "tab",
      onClick: () => !(isDisabled || it.isDisabled) && select(it.key),
      style: base
    }, it.startContent, it.title, isUnderlined && active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        background: `var(--color-${color})`,
        borderRadius: 2
      }
    }));
  })), items.map(it => it.key === sel && it.content && /*#__PURE__*/React.createElement("div", {
    key: it.key,
    role: "tabpanel",
    style: {
      padding: "16px 4px",
      fontSize: "var(--text-small)",
      color: "var(--color-foreground)"
    }
  }, it.content)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CommandBar.jsx
try { (() => {
// JigsawNote — Command palette (⌘K)
const {
  Icon,
  Kbd
} = window.JigsawNoteDesignSystem_94fd87;
function CommandBar({
  open,
  onClose,
  notes,
  onSelect,
  onNew
}) {
  const [q, setQ] = React.useState("");
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (open) setQ("");
  }, [open]);
  React.useEffect(() => {
    const h = e => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", h);
      return () => window.removeEventListener("keydown", h);
    }
  }, [open, onClose]);
  if (!open) return null;
  const results = notes.filter(n => n.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "var(--color-overlay)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "12vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 560,
      maxWidth: "90vw",
      background: "var(--color-content1)",
      border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-large)",
      boxShadow: "var(--shadow-large)",
      overflow: "hidden",
      animation: "jn-cmd .16s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      borderBottom: "1px solid var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:magnifer-linear",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search notes or run a command\u2026",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--color-foreground)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-medium)"
    }
  }), /*#__PURE__*/React.createElement(Kbd, null, "esc")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 320,
      overflowY: "auto",
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onNew();
      onClose();
    },
    style: rowStyle(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:pen-new-square-bold",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, "Create new note"), /*#__PURE__*/React.createElement(Kbd, {
    keys: ["command"]
  }, "N")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      padding: "10px 12px 4px"
    }
  }, "Notes"), results.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => {
      onSelect(n.id);
      onClose();
    },
    style: rowStyle(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:notes-linear",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-subtle)"
    }
  }, n.edited))), results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      textAlign: "center",
      color: "var(--text-subtle)",
      fontSize: "var(--text-small)"
    }
  }, "No matches"))), /*#__PURE__*/React.createElement("style", null, `@keyframes jn-cmd{from{opacity:0;transform:translateY(-8px) scale(.98)}}`));
}
function rowStyle() {
  return {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    padding: "10px 12px",
    border: "none",
    cursor: "pointer",
    background: "transparent",
    borderRadius: "var(--radius-medium)",
    color: "var(--color-foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-small)"
  };
}
window.CommandBar = CommandBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CommandBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Editor.jsx
try { (() => {
// JigsawNote — Note editor pane
const {
  Chip,
  Button,
  Tooltip,
  Icon,
  Avatar
} = window.JigsawNoteDesignSystem_94fd87;
function ToolBtn({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement(Tooltip, {
    content: label,
    color: "default"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-medium)",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-default-200)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19
  })));
}
function Editor({
  note,
  onChange,
  onPin
}) {
  if (!note) {
    return /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        background: "var(--surface-app)",
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/jigsawnote-mark-512.png",
      alt: "",
      style: {
        width: 72,
        height: 72,
        borderRadius: 18,
        opacity: 0.7
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        color: "var(--text-muted)"
      }
    }, "Pick a piece to start"));
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-app)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "12px 18px",
      borderBottom: "1px solid var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-subtle)"
    }
  }, "Edited ", note.edited, " ago"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:bell-linear",
    label: "Remind me"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onPin,
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-medium)",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: note.pinned ? "var(--color-secondary)" : "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: note.pinned ? "solar:pin-bold" : "solar:pin-linear",
    size: 19
  })), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:link-circle-linear",
    label: "Link a note"
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:menu-dots-bold",
    label: "More"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "26px 40px",
      maxWidth: 760,
      width: "100%",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: note.title,
    onChange: e => onChange({
      ...note,
      title: e.target.value
    }),
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--color-foreground)",
      fontFamily: "var(--font-display)",
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 20
    }
  }, note.tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    size: "sm",
    variant: "flat",
    color: note.color,
    onClose: () => onChange({
      ...note,
      tags: note.tags.filter(x => x !== t)
    })
  }, t)), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: "var(--text-tiny)",
      color: "var(--text-subtle)",
      background: "transparent",
      border: "1px dashed var(--color-divider)",
      borderRadius: "var(--radius-full)",
      padding: "3px 10px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:add-circle-linear",
    size: 14
  }), " tag")), /*#__PURE__*/React.createElement("textarea", {
    value: note.body,
    onChange: e => onChange({
      ...note,
      body: e.target.value
    }),
    style: {
      width: "100%",
      minHeight: 320,
      border: "none",
      outline: "none",
      resize: "none",
      background: "transparent",
      color: "var(--color-content1-foreground)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-medium)",
      lineHeight: 1.7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 18px",
      borderTop: "1px solid var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:text-bold-bold",
    label: "Bold"
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:list-check-bold",
    label: "Checklist"
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "solar:paperclip-linear",
    label: "Attach"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--color-success)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:check-circle-bold",
    size: 15
  }), " Saved"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    color: "primary",
    variant: "flat"
  }, "Share"))));
}
window.Editor = Editor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Editor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/NoteList.jsx
try { (() => {
// JigsawNote — Note list column
const {
  Chip,
  Button,
  Icon
} = window.JigsawNoteDesignSystem_94fd87;
function NoteCard({
  note,
  active,
  onClick,
  onPin
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: "12px 14px",
      borderRadius: "var(--radius-large)",
      cursor: "pointer",
      background: active ? "var(--color-content1)" : hover ? "rgba(255,255,255,0.03)" : "transparent",
      border: `1px solid ${active ? "var(--color-primary)" : "transparent"}`,
      boxShadow: active ? "var(--shadow-small)" : "none",
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, note.pinned && /*#__PURE__*/React.createElement(Icon, {
    name: "solar:pin-bold",
    size: 13,
    color: "var(--color-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: 600,
      color: "var(--color-foreground)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, note.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "5px 0 0",
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)",
      lineHeight: 1.5,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, note.body.replace(/\n+/g, " ")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 9
    }
  }, note.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    size: "sm",
    variant: "flat",
    color: note.color
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 11,
      color: "var(--text-subtle)"
    }
  }, note.edited)))));
}
function NoteList({
  title,
  notes,
  activeId,
  onSelect,
  onNew,
  query,
  setQuery
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: 320,
      flexShrink: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid var(--color-divider)",
      background: "var(--surface-app)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 700,
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    color: "primary",
    isIconOnly: true,
    onClick: onNew,
    title: "New note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:pen-new-square-bold",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 11px",
      borderRadius: "var(--radius-medium)",
      background: "var(--color-default-100)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:magnifer-linear",
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Filter notes",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--color-foreground)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 8px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, notes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: "center",
      color: "var(--text-subtle)",
      fontSize: "var(--text-small)"
    }
  }, "No notes here yet."), notes.map(n => /*#__PURE__*/React.createElement(NoteCard, {
    key: n.id,
    note: n,
    active: n.id === activeId,
    onClick: () => onSelect(n.id)
  }))));
}
window.NoteList = NoteList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/NoteList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
// JigsawNote — Sidebar (navigation rail)
const {
  Avatar,
  Badge,
  Icon
} = window.JigsawNoteDesignSystem_94fd87;
function NavItem({
  icon,
  label,
  count,
  active,
  accent,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      textAlign: "left",
      padding: "8px 10px",
      borderRadius: "var(--radius-medium)",
      border: "none",
      cursor: "pointer",
      background: active ? "var(--color-primary-flat)" : hover ? "rgba(255,255,255,0.04)" : "transparent",
      color: active ? "var(--color-primary-600)" : "var(--color-foreground)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      fontWeight: active ? 600 : 500,
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: active ? "var(--color-primary)" : "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-subtle)",
      fontVariantNumeric: "tabular-nums"
    }
  }, count), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--color-secondary)"
    }
  }));
}
function SectionLabel({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 10px 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      fontWeight: 600
    }
  }, children), action);
}
function Sidebar({
  view,
  setView,
  notebooks,
  tags,
  activeNb,
  setActiveNb,
  user,
  onCommand
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 250,
      flexShrink: 0,
      height: "100%",
      background: "var(--surface-sidebar)",
      borderRight: "1px solid var(--color-divider)",
      display: "flex",
      flexDirection: "column",
      padding: "14px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 8px 12px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/jigsawnote-mark-512.png",
    alt: "",
    style: {
      width: 34,
      height: 34,
      borderRadius: 9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "Jigsaw", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, "Note"))), /*#__PURE__*/React.createElement("button", {
    onClick: onCommand,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      padding: "9px 11px",
      marginBottom: 4,
      borderRadius: "var(--radius-medium)",
      border: "1px solid var(--color-divider)",
      cursor: "pointer",
      background: "rgba(255,255,255,0.03)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "solar:magnifer-linear",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      padding: "1px 6px",
      borderRadius: 5,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid var(--color-divider)"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "solar:notes-bold",
    label: "All notes",
    count: 40,
    active: view === "all",
    onClick: () => setView("all")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "solar:pin-bold",
    label: "Pinned",
    count: 2,
    active: view === "pinned",
    onClick: () => setView("pinned")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "solar:bell-bold",
    label: "Reminders",
    accent: true,
    active: view === "reminders",
    onClick: () => setView("reminders")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "solar:archive-bold",
    label: "Archive",
    active: view === "archive",
    onClick: () => setView("archive")
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    action: /*#__PURE__*/React.createElement(Icon, {
      name: "solar:add-circle-linear",
      size: 16,
      color: "var(--text-subtle)"
    })
  }, "Notebooks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, notebooks.map(nb => /*#__PURE__*/React.createElement(NavItem, {
    key: nb.id,
    icon: "solar:notebook-bold",
    label: nb.name,
    count: nb.count,
    active: activeNb === nb.id,
    onClick: () => {
      setActiveNb(nb.id);
      setView("notebook");
    }
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Tags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      padding: "0 8px"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: "var(--text-tiny)",
      color: "var(--text-muted)",
      padding: "3px 9px",
      borderRadius: "var(--radius-full)",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--color-divider)"
    }
  }, "#", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 12,
      borderTop: "1px solid var(--color-divider)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: user.name,
    color: "primary",
    isBordered: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-subtle)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user.email)), /*#__PURE__*/React.createElement(Icon, {
    name: "solar:settings-linear",
    size: 18,
    color: "var(--text-subtle)"
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// JigsawNote sample content
window.JN_DATA = {
  user: {
    name: "Priya Anand",
    email: "priya@jigsawnote.app"
  },
  notebooks: [{
    id: "nb-work",
    name: "Work",
    color: "primary",
    count: 14
  }, {
    id: "nb-ideas",
    name: "Ideas",
    color: "secondary",
    count: 9
  }, {
    id: "nb-life",
    name: "Personal",
    color: "success",
    count: 6
  }, {
    id: "nb-read",
    name: "Reading",
    color: "warning",
    count: 11
  }],
  tags: ["roadmap", "meeting", "draft", "someday", "recipe"],
  notes: [{
    id: "n1",
    nb: "nb-work",
    title: "Q3 roadmap draft",
    tags: ["roadmap"],
    pinned: true,
    edited: "2h",
    color: "primary",
    body: "Three bets for Q3:\n\n1. Connected notes — link any two pieces and surface the graph.\n2. Reminders that actually nudge.\n3. Faster capture from anywhere.\n\nOpen question: do we ship the graph view before or after mobile?"
  }, {
    id: "n2",
    nb: "nb-work",
    title: "Sync sprint retro",
    tags: ["meeting"],
    pinned: false,
    edited: "5h",
    color: "primary",
    body: "What went well: pairing on the merge engine.\nWhat to change: smaller PRs, earlier design review.\nAction: Priya to spec the conflict UI by Thursday."
  }, {
    id: "n3",
    nb: "nb-ideas",
    title: "The jigsaw metaphor",
    tags: ["draft", "someday"],
    pinned: true,
    edited: "1d",
    color: "secondary",
    body: "Every note is a piece. On its own it's a fragment; the value is in the fit. The product should reward connecting, not just collecting."
  }, {
    id: "n4",
    nb: "nb-life",
    title: "Trip packing list",
    tags: [],
    pinned: false,
    edited: "1d",
    color: "success",
    body: "Passport, chargers, the good headphones, a paperback for the plane. Book the airport transfer the night before."
  }, {
    id: "n5",
    nb: "nb-read",
    title: "Highlights — Deep Work",
    tags: ["someday"],
    pinned: false,
    edited: "2d",
    color: "warning",
    body: "Attention residue is real. Batch shallow tasks. Schedule every minute, then adapt. Boredom tolerance is a trainable skill."
  }, {
    id: "n6",
    nb: "nb-ideas",
    title: "Recipe: miso greens",
    tags: ["recipe"],
    pinned: false,
    edited: "3d",
    color: "secondary",
    body: "Blanch greens. Whisk miso, tahini, rice vinegar, a little maple. Toss warm. Top with sesame. Absurdly good."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Code = __ds_scope.Code;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.User = __ds_scope.User;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastViewport = __ds_scope.ToastViewport;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CheckboxGroup = __ds_scope.CheckboxGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.InputOTP = __ds_scope.InputOTP;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Calendar = __ds_scope.Calendar;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
