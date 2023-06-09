import { CardImage2, CardBody2, CardContainer2 } from "./CardElements";

const CardFour = ({ img, alt, spanText }) => {
  return (
    <CardContainer2>
      <CardImage2 src={img} alt={alt} />
      <CardBody2>{spanText}</CardBody2>
    </CardContainer2>
  );
};

export default CardFour;
