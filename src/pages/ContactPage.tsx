import {Component} from "solid-js";
import Badge from "../components/Badge";
import ContactItem from "../components/ContactItem";
import SocialMediaLinks from "../components/SocialMediaLinks";

const ContactPage: Component = () => {
    return (
        <div class="space-y-[48px] mt-20 w-full">
            <div class="space-y-[16px]">
                <div class="flex justify-center">
                    <Badge>Get In Touch</Badge>
                </div>
                <p class="text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have
                    a query, or simply want to connect.</p>
            </div>
            <div class="space-y-[16px] flex flex-col items-center">
                <ContactItem leftIcon={'mdi:email-outline'}>
                    whytrno@gmail.com
                </ContactItem>
                <ContactItem leftIcon={'mdi:phone'}>
                    +62 85156113164
                </ContactItem>
            </div>
            <div class="space-y-[8px]">
                <p class="text-center">You may also find me on these platforms!</p>
                <div class="flex justify-center">
                    <SocialMediaLinks/>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;