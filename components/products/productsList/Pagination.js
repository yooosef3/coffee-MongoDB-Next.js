import React from "react";

const Pagination = ({
  handlePageChange,
  currentPage,
  pageNumbers,
  totalPages,
}) => {
  return (
    <div className="flex gap-2 mt-10 justify-center">
      <button
        className="bg-[#059669] lg:hover:bg-[#1F2937] duration-200 text-white px-3 py-2 rounded-lg"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        قبلی
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-3 py-2 rounded-lg ${
            pageNumber === currentPage
              ? "bg-[#059669] lg:hover:bg-[#1F2937] duration-200 text-white"
              : "bg-white text-gray-500 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="bg-[#059669] lg:hover:bg-[#1F2937] duration-200 text-white px-3 py-2 rounded-lg"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
