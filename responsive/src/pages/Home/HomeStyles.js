import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: grid;
  row-gap: ${px2vw(20)};
  column-gap: ${px2vw(20)};
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, ${px2vw(320, 768)});
    row-gap: ${px2vw(40)};
    column-gap: ${px2vw(40)};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, ${px2vw(300)});
    row-gap: ${px2vw(10)};
    column-gap: ${px2vw(10)};
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(310, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
