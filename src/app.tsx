import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { ThemeProvider } from "@/contexts/theme-context";
import "@/app.css";

export default function App() {
    return (
        <Router root={props => (
            <MetaProvider>
                <ThemeProvider>
                    <Suspense>{props.children}</Suspense>
                </ThemeProvider>
            </MetaProvider>
        )}>
            <FileRoutes />
        </Router>
    );
}
