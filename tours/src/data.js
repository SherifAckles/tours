import tour1 from './assets/images/tour-1.jpeg'
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    paragraph:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia",
  },
];
export const tours = [
  {
    id: 1,
    image: tour1,
    title: "Tibet Adventure",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque vitaeexercitationem fugit qui corporis",
    date: "August 26th, 2020",
    price: 2100,
    duration: 6,
    location: "China",
  },
  {
    id: 2,
    image: tour2,
    title: "Best Of Java",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque vitaeexercitationem fugit qui corporis",
    date: "October 1th, 2020",
    price: 1400,
    duration: 11,
    location: "Indonesia",
  },
  {
    id: 3,
    image: tour3,
    title: "Explore Hong Kong",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque vitaeexercitationem fugit qui corporis",
    date: "September 15th, 2020",
    price: 5000,
    duration: 8,
    location: "Hong Kong",
  },
  {
    id: 4,
    image: tour4,
    title: "Kenya Highlights",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque vitaeexercitationem fugit qui corporis",
    date: "December 5th, 2019",
    price: 3300,
    duration: 20,
    location: "Kenya",
  },
];
