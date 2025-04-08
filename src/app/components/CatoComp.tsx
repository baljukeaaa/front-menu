
  import { Button } from "@/components/ui/button"
  import { ChevronLeft , ChevronRight } from 'lucide-react';
   
   const CatoComp =() => {
    return (
        <div className="flex gap-6 items-center justify-items-center justify-self-center font-sans  ">
           <ChevronLeft></ChevronLeft>
            <Button className="rounded-full">Appetizers</Button>
            <Button className="rounded-full" >Salads</Button> 
            <Button className="rounded-full">Pizzas</Button> 
            <Button className="rounded-full">Lunch favorites</Button> 
            <Button className="rounded-full">Main dishes</Button> 
            <Button className="rounded-full">Fish & Sea foods</Button>
            <Button className="rounded-full">Side dish </Button>
            <Button className="rounded-full">Brunch</Button>
            <Button className="rounded-full">Desserts</Button>
            <ChevronRight></ChevronRight>
        </div>
    )
  }
  export default CatoComp