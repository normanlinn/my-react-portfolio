import "./style.scss";
import PageHeaderContent from "../../components/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./util";
import { useState } from "react";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndexValue, setHoverIndexValue] = useState(null);

  const handleFilter = (id) => {
    return setFilterValue((prevValue) => (prevValue = id));
  };

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  console.log(filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        title="my portfolio"
        icon={<AiFillProject size={30} />}
      />
      <div className="portfolio-content">
        <ul className="portfolio-content-filter">
          {filterOptions.map((option) => (
            <li onClick={() => handleFilter(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio-content-cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              key={key}
              onMouseEnter={() => setHoverIndexValue(key)}
              onMouseLeave={() =>
                setHoverIndexValue((prevValue) => (prevValue = null))
              }
              className="cards-item"
            >
              <div className="cards-item-img-wrapper">
                <a href={item.prjLink} target="_blank" rel="noreferrer">
                  <img src={item.imgURL} alt={item.prjName} />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndexValue === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
