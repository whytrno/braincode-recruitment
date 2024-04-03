import IconContainer from "./IconContainer";
import {Icon} from "@iconify-icon/solid";

const SocialMediaLinks = () => {
    const socialMediaLinks = [
        {
            icon: 'mingcute:github-line',
            link: 'https://github.com/whytrno',
        },
        {
            icon: 'mdi:instagram',
            link: 'https://www.instagram.com/whytrno/',
        }
    ]

    return (
        <div class="flex items-center gap-[7px]">
            {
                socialMediaLinks.map((item, index) => (
                    <a href={item.link} target={'_blank'}>
                        <IconContainer size={'lg'}>
                            <Icon class="text-2xl text-[#D1D5DB]" icon={item.icon}/>
                        </IconContainer>
                    </a>
                ))
            }
        </div>
    )
}

export default SocialMediaLinks;