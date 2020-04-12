import styled, { css } from "styled-components";

const StyledRightImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.rightImg.color.bgGrey};

  ${(props) =>
    props.right &&
    css`
      width: 100%;
      height: 100%;
    `}

  .rightImg--image {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2.8rem;
  }
  .rightImg--title {
    font-size: 26px;
    margin-bottom: 1.8rem;
    margin-top: 2.8rem;
    color: ${({ theme }) => theme.rightImg.color.darkGrey};
    font-weight: 400;
  }
  .rightImg--div {
    margin-bottom: 3rem;
    width: 42rem;
  }
  .rightImg--p {
    text-align: center;
    color: ${({ theme }) => theme.rightImg.color.mediumGrey};
    font-size: 22px;
    line-height: 2rem;
    margin-bottom: 3.4rem;
  }
  .rightImg--divider {
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.rightImg.color.lightGrey};
    margin-bottom: 0.1rem;
  }
`;

export default StyledRightImg;
