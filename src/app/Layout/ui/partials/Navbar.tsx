import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex h-20 items-center bg-blue_main">
      <div className=" container mx-auto">
        <Searchbar />
      </div>
    </nav>
  );
}
