import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

const LogIn = () => {
    return(
        <div className=" flex justify-between gap-[2px] " >
        <div className="flex flex-col gap-6 p-26 pt-50" >
        <div>
         <Button><ChevronRight></ChevronRight></Button>
         </div>
         <h3>Create your account</h3>
         <p>Sign up to explore your favorite dishes.</p>
         <Input type="email" placeholder="Enter your email address" className="bg-amber-200"></Input>
         <Button className="w-100">Let's Go</Button>
        <div className="flex">
        <p>Already have an account?</p><span><Button variant="link">Log In</Button></span>
        </div>
        </div>
        <div className="">
         <img src="frame.png"></img>
        </div>
   
       </div>
    )
}
export default LogIn