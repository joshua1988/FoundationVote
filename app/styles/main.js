import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "'Roboto', 'Helvetica', sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "fontFamily": "'Roboto', 'Helvetica', sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mdl-demo mdl-layout__header-row": {
        "paddingLeft": 40
    },
    "mdl-demo mdl-layoutis-small-screen mdl-layout__header-row h3": {
        "fontSize": "inherit"
    },
    "mdl-demo mdl-layout__tab-bar-button": {
        "display": "none"
    },
    "mdl-demo mdl-layoutis-small-screen mdl-layout__tab-bar mdl-button": {
        "display": "none"
    },
    "mdl-demo mdl-layout:not(is-small-screen) mdl-layout__tab-bar": {
        "overflow": "visible"
    },
    "mdl-demo mdl-layout:not(is-small-screen) mdl-layout__tab-bar-container": {
        "overflow": "visible"
    },
    "mdl-demo mdl-layout__tab-bar-container": {
        "height": 64
    },
    "mdl-demo mdl-layout__tab-bar": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "boxSizing": "border-box",
        "height": "100%",
        "width": "100%"
    },
    "mdl-demo mdl-layout__tab-bar mdl-layout__tab": {
        "height": 64,
        "lineHeight": 64
    },
    "mdl-demo mdl-layout__tab-bar mdl-layout__tabis-active::after": {
        "backgroundColor": "white",
        "height": 4
    },
    "mdl-demo main > mdl-layout__tab-panel": {
        "paddingTop": 48,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "mdl-demo mdl-card": {
        "height": "auto",
        "display": "flex",
        "flexDirection": "column"
    },
    "mdl-demo mdl-card > *": {
        "height": "auto"
    },
    "mdl-demo mdl-card mdl-card__supporting-text": {
        "marginTop": 40,
        "marginRight": 40,
        "marginBottom": 40,
        "marginLeft": 40,
        "flexGrow": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "inherit",
        "width": "calc(100% - 80px)"
    },
    "mdl-demomdl-demo mdl-card__supporting-text h4": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "mdl-demo mdl-card__actions": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 4,
        "paddingRight": 40,
        "paddingBottom": 4,
        "paddingLeft": 40,
        "color": "inherit"
    },
    "mdl-demo mdl-card__actions a": {
        "color": "#00BCD4",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mdl-demo mdl-card__actions a:hover": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "mdl-demo mdl-card__actions a:active": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "mdl-demo mdl-card__supporting-text + mdl-card__actions": {
        "borderTop": "1px solid rgba(0, 0, 0, 0.12)"
    },
    "mdl-demo add": {
        "position": "absolute",
        "right": 40,
        "top": 36,
        "zIndex": 999
    },
    "mdl-demo mdl-layout__content section:not(:last-of-type)": {
        "position": "relative",
        "marginBottom": 48
    },
    "mdl-demo sectionsection--center": {
        "maxWidth": 860
    },
    "mdl-demo features sectionsection--center": {
        "maxWidth": 620
    },
    "mdl-demo section > header": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "mdl-demo section > section__play-btn": {
        "minHeight": 200
    },
    "mdl-demo section > header > material-icons": {
        "fontSize": 3
    },
    "mdl-demo section > button": {
        "position": "absolute",
        "zIndex": 99,
        "top": 8,
        "right": 8
    },
    "mdl-demo section section__circle": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "flex-start",
        "flexGrow": 0,
        "flexShrink": 1
    },
    "mdl-demo section section__text": {
        "flexGrow": 1,
        "flexShrink": 0,
        "paddingTop": 8
    },
    "mdl-demo section section__text h5": {
        "fontSize": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "mdl-demo section section__text a": {
        "textDecoration": "none"
    },
    "mdl-demo section section__circle-container > section__circle-container__circle": {
        "width": 64,
        "height": 64,
        "borderRadius": 32,
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0
    },
    "mdl-demo sectionsection--footer section__circle--big": {
        "width": 100,
        "height": 100,
        "borderRadius": 50,
        "marginTop": 8,
        "marginRight": 32,
        "marginBottom": 8,
        "marginLeft": 32
    },
    "mdl-demo is-small-screen sectionsection--footer section__circle--big": {
        "width": 50,
        "height": 50,
        "borderRadius": 25,
        "marginTop": 8,
        "marginRight": 16,
        "marginBottom": 8,
        "marginLeft": 16
    },
    "mdl-demo sectionsection--footer": {
        "paddingTop": 64,
        "paddingRight": 0,
        "paddingBottom": 64,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": -8,
        "marginBottom": -8,
        "marginLeft": -8
    },
    "mdl-demo sectionsection--center section__text:not(:last-child)": {
        "borderBottom": "1px solid rgba(0,0,0,.13)"
    },
    "mdl-demo mdl-card mdl-card__supporting-text > h3:first-child": {
        "marginBottom": 24
    },
    "mdl-demo mdl-layout__tab-panel:not(overview)": {},
    "mdl-demo section": {
        "marginBottom": 40
    },
    "mdl-demo features h4": {
        "marginBottom": 16
    },
    "features h5": {
        "marginBottom": 16
    },
    "mdl-demo toc": {
        "borderLeft": "4px solid #C1EEF4",
        "marginTop": 24,
        "marginRight": 24,
        "marginBottom": 24,
        "marginLeft": 24,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "display": "flex",
        "flexDirection": "column"
    },
    "mdl-demo toc h4": {
        "fontSize": 0.9,
        "marginTop": 0
    },
    "mdl-demo toc a": {
        "color": "#4DD0E1",
        "textDecoration": "none",
        "fontSize": 16,
        "lineHeight": 28,
        "display": "block"
    },
    "mdl-demo mdl-menu__container": {
        "zIndex": 99
    },
    "mdl-mega-footer": {
        "positon": "relative",
        "bottom": 0
    },
    "mdl-card__supporting-text": {
        "background": "white"
    }
});