import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; 
import spaghettiImg from "../../assets/HeroBild/spaghetti.png"; 
import teppichImg from "../../assets/HeroBild/teppich.jpg"; 
import carrotImg from "../../assets/HeroBild/carrot.jpg"; 
import nutsImg from "../../assets/HeroBild/nuts.jpg"; 
import appleImg from "../../assets/HeroBild/apple.jpg"; 
import "./HeroBild.css"; 

type Product = {
  name: string;
  img: string;
};

const productsList: Product[] = [
  { name: "teppich", img: teppichImg },
  { name: "spaghetti", img: spaghettiImg },
  { name: "Морковь", img: carrotImg },
  { name: "Орехи", img: nutsImg },
  { name: "Яблоко", img: appleImg },
];

const finalPositions = [
  { x: 150, y: 100 },
  { x: 170, y: 120 },
  { x: 250, y: 400 },
  { x: 350, y: 400 },
  { x: 450, y: 400 },
];

export default function HeroBild() {
  const [flyingProducts, setFlyingProducts] = useState<Product[]>([]);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    productsList.forEach((p, index) => {
      const timeout = window.setTimeout(() => {
        setFlyingProducts((prev) => [...prev, p]);
      }, index * 500);
      timeouts.current.push(timeout);
    });

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="container">
      {flyingProducts.map((product, i) => (
        <motion.img
          key={product.name}
          src={product.img}
          alt={product.name}
          className={`product ${product.name}`}
          initial={{
            x: Math.random() * 300,
            y: -100,
            scale: 1,
          }}
          animate={{
            x: finalPositions[i]?.x || 0,
            y: finalPositions[i]?.y || 0,
            scale: 1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
