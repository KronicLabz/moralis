import React from "react";
import "./Rightbar.css";
import kronickatzopensea from "../images/kronickatzopensea.png";
import kroniclabz from "../images/kroniclabz.jpg";
import BAPC from "../images/BAPC.jpeg";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";
import DOODEZ from "../images/doodez.png";
import DYLUMINATI from "../images/DYLUMINATI.png";

const Rightbar = () => {
  const trends = [
    {
      img: kronickatzopensea,
      text: "KronicKatz floor sweep contests is underway...",
      link: "https://opensea.io/collection/kronickatz-nft",
    },
    {
      img: DYLUMINATI,
      text: "Dyl to release new Forever Contract...",
      link: "https://itslit.org",
    },
    {
      img: kroniclabz,
      text: "KronicLabz to release community built NFT marketplace...",
      link: "https://kroniclabz.com/metatectoken/",
    },
    {
      img: BAPC,
      text: "Building a Roadmap for the Next NFT Revolution, Led by BAPC...",
      link: "https://medium.com/@boredapepixelclubnft/building-a-roadmap-for-the-next-nft-revolution-led-by-bapc-16bd31c51fdb",
    },
    {
      img: DOODEZ,
      text: "CryptoDoodez, first ever pfp project that ...",
      link: "https://cryptodoodez.crd.co/",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        ></Input>

        <div className="trends">
          News For You
          {trends.map((e) => {
            return (
              <>
                <div className="trend" onClick={() => window.open(e.link)}>
                  <img src={e.img} className="trendImg"></img>
                  <div className="trendText">{e.text}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Rightbar;
