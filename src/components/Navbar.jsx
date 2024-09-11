import { navLists } from "@/constants"
import { appleImg, bagImg, searchImg } from "@/utils"
import Image from "next/image"

const Navbar = () => {
  return (
    <header>
        <nav className="w-full py-5 sm:px-10 px-5 flex items-center justify-between">
            <Image src={appleImg} alt="apple" width={14} height={18} />
            <div className="flex flex-1 justify-center max-sm:hidden gap-4">
                {
                    navLists.map((nav, i) => (
                        <div key={i} className="cursor-pointer px-5 text-sm text-gray hover:text-white">
                            {nav}
                        </div>
                    ))
                }
            </div>
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <Image src={searchImg} alt="search" width={18} height={18} />
                <Image src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar