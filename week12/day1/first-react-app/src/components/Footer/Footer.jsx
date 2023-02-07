import "./Footer.css"
import ReactLogo from "../../assets/react.svg"

const Header = ({studentName}) => {
  
    return (
    <div className="footerbody">
      <h2>header</h2>
      <h2>this is apps counter: 0</h2>
      <p>{studentName}</p>
      <img src="{ReactLogo}" alt="React Logo" />
    </div>
  );
};

export default Header;