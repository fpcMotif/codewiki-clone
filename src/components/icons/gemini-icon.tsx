import { ComponentProps, splitProps } from "solid-js";

export function GeminiIcon(props: ComponentProps<"svg">) {
    const [local, others] = splitProps(props, ["class"]);
    return (
        <svg
            aria-hidden="true"
            class={`h-6 w-6 ${local.class ?? ""}`}
            {...others}
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="gemini-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stop-color="#4285F4" />
                    <stop offset="50%" stop-color="#9B72CB" />
                    <stop offset="100%" stop-color="#D96570" />
                </linearGradient>
            </defs>
        </svg>
    );
}
