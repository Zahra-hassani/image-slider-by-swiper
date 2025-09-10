import NavList from './NavList'
export default function Nav (){
    return (
        <nav className="h-20 w-full z-50 flex justify-between items-center gap-4 px-4 shadow-sm sticky top-0 left-0 bg-gray-50">
            <div className="h-full flex items-center">
            <img src="./img/Logo.png" className="h-20 w-22 rounded-full" alt="logo" />
            <h1 className="font-bold text-xl">Rainbow bookstore</h1>
            </div>
            <NavList />
        </nav>
    )
}