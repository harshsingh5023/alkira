import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import TeamsData from "./TeamsData";
import SideBar from "./SideBar";
import { useSidebar } from "../context/SideBarContext";

const Container = styled.div`
  display: flex;
  align-items: left;
  text-align: center;
  border: 2px solid #074684;
  border-radius: 5px;
  width: 30vw;
  margin-bottom: 15px;
`;
const Icon = styled.span`
  padding: 10px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const Heading = styled.h1`
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const LandingPage = () => {
  const {setArr, data, showSidebar } = useSidebar();
  const handleSearch = (e) => {
    
      if(e){
        setArr(
          data.filter(ele => {
            return ele.name.toLowerCase().includes(e.toLowerCase());
          })
          )
      }else{
        setArr(data)
      }
  }
  return (
    <div>
      {showSidebar && <SideBar />}

      <Heading>NBA TEAMS</Heading>
      <Container>
        <Icon>
          <BiSearch />
        </Icon>
        <Input type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
      </Container>
      <TeamsData />
    </div>
  );
};

export default LandingPage;
