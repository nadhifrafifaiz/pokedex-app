import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  nextPage: () => any;
  prevPage: () => any;
  directPage: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    totalItems,
    itemsPerPage,
    currentPage,
    prevPage,
    nextPage,
    directPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs md:text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">
          {currentPage === 0 ? 1 : itemsPerPage * currentPage + currentPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 ">
          {itemsPerPage * currentPage + itemsPerPage + currentPage}
        </span>{" "}
        of <span className="font-semibold text-gray-900 ">{totalItems}</span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage}
        >
          <div className="flex items-end justify-end">
            <p>Prev</p>
          </div>
        </button>
        {pageNumbers.map((number) => {
          if (number >= currentPage - 2 && number <= currentPage + 2) {
            return (
              <button
                key={number}
                className={`inline-flex items-center px-4 py-2 text-xs md:text-sm font-medium text-white  border-0 border-l  dark:hover:text-white
                ${currentPage === number ? "bg-gray-500" : "bg-gray-800"}
                `}
                onClick={() => directPage(number)}
              >
                <p>{number}</p>
              </button>
            );
          }
        })}
        <button
          className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}
        >
          <div className="flex items-center">
            <p>Next</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
