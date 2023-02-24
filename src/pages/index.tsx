import Nav from "@/components/common/nav/Nav";
import Hero from "@/components/home/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Duncan Sotubo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-background">
        <section className=" h-screen">
          <Nav />
          <Hero />
        </section>
      </main>
    </>
  );
}
