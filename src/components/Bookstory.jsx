import Story from "./Story"

export default function Bookstory(){
    const stories = [
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
        {
            name: "Beauty & the beast",
            imgUrl: "./img/beauty.jpeg",
        },
    ]
    return (
        <div className="h-[40vh] w-full flex justify-between items-center px-3 gap-4 my-4 flex-wrap">
            {stories.map((item) =>(
                <Story key={item.name} imgUrl={item.imgUrl} name={item.name} />
            ))}
        </div>
    )
}