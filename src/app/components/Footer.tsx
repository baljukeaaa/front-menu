import { Facebook, Instagram } from "lucide-react"

const Footer = () => {
    return(
        <div className=" bg-[#18181B] h-[755px] w-100% ">
        <div className="bg-red-500 flex gap-10 h-[92px] justify-items-center pt-7 pl-20 ">
          <h2 className=" text-4xl text-amber-50">Fresh fast delivered </h2>
          <h2 className=" text-4xl text-amber-50">Fresh fast delivered </h2>
          <h2 className=" text-4xl text-amber-50">Fresh fast delivered </h2>
          <h2 className=" text-4xl text-amber-50">Fresh fast delivered </h2>
        </div>
        <div className="flex gap-48 p-30 pr-0">
          <div className="flex flex-col gap-4">
            <img className="w-[46px] h-[37px]" src="icon.png"></img>
            <div className="">
            <div>
              <span className="text-red-500 text-2xl font-semibold">Nom</span>
              <span className="text-white text-2xl font-semibold">Nom</span>
            </div>
            <p className="text-amber-50">Swift delivery</p>
            </div>
          </div>
         
          <div className="text-amber-50 flex flex-col gap-4 ">
            <p className="text-[#71717A]">NOMNOM </p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>

          </div>
          <div className="text-amber-50 flex flex-col gap-4">
            <p className="text-[#71717A]">MENU </p>
            <p>Appetizers</p>
            <p>Salads</p>
            <p>Pizzas</p>
            <p>Main dishes</p>
            <p>Desserts</p>

          </div>
          <div className="text-amber-50 flex flex-col gap-4">
            <br />
            <p>Side dish  </p>
            <p>Brunch</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Fish & Sea foods</p>
          </div>
          <div className="text-amber-50 flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex">
              <Instagram></Instagram>
              <Facebook></Facebook>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pl-2 pr-2 ">
            <div className="flex flex-wrap justify-between text-gray-400 text-sm pt-(--spacing-2)">
              <div className="mb-2 md:mb-0">Copy right 2025 © AriiEats LLC</div>
              <div className="flex gap-6">
                <p className="hover:text-gray-300">
                  Privacy policy
                </p>
               <p className="hover:text-gray-300">
                  Terms and conditoin
                </p>
                <p className="hover:text-gray-300">
                  Cookie policy
                </p>
              </div>
            </div>
          </div>

      </div>
      

    )

}
export default Footer