import {
  CardContainer,
  CardImage,
  CardWrapper,
  CardBody,
  CardP,
} from "./CardElements";

const Card3 = ({ img, alt, spanText, spanText2 }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={alt} />
      <CardWrapper>
        <CardBody>
          Total songs: <CardP>{spanText}</CardP>
        </CardBody>
        <CardP>{spanText2}</CardP>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card3;
