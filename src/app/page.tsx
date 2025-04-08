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

export default function Home() {
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
