import express from "express";
const router = express.Router();

// ---- 20 PRODUCT LIST ----
const products = [
  { _id: "1", name: "Royal Gala Apple", description: "Fresh, crispy imported apples", price: 180, image: "/images/p1.jpg" },
  { _id: "2", name: "Green Seedless Grapes", description: "Sweet and juicy seedless grapes", price: 120, image: "/images/p2.jpg" },
  { _id: "3", name: "Dole Bananas", description: "Fresh premium bananas", price: 60, image: "/images/p3.jpg" },
  { _id: "4", name: "Nagpur Oranges", description: "Sweet and tangy oranges", price: 90, image: "/images/p4.jpg" },
  { _id: "5", name: "Fresh Pomegranate", description: "Rich antioxidant-packed pomegranates", price: 150, image: "/images/p5.jpg" },

  { _id: "6", name: "Organic Tomatoes", description: "Chemical-free organic tomatoes", price: 30, image: "/images/p6.jpg" },
  { _id: "7", name: "Premium Potatoes", description: "Clean, fresh potatoes", price: 25, image: "/images/p7.jpg" },
  { _id: "8", name: "Bangalore Carrots", description: "Bright orange fresh carrots", price: 40, image: "/images/p8.jpg" },
  { _id: "9", name: "Fresh Cauliflower", description: "Clean white cauliflower", price: 45, image: "/images/p9.jpg" },
  { _id: "10", name: "Green Beans", description: "Fresh tender beans", price: 50, image: "/images/p10.jpg" },

  { _id: "11", name: "Aavin Full Cream Milk", description: "Fresh Aavin milk pack", price: 30, image: "/images/p11.jpg" },
  { _id: "12", name: "Milky Mist Curd", description: "Thick fresh curd", price: 35, image: "/images/p12.jpg" },
  { _id: "13", name: "Amul Butter", description: "Delicious creamy butter", price: 55, image: "/images/p13.jpg" },
  { _id: "14", name: "Aavin Paneer", description: "Soft and fresh paneer", price: 95, image: "/images/p14.jpg" },
  { _id: "15", name: "Amul Cheese Slices", description: "Cheese slices for sandwiches", price: 120, image: "/images/p15.jpg" },

  { _id: "16", name: "Lays Classic Salted", description: "Crispy salted chips", price: 20, image: "/images/p16.jpg" },
  { _id: "17", name: "Kurkure Masala Munch", description: "Spicy crunchy snack", price: 20, image: "/images/p17.jpg" },
  { _id: "18", name: "Oreo Chocolate Cream", description: "Crunchy chocolate cream oreo", price: 30, image: "/images/p18.jpg" },
  { _id: "19", name: "Parle-G Original", description: "Classic glucose biscuits", price: 10, image: "/images/p19.jpg" },
  { _id: "20", name: "Good Day Butter Cookies", description: "Delicious butter cookies", price: 30, image: "/images/p20.jpg" }
];

// GET Products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
