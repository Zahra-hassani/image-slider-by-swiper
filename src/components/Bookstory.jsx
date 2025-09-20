import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import Story from "./Story"
import { Navigation } from "swiper/modules"

export default function Bookstory(){
    const stories = [
        {
            name: "Beauty & the beast",
            imgUrl: "./img/beauty.jpeg",
        },
        {
            name: "Cinderella",
            imgUrl: "./img/cinderella.jpeg",
        },
        {
            name: "Aurora",
            imgUrl: "./img/aurora.jpg",
        },
        {
            name: "Princess",
            imgUrl: "./img/pincess.jpeg",
        },
        {
            name: "Rapanzel",
            imgUrl: "./img/rapanzel.jpeg",
        },
        {
            name: "Snow White",
            imgUrl: "./img/snowwhite.jpeg",
        },
        {
            name: "Princess and the frog",
            imgUrl: "./img/princessfrog.png",
        },
        {
            name: "Brave",
            imgUrl: "./img/brave.jpeg",
        },
        {
            name: "Mulan",
            imgUrl: "./img/mulan.jpeg",
        },
        {
            name: "Jasmine",
            imgUrl: "./img/jasmin2.jpeg",
        },
        {
            name: "Raya",
            imgUrl: "./img/raya2.jpeg",
        },
        {
            name: "Pocahontas",
            imgUrl: "./img/pocahontas.jpeg",
        },
        {
            name: "Frozen",
            imgUrl: "./img/frozen.jpeg",
        },
        {
            name: "Moral story 1",
            imgUrl: "./img/Lion.jpeg",
        },
        {
            name: "Moral story 2",
            imgUrl: "./img/Donkey.jpeg",
        },
        {
            name: "Moral story 3",
            imgUrl: "./img/King.jpeg",
        },
    ]
    return (
        <div className="h-fit w-full flex justify-center flex-col items-center p-2 ">
            <h1 className="text-3xl font-bold text-center py-4">The best selling Stories</h1>
            <p className="text-center text-xl">Start with top stories of the world</p>
            <div className="h-[40vh] w-full flex justify-between items-center px-3 gap-2 my-4">
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={[4]} className="w-full flex justify-between gap-3" >
                <SwiperSlide><Story imgUrl={stories[0].imgUrl} name={stories[0].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[1].imgUrl} name={stories[1].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[2].imgUrl} name={stories[2].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[3].imgUrl} name={stories[3].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[4].imgUrl} name={stories[4].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[5].imgUrl} name={stories[5].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[6].imgUrl} name={stories[6].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[7].imgUrl} name={stories[7].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[8].imgUrl} name={stories[8].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[9].imgUrl} name={stories[9].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[10].imgUrl} name={stories[10].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[11].imgUrl} name={stories[11].name} /></SwiperSlide>
                <SwiperSlide><Story imgUrl={stories[12].imgUrl} name={stories[12].name} /></SwiperSlide>
                {/* <SwiperSlide><Story imgUrl={stories[13].imgUrl} name={stories[13].name} /></SwiperSlide> */}
                {/* <SwiperSlide><Story imgUrl={stories[14].imgUrl} name={stories[14].name} /></SwiperSlide> */}
                {/* <SwiperSlide><Story imgUrl={stories[15].imgUrl} name={stories[15].name} /></SwiperSlide> */}
            </Swiper>
            </div>
        </div>
    )
}