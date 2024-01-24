import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

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

export default function Navbar() {
  return (
    <nav className="mb-4 flex h-20 items-center bg-blue_main">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Searchbar />
        <div className="flex items-center justify-normal gap-4">
          <NavbarLink to="/" text="View" />
          <NavbarLink to="Create" />
        </div>
      </div>
    </nav>
  );
}
