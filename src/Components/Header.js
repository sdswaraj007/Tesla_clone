import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <Container>
      <a href="https://www.tesla.com/" target="_blank">
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Leftmenu>
        <a href="">tesla s</a>

        <a href="">tesla 3</a>

        <a href="">tesla x</a>

        <a href="">tesla y</a>
      </Leftmenu>
      <Rightmenu>
        <a href="">shop</a>
        <a href="">tesla account</a>
        <Custom onClick={() => setMenu(false)}></Custom>
      </Rightmenu>
      <Burgernav move={menu}>
        <Close>
          <CloseI onClick={() => setMenu(true)}></CloseI>
        </Close>
        <li>
          <a href="#">Tesla Roadster</a>
        </li>
        <li>
          <a href="#">Tesla Model S</a>
        </li>
        <li>
          <a href="#">Tesla Model 3</a>
        </li>
        <li>
          <a href="#">Tesla Model Y</a>
        </li>
        <li>
          <a href="#">Tesla Model x</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Use inventory</a>
        </li>
        <li>
          <a href="#">Exesting Inventory</a>
        </li>
        <li>
          <a href="#">Exesting Inventory</a>
        </li>
        <li>
          <a href="#">Exesting Inventory</a>
        </li>
      </Burgernav>
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
  right: 0;
  left: 0;
  z-index: 1;
`;

const Leftmenu = styled.div`
  display: flex;
  ${"" /* align-items: center; */}
  justify-content:center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const Custom = styled(MenuIcon)`
  cursor: pointer;
`;

const Close = styled.div`
  ${"" /* cursor: pointer; */}
  display: flex;
  justify-content: flex-end;
`;
const CloseI = styled(CloseIcon)`
  cursor: pointer;
`;

const Burgernav = styled.div`
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
  }
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  height: 100vh;
  text-align: left;
  width: 300px;
  padding: 20px;
  z-index: 16px;
  transform: ${(prop) => (prop.move ? `translateX(100%) ` : `translateX(0)`)};
  transition: transform 0.3s ease-in;
  li {
    list-style-type: none;
    border-bottom: 1px solid green;
    padding: 20px 0;
  }
`;
