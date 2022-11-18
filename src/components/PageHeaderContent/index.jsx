import "./style.scss";

const PageHeaderContent = (props) => {
  const { title, icon } = props;
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
