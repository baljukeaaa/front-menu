import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react";


const CardComp = () => {
    const foodCategoies = [
        {
            id: 1,
            categoryName: "Appetizer",
            foodTitle: "Finger Food",
          img: `hool.png`,
          price: " $12.99",
          overview:
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
        {
            id: 2,
            categoryName: "Salads",
            foodTitle: "Cranberry Brie Bites",
            img: `img.png`,
            price: " $12.99",
            overview:
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
        {
            id: 3,
            categoryName: "Lunch favorites",
            foodTitle: "Sunshine Stackers ",
            img: `suret.png`,
            price: " $12.99",
            overview:
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
        {
            id: 4,
            categoryName: "Salads",
            foodTitle: "Sunshine Stackers ",
            img: `hool.png`,
            price: " $12.99",
            overview:
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
        {
            id: 5,
            categoryName: "Salads",
            foodTitle: "Sunshine Stackers ",
            img: `pru.png`
            price: " $12.99",
            overview:
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
    ];
   
     

    return (
        <div>
            
            <div className="p-8 bg-[#404040]" >
            <div className="grid grid-cols-3 items-center justify-items-center justify-self-center w-fit min-h-screen gap-8 sm:p-20 font-[familyname:var(--font-geist-sans)]">
            {foodCategoies.map((category)=> {
                 
                    return <Card key={category.id} className=" p-0 gap-0 w-[230px]">
                        
                        <CardContent className="p-0 ">
                            <img src={`${category.img}`}>
                            
                            </img>
                            
                        </CardContent>
                        <div className="w-[40px] h-[40px] bg-white rounded-full absolute top-40 right-10 flex items-center justify-around">
              <Plus className="text-red-600"></Plus>
            </div>
                        <CardHeader className="p-2">
                        <CardTitle>{category.foodTitle}</CardTitle><span>{category.price}</span>
                       
                            <CardDescription className="flex items-center gap-1 p-0">
                            {category.overview}
                            </CardDescription>
                           
                           
                        </CardHeader>
                    </Card>
                })}
            </div>
        </div>
        </div>
    )
}
export default CardComp