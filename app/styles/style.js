import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "nav ul a": {
        "color": "#444"
    },
    "nav brand-logo": {
        "color": "#444"
    },
    "p": {
        "lineHeight": 2
    },
    "button-collapse": {
        "color": "#26a69a"
    },
    "parallax-container": {
        "minHeight": 380,
        "lineHeight": 0,
        "height": "auto",
        "color": "rgba(255,255,255,.9)"
    },
    "parallax-container section": {
        "width": "100%"
    },
    "icon-block": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "icon-block material-icons": {
        "fontSize": "inherit"
    },
    "footerpage-footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    }
});