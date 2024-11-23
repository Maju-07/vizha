import {
  VizhaLogo,
  HomeIcon,
  GetProposalIcon,
  WishlistIcon,
  ProfileIcon,
} from "../assets/index.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <nav className="flex justify-between items-center w-full p-5">
      {/* vizha logo  */}
      <div>
        <VizhaLogo style={{ color: "text-black" }} />
      </div>
      {/* tap */}
      <div className="max-md:fixed max-md:left-0 max-md:bottom-0 max-md:w-full max-md:bg-background max-md:p-2">
        <div className="flex justify-between items-center md:gap-3">
          <div className="cursor-pointer flex md:hidden max-md:flex-col max-md:items-center max-md:justify-center gap-2">
            <HomeIcon style={{ color: "text-textColor" }} />
            <p className="text-textColor">Home</p>
          </div>
          <div className="cursor-pointer flex flex-col justify-center items-center md:flex-row md:bg-background md:rounded-[51px] md:px-2 md:py-4 md:h-[3rem] gap-1">
            <GetProposalIcon
              style={{ color: "text-textColor md:text-black" }}
            />
            <p className="text-textColor md:text-black">
              <span className="max-md:hidden">Get </span>
              Proposal
            </p>
          </div>
          <div
            onClick={() => navigate("/Wishlist")}
            className="cursor-pointer flex flex-col justify-center items-center md:flex-row md:bg-background md:rounded-[51px] md:px-2 md:py-4 md:h-[3rem] gap-1"
          >
            <WishlistIcon style={{ color: "text-textColor md:text-black" }} />
            <p className="text-textColor md:text-black">Wishlist</p>
          </div>
          <div className="cursor-pointer md:flex hidden justify-center items-center md:bg-btnBg md:rounded-[51px] md:h-[3rem] md:px-2 md:py-4">
            <ProfileIcon style={{ color: "text-textColor md:text-black" }} />
            <p className="text-textColor md:text-black">Become A Vendor</p>
          </div>
          <div
            onClick={() => setIsLogin(true)}
            className="cursor-pointer flex flex-col justify-center items-center md:flex-row md:h-[3rem] md:w-12 gap-1 md:bg-background md:md:rounded-[51px]"
          >
            <ProfileIcon style={{ color: "text-textColor md:text-black" }} />
            <p className="text-textColor md:text-black md:hidden">Profile</p>
          </div>
        </div>
      </div>
      {/* ////  */}
      <div className="cursor-pointer md:hidden">
        <button className="flex">
          <ProfileIcon style={{ color: "text-black" }} />
          <span className="hidden">Become A Vendor</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
