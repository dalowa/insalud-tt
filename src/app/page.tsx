
import { CountryCardsDisplay } from '../components/country/CountryCardsDisplay';



export default async function Home() {
  return (
    
    <div className="font-sans flex flex-col min-h-screen pb-20 pt-10 gap-5 lg:gap-16">
      
      <CountryCardsDisplay />
      
    </div>
  );
}
