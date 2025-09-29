import { Country } from "@/types/countriesAPI-type";
import { useState } from "react";

export const useModalCountry = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [currentModalCountry, setCurrentModalCountry] = useState<Country>()

   return {
      currentModalCountry,
      isModalOpen,
      setIsModalOpen,
      setCurrentModalCountry
   }
}