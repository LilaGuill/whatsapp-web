import styled from "styled-components";

const StyledOtherProfile = styled.div`
  width: 20%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;

  .__scroll {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 0.2rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .OPH--heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.9rem;
  }
  .iconOtherProfile {
    font-size: 2rem;
    margin-right: 3rem;
    color: #929fa6;
    cursor: pointer;
  }
  .OPH--title {
    font-size: 1.6rem;
  }
  .OP--imageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 5.6rem);
    height: calc(10.8rem - 5.6rem);
    padding: 2.8rem;
    padding-bottom: 1.7rem;
    background: white;
    margin-bottom: 1rem;
  }
  .OP--image {
    width: 27rem;
    height: 27rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .OPIC--txtContainer {
    text-align: center;
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center
  }
  .OPIC--title {
    color: ${({ theme }) => theme.header.color.title};
    font-size: 22px
    margin-bottom: 0.7rem;
  }
  .OPIC--sbTitle {
    color: ${({ theme }) => theme.header.color.subTitle};
    font-size: 16px
  }
`;

export default StyledOtherProfile;
