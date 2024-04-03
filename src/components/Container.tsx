import {Component, JSXElement} from "solid-js";

const Container: Component<{ children: JSXElement }> = (props) => {
    return (
        <div class={'px-[20px] lg:px-[112px] lg:h-screen flex flex-col'}>
            {props.children}
        </div>
    );
};

export default Container;