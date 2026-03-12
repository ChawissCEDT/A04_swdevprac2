import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex ",
          flexDirection:"row",
          justifyContent: "space-around ",
          alignContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card venueName="SOL & LUNA BKK" imgSrc="/img/venue1.jpg" />
        <Card venueName="Aloft Bangkok Sukhumvit 11" imgSrc="/img/venue2.jpg" />
        <Card
          venueName="Four Points by Sheraton Bangkok, Sukhumvit 15"
          imgSrc="/img/venue3.jpg"
        />
      </div>
    </main>
  );
}
