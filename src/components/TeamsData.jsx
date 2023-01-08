import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { useSidebar } from "../context/SideBarContext";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    color: white;
    border-radius: 5px;
    padding: 0.1rem 1rem;
    border: white 1px solid;
    cursor: pointer;
    background-color: #074684;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    border-color: transparent;
    color: white;
    background-color: black;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
    opacity: 0.7;
  }
`;

function TeamsData() {
  const {
    arr,
    setArr,
    handleClick,
    bg,
    setBg,
    currentItems,
    pageCount,
    handlePageClick,
  } = useSidebar();
  const [sort, setSort] = useState(true);
  const toggleActive = (i) => {
    if (i === bg.isActive) {
      setBg({
        isActive: null,
      });
    } else {
      setBg({
        isActive: i,
      });
    }
  };

  const sortAscending = () => {
    var t = arr.sort((a, b) => b.city.localeCompare(a.city));
    setArr([...t]);
    setSort(false);
  };

  const sortDescending = () => {
    var x = arr.sort((a, b) => a.city.localeCompare(b.city));
    setArr([...x]);
    setSort(true);
  };

  return (
    <>
      <Table hover size="md">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>
              City{" "}
              <span>
                {sort ? (
                  <MdExpandLess onClick={sortAscending} />
                ) : (
                  <MdExpandMore onClick={sortDescending} />
                )}
              </span>{" "}
            </th>
            <th>Abbreviation</th>
            <th>Conference</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody style={{ background: "#f8fbfd" }}>
          {currentItems.map((team) => (
            <tr
              id={team.id}
              style={
                bg.isActive === team.id
                  ? { background: "#d7dfe5" }
                  : { background: "" }
              }
              onClick={async () => {
                await handleClick(team.id, team.name, team.full_name);
                toggleActive(team.id);
              }}
              key={team.id}
            >
              <td>{team.name}</td>
              <td>{team.city}</td>
              <td>{team.abbreviation}</td>
              <td>{team.conference}</td>
              <td>{team.division}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MyPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

export default TeamsData;
