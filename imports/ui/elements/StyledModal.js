import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1000000000;
  .modal--header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #00bfa5;
    padding-left: 2.5rem;
    height: 4.9rem;
    width: calc(100% - 2.5rem);
  }
  .modal--header__icon {
    margin-right: 2.4rem;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .modal--header__title {
    font-weight: 200;
    font-size: 22px;
    color: white;
  }
  .modal--body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 49.3rem;
    background: #e6e6e6;
  }
  .modal--body__fab {
    position: absolute;
    bottom: -3rem;
    right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #09e85e;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: white;
  }
  .modal--footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15rem;
    width: calc(100% - 4rem);
    padding: 0 2rem;
    background: #d8d8d8;
  }
  .modal--footer__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(9.5rem - 0.8rem);
    height: calc(9.5rem - 0.8rem);
    padding: 0.4rem;
    background: white;
    margin-right: 0.8rem;
    color: #19aef5;
  }
`;

export default StyledModal;
