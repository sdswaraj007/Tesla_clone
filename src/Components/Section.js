import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section(props) {
  const { backimg, title, disc, leftbut, rightbut } = props;
  return (
    <Wrap bgimage={backimg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{disc}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <div className="div">
          <ButtonGroup>
            {leftbut && <LeftButton>{leftbut}</LeftButton>}
            {rightbut && <RightButton>{rightbut}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </div>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 98.9vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.bgimage}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${"" /* this for the vertical alignment (upper niche karne ke liye) */}
  align-items: center;
  ${"" /* this for the horizental alignment (age piche karne ke liye ) */}
`;

const ItemText = styled.div`
  ${"" /* line-height: 3vh; */}
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: White;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  background-color: white;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation-duration: 1.4s;
  animation-name: downtown;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  @keyframes downtown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
