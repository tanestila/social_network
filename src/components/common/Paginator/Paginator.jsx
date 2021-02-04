import React, { useState } from "react";
import s from "./Paginator.module.css";

let Paginator = ({
  totalUsersCount,
  pageSize,
  portionSize = 10,
  onPageChanged,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / portionSize);

  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  console.log(leftPortionNumber);
  console.log(rightPortionNumber);

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              className={
                currentPage === p ? s.selectedPage + " " + s.page : s.page
              }
              onClick={() => {
                onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
