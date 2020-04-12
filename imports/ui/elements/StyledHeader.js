import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 3.2rem);
  height: 6%;
  background: ${({ theme }) => theme.header.color.background};
  padding: 1rem 1.6rem;

  .icons--left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 14rem;
    height: 4rem;
  }
  .small {
    width: 4rem;
  }
  .greyIcon {
    color: ${({ theme }) => theme.header.color.iconGrey};
    font-size: 1.5rem;
    cursor: pointer;
  }
  .headerMsg--container {
    text-align: left;
    width: 45rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .headerMsg--title {
    color: ${({ theme }) => theme.header.color.title};
    font-size: 22px;
    padding-left: 10px;
  }
  .headerMsg--sbTitle {
    color: ${({ theme }) => theme.header.color.subTitle};
    font-size: 20px;
    padding-left: 10px;
  }
`;

export default StyledHeader;
