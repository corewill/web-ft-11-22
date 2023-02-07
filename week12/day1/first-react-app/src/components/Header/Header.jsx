import "./Header.css"
const Header = ({student2}) => {
  return (
    <div className="headerbody">
      <h2>header</h2>
      <p>THis is a header component</p>{student2}
      <h2>this is apps counter: 0</h2>
    </div>
  );
};

export default Header;
