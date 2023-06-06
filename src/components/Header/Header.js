import logo from "../logo.svg";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light  p-4 custom-header ">
          <div className="d-flex justify-content-center align-items-center">
        <img src={logo} width={78} height={76} alt="All Star Sport" className="img-responsive"></img>
        <Navbar/>
        </div>
        </nav>
    </div>
    
  );
}

export default Header;
