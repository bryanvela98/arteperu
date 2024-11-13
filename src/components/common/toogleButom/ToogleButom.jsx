import "./ToogleButom.css";

const ToogleButom = ({ darkMode, tooggleMode }) => {
  return (
    <div onClick={tooggleMode} className={`toogle${darkMode ? " night" : ""}`}>
      <div className="notch" />
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default ToogleButom;
