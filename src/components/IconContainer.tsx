import {Component, JSXElement} from "solid-js";

type IconContainerProps = {
    children: JSXElement,
    size?: string
}

const IconContainer: Component<IconContainerProps> = (props) => {
    let sizeClass = `size-[24px]`

    switch (props.size) {
        case 'sm':
            sizeClass = `size-[24px]`
            break;
        case 'md':
            sizeClass = `size-[32px]`
            break;
        case 'lg':
            sizeClass = `size-[36px]`
            break;
    }

    return (
        <div class={`${sizeClass} flex items-center justify-center`}>
            {props.children}
        </div>
    );
}

export default IconContainer;