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
            img: `pru.png`,
            price: " $12.99",
            overview:
                "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        },
    ];



    return (
        <div>

            <div className="p-8 bg-[#404040]" >
            <h3 className="text-3xl font-semibold flex ml-20 ">Appetizers</h3>
                <div className="grid grid-cols-3 items-center justify-items-center justify-self-center w-fit  gap-8  font-[familyname:var(--font-geist-sans)]  ">
                    {foodCategoies.map((category) => {

                        return <Card key={category.id} className=" p-0 gap-0 ">

                            <CardContent className="p-0  ">
                                <img src={`${category.img}`}>

                                </img>

                            </CardContent>
                            <div className="w-[40px] h-[40px] bg-white rounded-full absolute top-40 right-10 flex items-center justify-around gap-10 ">
                                <Plus className="text-red-600"></Plus>
                            </div>
                            <CardHeader className="p-2">
                                <div className="flex gap-6 justify-between">
                                    <CardTitle className="text-[24px] text-red-600 ">{category.foodTitle}</CardTitle><span className="">{category.price}</span>
                                </div>

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