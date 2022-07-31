import { HopeProvider, HopeThemeConfig, NotificationsProvider } from "@hope-ui/solid";
import Prism from "prismjs";
import { Router } from "solid-app-router";
import { render } from "solid-js/web";

import "./index.css";
import App from "./app";

const config: HopeThemeConfig = {
    initialColorMode: "system",
    components: {
        Menu: {
            baseStyle: {
                content: {
                    zIndex: "$dropdown",
                },
            },
            defaultProps: {
                root: {
                    offset: 0,
                },
            },
        },
        Popover: {
            baseStyle: {
                content: {
                    zIndex: "$dropdown",
                },
            },
        },
        Tooltip: {
            baseStyle: {
                zIndex: "$dropdown",
            },
        },
    },
};

render(
    () => (
        <Router>
            <HopeProvider config={config}>
                <NotificationsProvider>
                    <App />
                </NotificationsProvider>
            </HopeProvider>
        </Router>
    ),
    document.getElementById("app") as HTMLElement
);

setTimeout(() => {
    Prism.highlightAll();
}, 0);