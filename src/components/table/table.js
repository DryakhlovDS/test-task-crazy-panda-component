import React, { useState } from "react";
import Row from "../column/row";
import FilterPanda from "../filter/filter";
import PaginationPanda from "../pagination/pagination";
import "./table.scss";

function Table({
  title = "Default title",
  rows = ["1", "2", "three", "15", "one"],
}) {
  let [sortUp, setSortUp] = useState(true);
  const [sortArray, setSortArray] = useState(rows);
  const [page, setPage] = useState(sortArray.slice(0, 50));
  let [thisPage, setThisPage] = useState(1);
  const rowsOnPage = 50;
  const totalPage = Math.ceil(sortArray.length / rowsOnPage);

  function toggleSort() {
    if (sortUp) {
      sortArray.sort((prev, next) => prev.localeCompare(next));
      sortArray.sort((prev, next) => prev - next);
    } else {
      sortArray.reverse();
    }
    setSortArray([...sortArray]);
    setSortUp(!sortUp);
    changePage(thisPage);
  }

  function changeFilter(e) {
    const subStr = e.target.value;
    let filteredArray = [];
    if (subStr !== "") {
      filteredArray = rows.filter((item) => item.includes(subStr));
    } else {
      filteredArray = rows;
    }
    setSortArray([...filteredArray]);
    setSortUp(true);
    changePage(1, filteredArray);
  }

  function changePage(currentPage = 1, arr = sortArray) {
    let startPage = (currentPage - 1) * rowsOnPage;
    let endPage = currentPage * rowsOnPage;
    setPage(arr.slice(startPage, endPage));
    setThisPage(currentPage);
  }

  const column = page.map((element, index) => {
    return <Row key={index} text={element} classMode='table-panda__row' />;
  });
  return (
    <div>
      <FilterPanda changeFilter={changeFilter} />
      <PaginationPanda
        pages={totalPage}
        curPage={thisPage}
        toggle={changePage}
      />
      <table className='table-panda'>
        <thead onClick={() => toggleSort()}>
          <Row text={title} classMode='table-panda__head' />
        </thead>
        <tbody>{column}</tbody>
      </table>
    </div>
  );
}

export default Table;
