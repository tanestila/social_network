import React from "react";
import s from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let currentPage = props.currentPage;

  let startPage;
  let endPage;
  if (pagesCount <= 10) {
    startPage = 1;
    endPage = pagesCount;
  } else if (pagesCount > 10) {
    if (currentPage > 6) {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
    startPage = 1;
    endPage = 10;
  }

  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={
              props.currentPage === p ? s.selectedPage + " " + s.page : s.page
            }
            onClick={() => {
              props.onPageChanged(p);
            }}
            key={p}
          >
            {" " + p + " "}
          </span>
        );
      })}
      {pagesCount > 10 ? (
        <>
          ...
          <span
            className={
              props.currentPage === pagesCount
                ? s.selectedPage + " " + s.page
                : s.page
            }
            onClick={() => {
              props.onPageChanged(pagesCount);
            }}
            key={pagesCount}
          >
            {" " + pagesCount + " "}
          </span>
        </>
      ) : null}
    </div>
  );
};

export default Paginator;
