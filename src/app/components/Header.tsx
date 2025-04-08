import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"

const Header = () => {
    return(
        <div>
      <div className="">
        
        <div className="bg-[#18181B] flex">
        <img className="pl-12" src="icon.png" alt="" />
       
       <div className="flex gap-280 pl-4">
       <div>
        <span className="text-red-500">Nom</span>
        <span className="text-white">Nom</span>
        <p className="text-amber-50 text-[12px]">Swift delivery</p>
       </div>
        
      <div className="flex gap-4">
      <Button className="bg-amber-50 rounded-full ">
       <ShoppingCart className="text-black"></ShoppingCart>
       </Button>
       <Button className="bg-red-500 rounded-full ">
        <User className="text-black"></User>
       </Button>
      </div>
       </div>
      </div>
      </div>
      <div>
        <img src="BG.png" alt="" />

      </div>
      
    </div>
    )

}
export default Header