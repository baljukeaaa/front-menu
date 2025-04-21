import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BASE_URL } from "../constants";
import { DialogDemo } from './Dialog';
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
// https://food-back-1-mofj.onrender.com/api/v1/category/with-foods

const Cardcomppp = async () => {
    const response = await fetch(`${BASE_URL}/category/with-foods`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { categories } = await response.json();
    console.log(categories, "categories")



    return (
        <div>

            <div className="p-8 bg-[#404040]" >
                <h3 className="text-3xl font-semibold flex ml-20 ">Salads</h3>
                <div className="grid grid-cols-3 items-center justify-items-center justify-self-center w-fit  gap-8  font-[familyname:var(--font-geist-sans)]  ">
                    {categories.map((category: CategoryType) => {
                        return category.foods.map(food => (
                            <Card key={food._id} className=" p-0 gap-0 ">
                                <CardContent className="p-0  ">
                                    <DialogDemo food={food} />
                                    <img src={`/pru.png`}>
                                    </img>
                                    <div className='ml-7' >
                                    </div>
                                </CardContent>
                                <CardHeader className="p-2">
                                    <div className="flex gap-6 justify-between">
                                        <CardTitle className="text-[24px] text-red-600 ">{food.name}</CardTitle>
                                    </div>
                                    <CardDescription className="flex items-center gap-1 p-0">
                                        {food.ingredients}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))
                    })}
                </div>
            </div>
        </div>
    )
}
export default Cardcomppp
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Plus } from "lucide-react";
// import { Button } from "@/components/ui/button"
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// const Cardcomppp = () => {
//     const foodCategoies = [
//         {
//             id: 1,
//             categoryName: "Appetizer",
//             foodTitle: "Finger Food",
//             img: `hool.png`,
//             price: " $12.99",
//             overview:
//                 "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//         },
//         {
//             id: 2,
//             categoryName: "Salads",
//             foodTitle: "Cranberry Brie Bites",
//             img: `img.png`,
//             price: " $12.99",
//             overview:
//                 "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//         },
//         {
//             id: 3,
//             categoryName: "Lunch favorites",
//             foodTitle: "Sunshine Stackers ",
//             img: `suret.png`,
//             price: " $12.99",
//             overview:
//                 "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//         },
//         {
//             id: 4,
//             categoryName: "Salads",
//             foodTitle: "Sunshine Stackers ",
//             img: `hool.png`,
//             price: " $12.99",
//             overview:
//                 "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//         },
//         {
//             id: 5,
//             categoryName: "Salads",
//             foodTitle: "Sunshine Stackers ",
//             img: `pru.png`,
//             price: " $12.99",
//             overview:
//                 "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//         },
//     ];



//     return (
//         <div>
//               <Plus className="text-red-600"></Plus>

//             <div className="p-8 bg-[#404040]" >
//                 <h3 className="text-3xl font-semibold flex ml-20 ">Lunch favorites</h3>
//                 <div className="grid grid-cols-3 items-center justify-items-center justify-self-center w-fit  gap-8  font-[familyname:var(--font-geist-sans)]  ">
//                     {foodCategoies.map((category) => {

//                         return <Card key={category.id} className=" p-0 gap-0 ">

//                             <CardContent className="p-0  ">
//                                 <img src={`${category.img}`}>

//                                 </img>
//                                 <div className="w-[40px] h-[40px] bg-white rounded-full absolute top-40 right-10 flex items-center justify-around gap-10 ">
                                  
//                                 </div>

//                             </CardContent>
                         
//                             <CardHeader className="p-2">
//                                 <div className="flex gap-6 justify-between">
//                                     <CardTitle className="text-[24px] text-red-600 ">{category.foodTitle}</CardTitle><span className="">{category.price}</span>
//                                 </div>

//                                 <CardDescription className="flex items-center gap-1 p-0">
//                                     {category.overview}
//                                 </CardDescription>


//                             </CardHeader>
//                         </Card>
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Cardcomppp