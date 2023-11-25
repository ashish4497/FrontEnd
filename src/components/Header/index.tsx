import React from "react";
import "./style.css";
import Logo from "../../imges/02.webp";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="hamb"><MenuIcon/></div>
      <div className="col-1-r-1">
        <ul className="fex-row nav-bar-links">
          <li className="brands-list ">
            brands{" "}
            <span>
              <KeyboardArrowDownIcon />
            </span>
            <ul className="brands-list-contaniner nav-bar-links">
              <li>shops </li>
              <li>premium</li>
              <li>gift cards</li>
              <li>shops</li>
            </ul>
          </li>
          <li className="brands-list ">
            shops
            <span>
              <KeyboardArrowDownIcon />
            </span>
            <div className="brands-list-contaniner  brands-list-contaniner-shop nav-bar-links ">
              <div className="flex-class">
                <div className="col-1">
                  <ul>
                    <h2>apperal </h2>
                    <li>premium</li>
                    <li>gift cards</li>
                    <li>shops</li>

                    <li>premium</li>
                    <li>gift cards</li>
                  </ul>
                </div>
                <div className="col-1">
                  <ul>
                    <h2>home </h2>
                    <li>premium</li>
                    <li>gift cards</li>
                    <li>shops</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>premium</li>
          <li>gift cards</li>
        </ul>
      </div>
      <div className="col-2-r-1">
        <Image src={Logo} width={100} height={100} alt="Picture" />
      </div>
      <div className="col-3-r-1">
        <ul className="fex-row nav-bar-links">
          <li className="nav-listitem ">became afficate</li>
          <li className="nav-listitem ">
            <TwitterIcon />
          </li>
          <li className="nav-listitem ">
            <AudiotrackIcon />
          </li>
          <li className="nav-listitem ">
            <InstagramIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <LocalMallIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}
