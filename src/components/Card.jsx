import styled from "styled-components";

const Cards = () => (
  <CardContainer>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVuaQbojYLTlYezNW7HPVIYO6QiLZsd8RFP86jMuySoBlJ369aVAK0Mtzo7La2hyVcxU&usqp=CAU" alt="Empty"></img>
    <CardContent>
      <TitleH1>Title</TitleH1>
      <CardRate>
        <CardRateStars>&#9733; &#9733; &#9733; &#9733; &#9734;</CardRateStars>
        <p>4/5 (666)</p>
      </CardRate>
      <TitleH3>Secondary text</TitleH3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <hr />
      <CardItems>
        <TitleH2>Subtitle</TitleH2>
        <Items>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
        </Items>
      </CardItems>
      <TitleAction>ACTION 1</TitleAction>
    </CardContent>
  </CardContainer>
);

const TitleH1 = styled.h1`
  color: black;
  margin-bottom: 0;
`;

const TitleH2 = styled.h2`
  color: black;
`;

const TitleAction = styled.h2`
  color: purple;
`;

const TitleH3 = styled.h3`
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 2rem auto;
  border: solid 0.5px grey;
  border-radius: 10px;
  box-shadow: grey;
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 0 30px;
`;

const CardRate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardRateStars = styled.div`
  padding-right: 15px;
`;

const CardItems = styled.div``;

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.p`
  background-color: #b6b6b6;
  padding: 10px;
  border-radius: 10%;
`;

export default Cards;
