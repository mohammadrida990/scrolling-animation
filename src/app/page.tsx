import Card from "./Components/Card";
import ContentPage from "./Components/Content";
import TextSection from "./Components/TextWrapper";
import ScrollHorizontel from "./Components/ScrollHorizontel";

import FullImage from "./Components/FullImage";

const data = [
  {
    title: "Card 1",
    description: "This is the first card",
    image: "/assets/moon2.jpg",
  },
  {
    title: "Card 2",
    description: "This is the second card",
    image: "/assets/moon3.jpg",
  },
  {
    title: "Card 3",
    description: "This is the third card",
    image: "/assets/moon4.avif",
  },
  {
    title: "Card 4",
    description: "This is the fourth card",
    image: "/assets/moon5.jpg",
  },
];
export default function Home() {
  return (
    <>
      <ContentPage />

      <ScrollHorizontel direction={-1400}>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </ScrollHorizontel>

      <FullImage />

      <ScrollHorizontel direction={1400}>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </ScrollHorizontel>

      <div className="mb-[300px]">
        <TextSection />
      </div>
    </>
  );
}
