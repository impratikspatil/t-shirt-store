import tshirt1 from "../assets/t-shirt.jpg";
import tshirtmockup from "../assets/t-shirt-mockup.png";
import tshirtnevergiveup from "../assets/t-shirt-never-give-up.png";
import tshirt_progress_over_perfection from "../assets/tshirt1.png";

const BASE_URL = "https://impratikspatil.github.io/t-shirt-store/";
// const BASE_URL = "http://localhost:5174/t-shirt-store/̀";



const products = [
  {
    id: 1,
    name: "Marathi Swag",
    price: 299,
    category: "Marathi",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],

    image: tshirt_progress_over_perfection,

    imageUrl: `${BASE_URL}src/assets/tshirt1.png`
  },

  {
    id: 2,
    name: "Marathi Pride",
    price: 349,
    category: "Marathi",
    colors: ["Red", "Black"],
    sizes: ["M", "L"],

    image: tshirtmockup,

    imageUrl: `${BASE_URL}src/assets/t-shirt-mockup.png`
  },

  {
    id: 3,
    name: "Gym Beast",
    price: 399,
    category: "Gym",
    colors: ["Black"],
    sizes: ["L", "XL"],

    image: tshirtnevergiveup,

    imageUrl: `${BASE_URL}src/assets/t-shirt-never-give-up.png`
  },

  {
    id: 4,
    name: "No Pain No Gain",
    price: 379,
    category: "Gym",
    colors: ["Grey"],
    sizes: ["M", "L"],

    image: tshirt_progress_over_perfection,

    imageUrl: `${BASE_URL}src/assets/progress-over-perfect.png`
  },

  {
    id: 5,
    name: "Friends Forever",
    price: 279,
    category: "Friends",
    colors: ["Blue"],
    sizes: ["S", "M"],

    image: tshirtmockup,

    imageUrl: `${BASE_URL}src/assets/t-shirt-mockup.png`
  },

  {
    id: 6,
    name: "Squad Goals",
    price: 299,
    category: "Friends",
    colors: ["White"],
    sizes: ["M", "L"],

    image: tshirtnevergiveup,

    imageUrl: `${BASE_URL}src/assets/t-shirt-never-give-up.png`
  },

  {
    id: 7,
    name: "Attitude King",
    price: 349,
    category: "Marathi",
    colors: ["Black"],
    sizes: ["M", "L"],

    image: tshirt_progress_over_perfection,

    imageUrl: `${BASE_URL}src/assets/progress_over_perfect.png`
  },

  {
    id: 8,
    name: "Minimal Vibe",
    price: 299,
    category: "Friends",
    colors: ["White"],
    sizes: ["S", "M"],

    image: tshirtnevergiveup,

    imageUrl: `${BASE_URL}src/assets/t-shirt-never-give-up.png`
  }
];

export default products;