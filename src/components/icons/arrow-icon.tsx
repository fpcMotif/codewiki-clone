import { ComponentProps, splitProps } from "solid-js";

export function ArrowIcon(props: ComponentProps<"svg">) {
    const [local, others] = splitProps(props, ["class"]);
    return (
        <svg
            aria-hidden="true"
            class={`h-6 w-6 ${local.class ?? ""}`}
            {...others}
            fill="currentColor" viewBox="0 0 24 24">
            <title>Arrow</title>
            <path d="M9 5l7 7-7 7" />
        </svg>
    );
}
