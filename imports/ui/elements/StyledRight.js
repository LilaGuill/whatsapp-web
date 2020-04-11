import styled, { css } from "styled-components";

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;

  ${({ OPvisible }) =>
    OPvisible &&
    css`
      width: 50%;
      border-right: 2px solid rgba(0, 0, 0, 0.2);
    `}
`;

export default StyledRight;
