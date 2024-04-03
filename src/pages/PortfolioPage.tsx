import {Component} from "solid-js";
import Badge from "../components/Badge";

const PortfolioPage: Component = () => {
    const experiences = [
        {
            company: 'PT. Baracipta Esa Engineering',
            position: 'Backend Developer',
            date: 'Agu 2022 - Des 2022',
            description: [
                'Mengembangkan RestApi untuk platform LMS pembelajaran dan jual beli course yang digunakan untuk studi independent pada Kampus Merdeka',
                'Membuat ERD dan database',
                'Melakukan deploy project ke dalam server',
            ]
        },
        {
            company: 'PT. Tristar Surya Gemilang',
            position: 'Fullstack Developer',
            date: 'Feb 2023 - Agu 2023',
            description: [
                'Membuat API dengan struktur GraphQL dengan Golang',
                'Membuat server Socket.io',
                'Membuat ERD dan database',
                'Membuat client menggunakan Next Js menggunakan bahasa Typescript yang digunakan untuk sosial media internal kantor.',
            ]
        }
    ]
    return (
        <div class="space-y-[48px] w-full py-20">
            <div class="space-y-[16px]">
                <div class="flex justify-center">
                    <Badge>Experience</Badge>
                </div>
                <p class="text-center">Here is a quick summary of my most recent experiences:</p>
            </div>
            <div class="flex items-center lg:px-[192px]">
                <div class="space-y-[48px] lg:overflow-auto lg:h-[70vh] w-full">
                    {
                        experiences.map((item, index) => (
                            <div
                                class="grid lg:grid-cols-4 bg-[#1F2937] rounded-[12px] p-[32px] gap-5 lg:gap-[48px] text-[#D1D5DB]">
                                <div class="col-span-1">
                                    <h1 class="font-semibold whitespace-nowrap lg:whitespace-normal">{item.company}</h1>
                                </div>
                                <div class="col-span-2 space-y-[16px]">
                                    <h1 class="text-[#F9FAFB] text-[20px] font-semibold">{item.position}</h1>
                                    <ul class="space-y-[4px] list-decimal list-inside">
                                        {
                                            item.description.map((item, index) => (
                                                <li>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div class="order-2 lg:order-last col-span-1">
                                    <p class="lg:text-end">{item.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;