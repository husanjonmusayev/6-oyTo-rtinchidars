import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  padding: 32px 38px;
  gap: 42px;
  margin: 60px;
  border-radius: 24px;
  background: #fff;
  width: 778px;
  height: 1270px;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderTitle = styled.h1`
  margin-bottom: 16px;
  color: var(--Dark, #2a2941);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
const HeaderHero = styled.h2`
  color: var(--30-black, #b3b3b3);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 130%; /* 20.8px */
  margin-bottom: 32px;
`;

const FormHero = styled.div`
  cursor: pointer;
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
`;
const FileInput = styled.input`
  display: none;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 84px;
  height: 84px;
  border-radius: 84px;
`;
const Label = styled.p`
  color: var(--Mai, #5361e4);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const FormInput = styled.input`
  display: flex;
  width: 702px;
  height: 56px;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Gray, #6e6d77);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  outline: none;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const MainTitle = styled.h2`
  margin-bottom: 10px;
  color: var(--Dark, #2a2941);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Chaild = styled.img`
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
`;

const Region = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

const RegionText = styled.p`
  margin: 20px 0px 10px 5px;
  color: var(--Dark, #2a2941);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;
const RegionSelect = styled.select`
  width: 331px;
  height: 56px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  outline: none;
`;
const Maxwid = styled.select`
  display: flex;
  width: 702px;
  height: 56px;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Gray, #6e6d77);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Circular Std";
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  outline: none;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  resize: none;
  padding: 18px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  outline: none;
`;
const Formfooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 42px 0;
`;

const Back = styled.a`
  text-decoration: none;
  padding: 18px 25px;
  color: #000000;
  border-radius: 16px;
  background: var(--Mai, #ffffff);
  transition: all 0.5s;
`;

const Go = styled.a`
  padding: 18px 25px;
  color: #fff;
  border-radius: 16px;
  background: var(--Mai, #5361e4);
  text-decoration: none;
  border: 2px solid #5361e4;
  transition: all 0.5s;
`;

export default function Hero() {
  const inputRef = useRef(null);
  const [image, setImgage] = useState("");

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChang = (evint) => {
    const file = evint.target.files[0];
    console.log(file);
    setImgage(evint.target.files[0]);
  };
  return (
    <FormStyle>
      <div className="formHeader">
        <HeaderTitle>Kompaniya ma’lumotlari</HeaderTitle>
        <HeaderHero>Kompaniya haqidagi ma’lumotlarni kiriting</HeaderHero>
      </div>
      <FormHero onClick={handleImgClick}>
        {image ? (
          <UserImg src={URL.createObjectURL(image)} alt="UserImg" />
        ) : (
          <UserImg src="/Ellipse.png" alt="UserImg" />
        )}
        <Label>Yuklash</Label>
        <FileInput onChange={handleImgChang} type="file" ref={inputRef} />
      </FormHero>
      <div className="formInputs">
        <Label>Kompaniya nomi *</Label>
        <FormInput type="text" placeholder="Kompaniya nomi" />

        <Label>Email *</Label>
        <FormInput type="text" placeholder="Email" />

        <Label>Telefon raqami *</Label>
        <FormInput type="text" placeholder="UZ +9989" />
      </div>
      <div className="formMain">
        <MainTitle>Linklar *</MainTitle>
        <Links>
          <div>
            <a href="#">
              <Chaild src="/yer.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <Chaild src="/instagram.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <Chaild src="/telegram.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <Chaild src="/facebook.png" alt="icon" />
            </a>
          </div>
          <div>
            <a href="#">
              <Chaild src="/github.png" alt="icon" />
            </a>
          </div>
        </Links>
      </div>
      <Region>
        <div>
          <RegionText>Davlat *</RegionText>
          <RegionSelect>
            <option value="uz">Davlat</option>
          </RegionSelect>
        </div>
        <div>
          <RegionText>Shahar *</RegionText>
          <RegionSelect>
            <option value="uz">Shahar</option>
          </RegionSelect>
        </div>
      </Region>
      <div>
        <Label>Yashash joyi *</Label>
        <FormInput type="text" placeholder="Yashash joyi" />
        <Label>Hodimlar soni *</Label>
        <Maxwid>
          <option value="uz">Hodimlar soni</option>
        </Maxwid>
      </div>
      <div className="formDesc">
        <Label>Izoh *</Label>
        <Textarea
          placeholder="Kompaniya haqida izoh qoldiring"
          cols="30"
          rows="10"
        ></Textarea>
      </div>
      <Formfooter>
        <Back>Ortga</Back>
        <Go>Keyingisi</Go>
      </Formfooter>
    </FormStyle>
  );
}
