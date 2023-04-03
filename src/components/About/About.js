import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            Hi, 我是胡捷翔，目前是台大碩二的學生。
            平時休閒時間喜歡追劇和運動，喜歡健身和跳舞，球類運動也不錯。
            課內時間主要花在修課和研究上，這學期修了網路攻防和軟體測試，因為我的研究方向也和資安測試相關，祝福自己可以在這學期結束前有個好的研究成果。
          </div>
          <div className="AboutBio tagline2">
            畢業順利！！！
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
//hi, my name is hu, chieh-hsiang. i'm a master student in ntuee. 