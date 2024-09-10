import { appleImg, bagImg, searchImg } from "@/utils"
import Image from "next/image"

const Navbar = () => {
  return (
    <header>
        <nav className="w-full py-5 sm:px-10 px-5 flex items-center justify-between">
            <Image src={appleImg} alt="apple" width={14} height={18} />
            <div>
                {
                    ['Phone', 'Macbooks', 'Tablets'].map((nav, i) => (
                        <div key={i}>
                            {nav}
                        </div>
                    ))
                }
            </div>
            <div>
                <Image src={searchImg} alt="search" width={18} height={18} />
                <Image src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar