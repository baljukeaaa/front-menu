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

const CardComp = async () => {
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
                <h3 className="text-3xl font-semibold flex ml-20 ">Appetizers</h3>
                <div className="grid grid-cols-3 items-center justify-items-center justify-self-center w-fit  gap-8  font-[familyname:var(--font-geist-sans)]  ">
                    {categories.map((category: CategoryType) => {
                        return category.foods.map(food => (
                            <Card key={food._id} className=" p-0 gap-0 ">
                                <CardContent className="p-0  ">
                                    <DialogDemo food={food} />
                                    <img src={`/suret.png`}>
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
export default CardComp