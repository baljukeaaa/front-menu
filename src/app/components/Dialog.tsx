import { Button } from "@/components/ui/button"
import { DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label"
import { BASE_URL } from "../constants"
import { Minus, Plus } from "lucide-react"
type CategoryType = {
    name: string;
    foods: FoodType[];
    _id: string;
    createdAt: string;
    updatedAt: string;
};


type FoodType = {
    name: string;
    price: number;
    category: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    ingredients: string
    img: string,

}
// return(
//     {categories.map((category: CategoryType) => {


//     })}
//     return category.foods.map(food => (  ))
//    )

export const DialogDemo = async ({ food }) => {
    const response = await fetch(`${BASE_URL}/category/with-foods`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { categories } = await response.json();
    console.log(categories, "categories")

    return (
        <div>
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="outline" className='' ><Plus /></Button>

                </DialogTrigger>
                <DialogContent className="sm:max-w-[820px] h-[412px]">
                    <div className="flex gap-2" >
                        <img src={`/suret.png`}>
                        </img>
                        <DialogHeader>
                            <div className="flex flex-col gap-2">
                                <DialogTitle className="text-start font-semibold text-4xl text-red-500 leading-8">{food.name}</DialogTitle>
                                <DialogDescription className=" text-start text-sm laeding-5 font-normal">
                                    {food.ingredients}
                                </DialogDescription>
                            </div>
                        </DialogHeader>
                    </div>
                    <DialogFooter className="">
                    <div className="flex gap-40  ">
                            <div className="flex flex-col">
                                <p className="text-sm leading-3">Total Price</p>
                                <p className="font-semibold text-lg leading-7">
                                    {food.price}
                                </p>
                            </div>

                            <div className=" flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                    <Button
                                        className="w-8 h-8 rounded-4xl"
                                        variant="outline"
                                    >
                                        <Minus />
                                    </Button>
                                    <p>1</p>
                                    <Button
                                        className="w-8 h-8 rounded-4xl"
                                        variant="outline"
                                    >
                                        <Plus />
                                    </Button>
                                </div>
                            </div>
                            
                        </div>


                      
                    </DialogFooter><div>
                            <Button type="submit">Add Chart</Button>
                        </div>

                    
                </DialogContent>
            </Dialog>
        </div>
    )






}

{/* <Dialog >
        <DialogTrigger asChild>
            <Button variant="outline" className='' ><Plus /></Button>

        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <img src={`/suret.png`}>
        </img>
            <DialogHeader>
                <DialogTitle>{food.name}</DialogTitle>
                <DialogDescription>
                {food.ingredients}
                </DialogDescription>
            </DialogHeader>
           
            <DialogFooter>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>  */}