import Image from 'next/image'
import Head from "next/head";
import React from "react";
import Header from "@/app/UI/header/page";
import Hero from "@/app/UI/Hero/page";
import Section from "@/app/UI/section/paeg";
import Footer from './UI/footer/page';
import Feature from "@/app/UI/feature/page";
import Features from "@/app/UI/Features/page";

export default function Home() {
  return (
    <main className="">


    <Hero />
    <Header />
  
    <Features />
      <Section/>











    </main>
  )
}
