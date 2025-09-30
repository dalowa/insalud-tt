import { Country } from "@/types/countriesAPI-type";
import { useEffect, useState } from "react";

export const usePagination = (itemsPerPage: number, countries:Country[]) => {
    const [currentPage, setCurrentPage] = useState(1) 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = countries.slice(startIndex, endIndex);
    const totalPages = Math.ceil(countries.length / itemsPerPage);

   const handlePrevious = () => {
      if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      }
   };

   const handleNext = () => {
      if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      }
   };

   useEffect(() => {
      setCurrentPage(1);
   }, [countries.length]);
    return {
      currentItems,
      handlePrevious,
      handleNext,
      currentPage,
      totalPages
    }
}
