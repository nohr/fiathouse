import SubHero from "@/components/SubHero/SubHero";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: "Fiat House | Energized Studio - 2 Bedroom Luxury Rentals",
  description:
    "Make your move! Our sustainable community features unparalleled accessibility, ride-sharing mobility, and indulgent amenities in a prime location. ",
  themeColor: "#257AD1",
};

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Contact />
    </>
  );
}
