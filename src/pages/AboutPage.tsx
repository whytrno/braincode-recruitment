import {Component} from "solid-js";
import Image from "../components/Image";

const AboutPage: Component = () => {
    return (
        <div class="grid  lg:grid-cols-2 gap-[48px] items-center mt-20">
            <div class="order-last lg:order-1 h-full lg:w-[440px]">
                <Image src={'/images/FOTO.JPG'} alt={'FOTO'}/>
            </div>
            <div class="space-y-[24px]">
                <h1 class="text-[#F9FAFB] font-semibold text-[30px]">Perkenalkan saya Wahyu Triono</h1>
                <div class="space-y-[16px]">
                    <p>Saya merupakan seseorang anak ke 3 dari 4 bersaudara</p>
                    <p>Saya tinggal bersama keluarga saya di Desa Banteran, Kec. Sumbang, Kab. Banyumas, Prov. Jawa
                        Tengah.
                    </p>
                    <p>Saya lulusan dari SMK Negeri 1 Purwokerto dengan jurusan Rekayasa Perangkat Lunak</p>
                    <p>Saya juga lulusan dari Institut Teknologi Telkom Purwokerto dengan jurusan yang sama yaitu
                        Rekayasa Perangkat Lunak
                    </p>
                    <p>Beberapa pengalaman saya adalah magang, freelance, dan juga kerja secara kontrak, dan saya sudah
                        mulai melakukan magang dalam dunia <span class="font-bold">Programming</span> dari SMK dengan
                        menggunakan Laravel, saya juga pernah bekerja pada sebuah perusahaan untuk mengembangkan Rest
                        Api untuk <a href="https://eraport.alirsyadpwt.sch.id/" class="underline underline-offset-4">Sistem
                            Informasi Akademik yayasan Al
                            Irsyad Purwokerto</a>
                    </p>
                    <p>Di waktu kosong saya, seringkali saya melakukan beberapa hal berikut:</p>
                    <ul class="grid grid-cols-2 gap-[10px] list-inside list-decimal">
                        <li>Mendengarkan Musik</li>
                        <li>Belajar Pemrograman</li>
                        <li>Menonton Film</li>
                        <li>Berenang</li>
                    </ul>
                    <p>Saya merupakan website developer yang lebih fokus dalam backend, saya suka dalam mempelajari
                        sesuatu hal yang baru, self-motivated, dan pekerja keras.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;