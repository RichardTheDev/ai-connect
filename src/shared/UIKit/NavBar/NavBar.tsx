import "./NavBar.scss";
interface NavBar {
  isMain: boolean; // add this line
  onNavClick: () => void;
}

export const NavBar: React.FC<NavBar> = ({ isMain, onNavClick }) => {
  return (
    <div className="navbar">
      <button
        onClick={onNavClick}
        className={`menu-button ${isMain ? "selected" : ""}`}
      >
        Generate
      </button>

      <button
        onClick={onNavClick}
        className={`menu-button ${isMain ? "" : "selected"}`}
      >
        Dashboard
      </button>
    </div>
  );
};
