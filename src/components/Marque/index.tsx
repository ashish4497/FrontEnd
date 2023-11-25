import React from "react";
import "./style.css";
import marquImg from "../../imges/1.png";
import mar108 from "../../imges/08.png";
import mar109 from "../../imges/09.png";
import mar1010 from "../../imges/011.png";



import Image from "next/image";
import Link from "next/link";


export default function MarqueSlider() {
  return (
    <div className="container">
      <div className="sub-container bg-color-0">
        <div className="left-col">
          <Image
            src={marquImg}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="right-col">
          <p>bitfins</p>
            <Link href="#" className="see-more">see more</Link>
        </div>
      </div>
      <div className="sub-container bg-color-1">
        <div className="left-col ">
          <Image
            src={mar108}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="right-col">
          <p>bitfins</p>
            <Link href="#" className="see-more">see more</Link>
        </div>
      </div>
      <div className="sub-container bg-color-1">
        <div className="left-col">
          <Image
            src={mar1010 }
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="right-col">
          <p>bitfins</p>
            <Link href="#" className="see-more">see more</Link>
        </div>
      </div>
      <div className="sub-container bg-color-0 margin">
        <div className="left-col">
          <Image
            src={marquImg}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="right-col">
          <p>bitfins</p>
            <Link href="#" className="see-more">see more</Link>
        </div>
      </div>

    </div>
  );
}
