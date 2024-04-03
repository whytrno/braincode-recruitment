import {Component, JSXElement} from "solid-js";

const Badge: Component<{ children: JSXElement }> = (props) => {
    return (
        <span
            class="whitespace-nowrap rounded-[12px] text-sm w-min bg-[#374151] text-white px-[20px] py-[4px]">{props.children}</span>
    )
}

export default Badge;