export const millonesOMiles = (cantidad:number) => {
   const cantidadStr = String(cantidad)

   if(cantidadStr.length > 6){

      const full = cantidadStr.padStart(9, "-").slice(0,3).split("").filter(e => e == "-"?"":e).join("")
      return full == "1" ? ` ${full} Millon`: ` ${full} Millones`
   }
   else if(cantidadStr.length > 3){

      const full = cantidadStr.padStart(6, "-").slice(0,3).split("").filter(e => e == "-"?"":e).join("")
      return full == "1" ? ` ${full} Mil`: ` ${full} Mil`
   }

   return `${cantidad} personas`
};

/* 
   .slice(0,3).split("").filter(e => e == "-"?"":e).join("+")
*/