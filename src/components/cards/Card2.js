import { CardContainer, CardImage, CardHeader, CardBody, CardP } from "./CardElements";

const Card = ({ img, alt, headerText, spanText, spanText2 }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={alt} />
      <CardHeader>{headerText}</CardHeader>
      <CardBody>
        Total songs: <CardP>{spanText}</CardP>
      </CardBody>
      <CardBody>
        By <CardP>{spanText2}</CardP>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
