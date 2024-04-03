import {Component, JSXElement} from "solid-js";

const Container: Component<{ children: JSXElement }> = (props) => {
    return (
        <div class={'px-[112px] h-screen flex flex-col'}>
            {props.children}
        </div>
    );
};

export default Container;