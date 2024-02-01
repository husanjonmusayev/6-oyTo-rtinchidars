import React from "react";
import styled from "styled-components";

const Hed = styled.header`
  padding: 20px 150px;
  width: 100%;
  background: #5361e4;
`;

const ContentStayle = styled.div`
  max-width: 1150px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UlStayle = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Ahref = styled.a`
  text-decoration: none;
  color: var(--White, #fff);
  font-family: "Circular Std";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const SelectColor = styled.select`
  padding: 5px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #5361e4;
  font-family: "Circular Std";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Btn = styled.a`
  color: #000000;
  border-radius: 12px;
  background: var(--White, #fff);
  text-decoration: none;
  padding: 10px 24px;
  border: 2px solid white;
  transition: all 0.5s;
`;

export default function Header() {
  return (
    <Hed>
      <ContentStayle>
        <div>
          <a href="#">
            <img src="/logo.png" alt="logotive" />
          </a>
        </div>
        <nav>
          <UlStayle>
            <li>
              <Ahref>Vakansiyalar</Ahref>
            </li>
            <li>
              <Ahref>Kandidatlar</Ahref>
            </li>
            <li>
              <Ahref>Kompaniyalar</Ahref>
            </li>
            <li>
              <Ahref>Xizmatlar</Ahref>
            </li>
            <li>
              <Ahref>Ta’lim</Ahref>
            </li>
          </UlStayle>
        </nav>
        <HeaderEnd>
          <SelectColor>
            <option value="uz">O'z</option>
            <option value="ru">Ru</option>
          </SelectColor>
          <Btn>Boshlash</Btn>
        </HeaderEnd>
      </ContentStayle>
    </Hed>
  );
}
