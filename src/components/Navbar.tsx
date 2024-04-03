import {Component} from "solid-js";
import {A} from "@solidjs/router";

const Navbar: Component = () => {
    return (
        <div class={'-mx-[112px] px-[112px] py-[16px] absolute top-0 w-full'}>
            <div class="flex justify-between items-center">
                <h1 class="text-[30px] font-bold text-[#F9FAFB]">Wahyu Triono</h1>
                <div class="flex items-center gap-[24px] text-[16px] text-[#D1D5DB]">
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