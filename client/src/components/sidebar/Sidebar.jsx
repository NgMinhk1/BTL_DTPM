import "./sidebar.css";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";
// import { useContext } from "react";

const Sidebar = () => {
    // const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">LISTS</p>
                    <Link to="/ticket" style={{ textDecoration: "none", color: "black" }}>
                        <li>
                            <ConfirmationNumberIcon className="icon" />
                            <span>Đặt vé</span>
                        </li>
                    </Link>
                    <Link to="/film" style={{ textDecoration: "none", color: "black" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Phim</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
