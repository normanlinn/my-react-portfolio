import { useEffect } from "react";
import { useState } from "react";
import { ImCog } from "react-icons/im";
import changeThemeFunction from "../../helpers/theme";
import "./style.scss";

const colorsArr = [
  {
    id: "yellow",
    bgColor: "#f5cb5c",
  },
  {
    id: "red",
    bgColor: "#ef233c",
  },
  {
    id: "green",
    bgColor: "#6ac045",
  },
  {
    id: "blue",
    bgColor: "#5078ff",
  },
  {
    id: "white",
    bgColor: "#f4f1de",
  },
];

const Theme = () => {
  const [theme, setTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (id) => {
    setTheme((prevValue) => (prevValue = id));
    setToggle(false);
  };

  useEffect(() => {
    changeThemeFunction(theme);
  }, [theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper-toggle-icon">
        <ImCog
          onClick={() => setToggle((prevValue) => (prevValue = !toggle))}
          size={40}
        />
      </div>
      <div className="theme-wrapper-menu">
        <h4>choose theme</h4>
        <ul>
          {colorsArr.map((arrItem, key) => (
            <li
              onClick={() => handleToggleTheme(arrItem.id)}
              key={key}
              style={{ background: arrItem.bgColor }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
