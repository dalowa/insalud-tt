export const httpClientPlugin = {
   get: async (url:string) => {
      try {
         console.log("Made a request")
         const res = await fetch(url);   
         if (res.status !== 200) {
            return undefined
         } else {
            const data = await res.json();
            return data
         }
      } catch (error) {
         return `Error:${error}`
      }
   },
   
}