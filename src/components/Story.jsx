export default function Story({imgUrl,name}){
    return (
        <div className="w-[15%] h-59">
        <div className="h-full w-full rounded flex flex-col gap-3 shadow-md">
            <img src={imgUrl} className="rounded-t h-[70%] w-full" alt="" />
            <h1 className="font-bold text-2xl text-center">{name}</h1>
        </div>
        </div>
    )
}