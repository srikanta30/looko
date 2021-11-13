import "./results.css";
import image1 from "./image.png";
import image2 from "./image1.png";
import image3 from "./image2.png";
import image4 from "./image3.png";

function Results() {

  const suggestions = [
    [
      "Try sunglasses it will give you good look",
      "Try  toned jeans",
      "Try  Shoes instead off sandals",
      "Try  a black hat ",
    ],
  
    [
      "Try  a denim jacket",
      "Try  a white shirt",
      "Try  a tie  for good looks",
      "Try  a watch",
    ],
  
    [
      "Try a white shirt with black pant",
      "Try T-shirt for the formal look",
      "Try a black jacket",
      "Try a black shirt",
    ],
    [
      "Try using White  shoes",
      "Try to get a haircut",
      "Try leather jacket",
      "Try snickers for your better look",
    ],
  
    [
      "Try using round hat for more attractive look",
      "Try goggles which give you cool look ",
      "Try to change hairstyle its looking so ugly",
    ],
  
    [
      "Try a cotton shirt with narrow jeans",
      "Try a black jacket with white shirt",
      "Try using blazer with black shoes",
      "Try a combination of black and white color",
    ],
  ];

  return (
    <div className="resultspara">
      <ul>
        <li>Outfit looks good - {Math.round(Math.random() * 100)} %</li>
        <li>Hair matches - {Math.round(Math.random() * 100)} %</li>
        <li id="marginli">{suggestions[0][Math.round(Math.random() * 3)]}.</li>
        <li>{suggestions[4][Math.round(Math.random() * 2)]}.</li>
        <li>{suggestions[5][Math.round(Math.random() * 3)]}.</li>
      </ul>
      <h4>Upgrade your style: </h4>
      <div className="stylecontainer">
        <a href="https://www.myntra.com/jeans"><img src={image1} alt="image1" className="styleimage"/></a>
        <a href="https://www.myntra.com/sunglasses"><img src={image2} alt="image1" className="styleimage"/></a>
      </div>
      <div className="stylecontainer">
      <a href="https://www.myntra.com/shoes"><img src={image3} alt="image1" className="styleimage"/></a>
      <a href="https://www.flipkart.com/q/hair-gel"><img src={image4} alt="image1"className="styleimage"/></a>
      </div>
      
    </div>
  );
}

export default Results;
