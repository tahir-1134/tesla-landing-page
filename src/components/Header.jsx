import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  function handleClick() {
    setBurgerStatus(!burgerStatus);
  }

  return (
    <Container>
      <a href="#">
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="">Model S</a>
        </p>
        <p>
          <a href="">Model 3</a>
        </p>
        <p>
          <a href="">Model X</a>
        </p>
        <p>
          <a href="">Model Y</a>
        </p>
        <p>
          <a href="">Solar Roof</a>
        </p>
        <p>
          <a href="">Solar Panels</a>
        </p>
      </Menu>
      <RightMenu>
        <p>
          <a href="">Shop</a>
        </p>
        <p>
          <a href="">Account</a>
        </p>
      </RightMenu>
      <CustomMenu onClick={handleClick} />
      {burgerStatus && (
        <BurgerNav>
          <CloseWrapper>
            <CustomClose onClick={handleClick} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">Cyber Truck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Power Wall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utility</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    width: 124px;
    height: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  p {
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    margin-right: 15px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 250px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 1);

    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
