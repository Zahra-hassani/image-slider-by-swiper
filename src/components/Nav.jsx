import NavList from './NavList'
export default function Nav (){
    return (
        <nav className="h-20 w-full flex justify-between items-center gap-4 px-4 shadow-sm sticky top-0 left-0 bg-gray-50">
            <h1 className="font-bold text-xl">Rainbow bookstore</h1>
            <NavList />
        </nav>
    )
}