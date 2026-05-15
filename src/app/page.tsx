"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rating from "@/components/Rating";
import SpaceGallery from "@/components/SpaceGallery";
import Menu from "@/components/Menu";
import Wines from "@/components/Wines";
import FoodGallery from "@/components/FoodGallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rating />
        <SpaceGallery />
        <Menu />
        <Wines />
        <FoodGallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
