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
import { ChevronRight, Facebook, Instagram, Link, } from 'lucide-react';


import Header from "./components/Header";
import Footer from './components/Footer';
import CardComp from './components/CardComp';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <CardComp></CardComp>

      <Footer></Footer>
    </div>
   
    
  );
}
