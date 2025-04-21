const DATA = [{
  category: "Fruits",
  items: [
    {
      name: "Apple",
      price: "$1",
      stocked: true
    },
    {
      name: "Dragonfruit",
      price: "$1",
      stocked: true
    },
    {
      name: "Passionfruit",
      price: "$2",
      stocked: false
    }
  ]
},
{
  category: "Vegetables",
  items: [
    {
      name: "Spinach",
      price: "$2",
      stocked: true
    },
    {
      name: "Pumpkin",
      price: "$4",
      stocked: false
    },
    {
      name: "Peas",
      price: "$1",
      stocked: true
    }
  ]
}
]




import Header from "./components/Header";
import Footer from './components/Footer';
import CardComp from './components/CardComp';
import CardCompp from './components/Cardcompp';
import Cardcomppp from './components/Cardcomppp';
import CatoComp from './components/CatoComp';
import { BASE_URL } from "./constants";

  
  



export default async function Home() {
  const response = await fetch (`${BASE_URL}/food`,{
    headers:{
      "Content-Type":"application/json",}
  });
  const foods = await response.json();
  
  return (
    <div>
      <Header></Header>
      <CatoComp></CatoComp>
      <CardComp></CardComp>
      <CardCompp></CardCompp>
      <Cardcomppp></Cardcomppp>

      <Footer></Footer>
    </div>
   
    
  );
}
