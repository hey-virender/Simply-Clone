import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CollectionCards = () => {
  const collectionItems = [
    {
      id: 1,
      url: "collection1.webp",
      info: "These bites are made with love to celebrate love",
      heading: "True Love Box - Box with 75 pcs. Cripy Carrie Bites",
      price: "From $100",
    },
    {
      id: 2,
      url: "collection2.webp",
      info: "Mix chocolate bites",
      heading: "Premium Box - Exclusive gift box with 50 bites",
      price: "From $100",
    },
    {
      id: 3,
      url: "collection3.webp",
      info: "Raspberriess, Persian licorice and white cholocate",
      heading: "Pinky Polly - Box with 75 pcs. bites",
      price: "From $120",
    },
    {
      id: 4,
      url: "collection4.webp",
      info: "Mix of Bites with chocolate coating",
      heading: "Grainy Mix - Box with 75 pcs. bites",
      price: "From $130",
    },
    {
      id: 5,
      url: "collection5.webp",
      info: "Mix chocolate bites",
      heading: "The Ultimate Box - Exclusive gift box with 80 bites",
      price: "From $160",
    },
    {
      id: 6,
      url: "collection6.webp",
      info: "Crispy Cariie, Saly Fred og Persian Perry",
      heading: "Solid Mix - Box with 75 pcs. Bites",
      price: "From $100",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      className="flex"
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={500}
      containerClass=""
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="w-1/6"
    >
      {collectionItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default CollectionCards;
