import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"
import axios from "axios"

export default function Sidebar() {
  const [cat, setCats] = useState([]);


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data);
    }
    getCats();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://i.pinimg.com/564x/0a/af/ed/0aafeda9d7ebd41b47277f7242737f61.jpg"
          className="sidebarImg"
          alt="" />
        <p>Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me
          Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me Nam is me
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sibebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" >
              <li className="sibebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}
