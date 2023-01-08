import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [id, setId] = useState("1");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [bg, setBg] = useState({
    isActive: null,
  });
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [totalGames, setTotalGames] = useState("");
  const [homeTeam, setHomeTeam] = useState("");
  const [visitorTeam, setVisitorTeam] = useState("");
  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [visitorTeamScore, setVisitorTeamScore] = useState("");
  const [date, setDate] = useState("");

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 7;
  const currentItems = arr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(arr.length / 7);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 7) % arr.length;
    setItemOffset(newOffset);
  };

  const fetchData = () => {
    fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}`
    )
      .then((res) => res.json())
      .then((items) => {
        var temp = [...items.data];
        var randomGame = temp[Math.floor(Math.random() * temp.length)];
        setTotalGames(items.meta.total_count);
        setDate(randomGame.date.split("T")[0]);
        setHomeTeam(randomGame.home_team.name);
        setHomeTeamScore(randomGame.home_team_score);
        setVisitorTeam(randomGame.visitor_team.name);
        setVisitorTeamScore(randomGame.visitor_team_score);
        setShowSidebar(true);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = async (id, name, fullname) => {
    setId(id);
    setName(name);
    setFullName(fullname);
    console.log(name);
    await fetchData();
  };

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((res) => res.json())
      .then((dat) => {
        setArr(dat.data);
        setData(dat.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const values = {
    handleClick,
    name,
    fullName,
    showSidebar,
    setShowSidebar,
    bg,
    setBg,
    totalGames,
    homeTeam,
    visitorTeam,
    homeTeamScore,
    visitorTeamScore,
    date,
    data,
    setData,
    pageCount,
    handlePageClick,
    currentItems,
    setArr,
    arr,
  };

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);
