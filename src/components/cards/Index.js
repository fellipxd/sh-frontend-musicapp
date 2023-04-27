import { CardContainer, CardImage, CardHeader, CardBody } from "./CardElements";

const Card = ({ img, alt, headerText, spanText }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={alt} />
      <CardHeader>{headerText}</CardHeader>
      <CardBody>{spanText}</CardBody>
    </CardContainer>
  );
};

export default Card;
