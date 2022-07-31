import {
    Center,
    Container,
    Flex,
    hope,
    Progress,
    ProgressIndicator,
    Spinner,
} from "@hope-ui/solid";
import { Outlet, Route, Routes, useIsRouting } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import { Portal } from "solid-js/web";

import Header from "./components/Header";

const NotFound = lazy(() => import("./pages/not-found"));

const Installation = lazy(() => import("./pages/installation"));

function AppLayout() {
    const isRouting = useIsRouting();

    return (
        <Flex direction="column">
            <Portal>
                <Progress
                    indeterminate
                    size="xs"
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    zIndex="$banner"
                    d={isRouting() ? "block" : "none"}
                >
                    <ProgressIndicator />
                </Progress>
            </Portal>
            <Header />
            <Container flexGrow={1}>
                <Flex>
                    <hope.main w="$full">
                        <Outlet />
                    </hope.main>
                </Flex>
            </Container>
        </Flex>
    );
}

export default function App() {
    return (
        <Suspense
            fallback={
                <Center mt="$4">
                    <Spinner size="lg" thickness="3px" color="$primary9" />
                </Center>
            }
        >
            <Routes>
                <Route path="/*all" element={<NotFound />} />
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<Installation />} />
                    <Route path="/demo">
                        <Route path="/start" element={<Installation />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
}
