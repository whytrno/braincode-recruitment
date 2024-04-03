import {Component, createSignal} from "solid-js";
import {A} from "@solidjs/router";
import IconContainer from "./IconContainer";
import {Icon} from "@iconify-icon/solid";

const Navbar: Component = () => {
    const [mobileMenu, setMobileMenu] = createSignal(false)

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu())
    }

    return (
        <div class={'-mx-[20px] px-[20px] lg:-mx-[112px] lg:px-[112px] py-[16px] absolute top-0 w-full'}>
            <div class="flex justify-between items-center w-full text-[#F9FAFB]">
                <h1 class="text-[20px] lg:text-[30px] font-bold">Wahyu Triono</h1>
                <button class="lg:hidden" onclick={handleMobileMenu}>
                    <IconContainer size={'mg'}>
                        <Icon icon="mdi:hamburger-menu" class="text-2xl"/>
                    </IconContainer>
                </button>
                {
                    mobileMenu() && (
                        <div
                            class="fixed top-0 right-0 w-full h-screen p-20 bg-[#1F2937] z-50 items-center flex flex-col gap-10">
                            <button class="lg:hidden" onClick={handleMobileMenu}>
                                <IconContainer size={'mg'}>
                                    <Icon icon="mdi:close" class="text-2xl"/>
                                </IconContainer>
                            </button>
                            <A onclick={handleMobileMenu} href={'/'}>Home</A>
                            <A onclick={handleMobileMenu} href={'/about'}>About</A>
                            <A onclick={handleMobileMenu} href={'/portfolio'}>Portfolio</A>
                            <A onclick={handleMobileMenu} href={'/contact'}>Contact</A>
                        </div>
                    )
                }
                <div
                    class="hidden lg:flex lg:items-center lg:gap-[24px] text-[16px] text-[#D1D5DB]">
                    <A href={'/'}>Home</A>
                    <A href={'/about'}>About</A>
                    <A href={'/portfolio'}>Portfolio</A>
                    <A href={'/contact'}>Contact</A>
                </div>
            </div>
        </div>
    )
}

export default Navbar;