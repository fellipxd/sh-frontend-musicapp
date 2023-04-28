import {
  CardContainer,
  CardImage,
  CardWrapper,
  CardBody,
  CardP,
} from "./CardElements";

const CardThree = ({ img, alt, spanText, spanText2 }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={alt} />
      <CardWrapper>
        <CardBody>
          {spanText}
        </CardBody>
        <CardP>{spanText2}</CardP>
      </CardWrapper>
    </CardContainer>
  );
};

export default CardThree;
