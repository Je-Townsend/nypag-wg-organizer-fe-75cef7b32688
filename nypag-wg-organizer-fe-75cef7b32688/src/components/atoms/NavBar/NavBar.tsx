import { BrowserRouter } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./NavBar.css";

interface CrumbLgProps {
  path: string;
  text: string;
}


const getSubToken = () => {
  const token: any = localStorage.getItem("JWT");
  const [header, payload, signature] = token.split(".");
  const decodedPayload: any = JSON.parse(atob(payload));
  return decodedPayload.sub;
};

const CrumbLg = ({ path, text }: CrumbLgProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Breadcrumb.Item href={path} className={"nav-link " + (isActive ? "active" : "")}>
      {text}
    </Breadcrumb.Item>
  );
};

const CrumbSm = ({ path, text }: CrumbLgProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <li key={path} className="nav-item">
      <a href={path} className={"nav-link text-white " + (isActive ? "active" : "")}>
        {text}
      </a>
      <p className="Unterbruch">___________________________________</p>
    </li>
  );
};

const breadcrumbData: string[][] = [
  ["/dashboard", "DASHBOARD"],
  ["/profile/:" + getSubToken(), "MEIN PROFIL"],
  ["/groups", "MEINE GRUPPEN"],
  ["/tasks", "TASKS"],
  ["/leaderboard", "LEADERBOARD"],
];

function Navbar(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <nav className="navbar sticky-top navbar-background">
      <Breadcrumb className="d-lg-inline d-none">
        {breadcrumbData.map((data) => (
          <CrumbLg key={data[0]} path={data[0]} text={data[1]} />
        ))}
      </Breadcrumb>
      
      <div className="container-fluid d-lg-none">
      <button
       className="navbar-toggler"
       type="button"
       data-bs-toggle="offcanvas"
       data-bs-target="#offcanvasNavbar"
       aria-controls="offcanvasNavbar"
       aria-label="Toggle navigation"
     >
       <span className="navbar-toggler-icon"></span>
     </button>
     <div
       className="offcanvas offcanvas-end"
       id="offcanvasNavbar"
       aria-labelledby="offcanvasNavbarLabel"
     >
       <div className="offcanvas-header">
         <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
         <button
           type="button"
           className="btn-close"
           data-bs-dismiss="offcanvas"
           aria-label="Close"
         ></button>
       </div>
       <div className="offcanvas-body">
         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           {breadcrumbData.map((data) => (
             <CrumbSm key={data[0]} path={data[0]} text={data[1]} />
           ))}
      </ul>
      </div>
    </div>
  </div>
    </nav>
  );
}

export default Navbar;
