import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { useSidebar } from "../context/SideBarContext";

const Wrap = styled.div`
  width: 40vw;
  text-align: left;
  background: white;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
  align-items: center;
  background: #d7dfe5;
  z-index: 15;
  & button {
    border: none;
    outline: none;
    background: transparent;
    font-weight: bold;
  }
`;
const Body = styled.div`
  padding: 2rem;
  color: black;
  font-size: 1em;
  & span {
    font-weight: bold;
  }
`;
const InputData = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  & label {
    width: 50%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  & input {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 50%;
    background: transparent;
    border: none;
    outline: none;
    font-weight: bold;
  }
`;

const SideBar = () => {
  const { setBg,  name, fullName, setShowSidebar, homeTeam, visitorTeam, homeTeamScore, visitorTeamScore, date, totalGames } = useSidebar();

  const handleClose = () => {
    setBg({
      isActive: null
    });
    setShowSidebar(false);
  }
  return (
    <>
      <div
        className="container-fluid position-fixed"
        style={{
          zIndex: "10",
          background: "rgba(122, 119, 119, 0.17)",
          width: "100vw",
          height: "100vh",
        }}
      ></div>

      <div className=" position-fixed top-0 end-0 " style={{ zIndex: "11" }}>
        <div className="row">
          <div className="col-auto min-vh-100 ">
            <Wrap>
              <Header>
                <h1>{name}</h1>
                <button>
                  <ImCross onClick={handleClose} />
                </button>
              </Header>
              <Body>
                <InputData>
                  <label style={{ fontWeight: "normal" }}>Team Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    style={{ fontWeight: "normal" }}
                    readOnly
                  />
                </InputData>
                <InputData>
                  <label style={{ fontWeight: "normal" }}>
                    Total Games in 2021
                  </label>
                  <input
                    type="text"
                    value={totalGames}
                    style={{ fontWeight: "normal" }}
                    readOnly
                  />
                </InputData>
                <span>Random Game Details:</span>
                <InputData>
                  <label>Date</label>
                  <input type="text" value={date} readOnly />
                </InputData>
                <InputData>
                  <label>Home Team</label>
                  <input type="text" value={homeTeam} readOnly />
                </InputData>
                <InputData>
                  <label>Home Team Score</label>
                  <input type="text" value={homeTeamScore} readOnly />
                </InputData>
                <InputData>
                  <label>Visitor Team</label>
                  <input type="text" value={visitorTeam} readOnly />
                </InputData>
                <InputData>
                  <label>Visitor Team Score</label>
                  <input type="text" value={visitorTeamScore} readOnly />
                </InputData>
              </Body>
            </Wrap>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
