import {Component} from "solid-js";
import IconContainer from "../components/IconContainer";
import Image from "../components/Image";
import SocialMediaLinks from "../components/SocialMediaLinks";
import {Icon} from "@iconify-icon/solid";

const HomePage: Component = () => {
    return (
        <div class="py-[96px] flex flex-col lg:flex-row gap-[48px]">
            <div class="flex flex-col gap-5 justify-between">
                <div class="space-y-[8px]">
                    <h1 class="text-[#F9FAFB] font-bold text-[60px]">Hi, saya Wahyu 👋</h1>
                    <p class="text-[#D1D5DB] text-[16px]">Saya merupakan website developer yang lebih fokus dalam
                        backend, saya suka dalam mempelajari sesuatu hal yang baru, self-motivated, dan pekerja
                        keras.</p>
                </div>
                <div class="space-y-[8px]">
                    <div class="flex items-center gap-[8px]">
                        <IconContainer size={'sm'}>
                            <Icon icon="mdi:map-marker"/>
                        </IconContainer>
                        <p>Purwokerto, Jawa Tengah</p>
                    </div>

                    <div class="flex items-center gap-[8px]">
                        <IconContainer size={'sm'}>
                            <div class="size-[8px] bg-[#10B981] rounded-full"></div>
                        </IconContainer>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <SocialMediaLinks/>
            </div>
            <div class="w-full lg:w-[400px] h-[360px]">
                <Image src={'/images/FOTO.JPG'} alt={'FOTO'}/>
            </div>
        </div>
    );
}

export default HomePage;