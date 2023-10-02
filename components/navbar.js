import Link from "next/link"


const Navbar = ({text}) => {

  return (
    <nav className={`${text} cursor-default absolute z-10`}>
    <div className="nav-container md:text-3xl">
        <p className='hover:text-orange-600'><Link href={"/stories"}>Stories</Link></p>
        <p className='hover:text-orange-600'> <Link href={"/movies"}>Movies</Link> </p> 
    </div>
    
    <Link href={"/dashboard"}>
    <p className="bg-gradient-to-r from-orange-600 to-purple-800 inline-block text-transparent bg-clip-text font-bold nav-logo-fontSize">Halloween</p>
    </Link>
    <div className="nav-container md:text-3xl">
        <p className='hover:text-orange-600'><Link href={"/crafts"}>Crafts</Link></p>
        <p className='hover:text-orange-600'><Link href={"/recipes"}>Recipes</Link></p>
    </div>
</nav>
  )
}

export default Navbar