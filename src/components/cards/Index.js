import { CardContainer, CardImage, CardBody } from "./CardElements";

const Card = ({ img, alt, spanText, spanText2 }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={alt} />
      <CardBody>{spanText}</CardBody>
      <CardBody>{spanText2}</CardBody>
    </CardContainer>
  );
};

export default Card;
