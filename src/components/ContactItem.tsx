import IconContainer from "./IconContainer";
import {Icon} from "@iconify-icon/solid";
import {Component, JSXElement} from "solid-js";


type ContactItemProps = {
    children: JSXElement,
    leftIcon?: string
}

const ContactItem: Component<ContactItemProps> = (props) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(props.children);
        alert('Copied to clipboard!');
    }

    return (
        <div class="flex justify-between gap-[20px] items-center text-[#F9FAFB] w-min">
            <IconContainer size={'md'}>
                <Icon icon={props.leftIcon} class="text-2xl"/>
            </IconContainer>
            <p class="text-[36px] font-semibold whitespace-nowrap">{props.children}</p>
            <button onclick={() => handleCopy()}>
                <IconContainer size={'md'}>
                    <Icon icon="mdi:content-copy" class="text-2xl"/>
                </IconContainer>
            </button>
        </div>
    )
}

export default ContactItem;