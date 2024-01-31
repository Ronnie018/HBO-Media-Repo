import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { IoLogoAndroid, IoLogoApple, IoMdDesktop } from "react-icons/io";
import classNames from "classnames";

import { useNavigate } from "react-router-dom";
import { MdDevicesOther } from "react-icons/md";

const NavbarLink = ({ to, text }: { to: string; text?: string }) => {
  return (
    <Link
      className="text-2xl font-light text-white_ish hover:text-white focus:text-white active:text-white"
      to={to}
    >
      {text || to}
    </Link>
  );
};

function Category({
  to = "",
  classname,
  Icon,
  color,
}: {
  to?: string;
  classname: string;
  Icon: any;
  color?: string;
}) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(to.toLowerCase());
  };

  return (
    <div
      onClick={handleCategoryClick}
      className={classNames(
        "flex aspect-square h-12 w-12 items-center justify-center rounded-md",
        classname,
      )}
    >
      <Icon size={30} fill={color || "white"} />
    </div>
  );
}
export default function Navbar() {
  return (
    <nav className="mb-4 flex h-20 items-center bg-blue_main">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Searchbar />
          <div className="categories flex gap-4">
            <Category
              classname="bg-[#f9f9f9]"
              Icon={MdDevicesOther}
              color="#080808"
            />
            <Category
              to="?os=Android"
              classname="bg-[#54c934]"
              Icon={IoLogoAndroid}
            />
            <Category
              to="?os=ios"
              classname="bg-[#141414]"
              Icon={IoLogoApple}
            />
            <Category
              to="?search_str=desktop"
              classname="bg-[#62f7ac]"
              Icon={IoMdDesktop}
            />
          </div>
        </div>
        <div className="flex items-center justify-normal gap-4">
          <NavbarLink to="/" text="View" />
          <NavbarLink to="Create" />
        </div>
      </div>
    </nav>
  );
}
