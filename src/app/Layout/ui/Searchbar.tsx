import { GoSearch } from "react-icons/go";

export default function Searchbar() {
  return (
    <label className="relative flex w-max items-center overflow-hidden rounded-md">
      <input
        type="text"
        className="w-30 bg-transparent px-2 py-3 pr-12 text-white"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2">
        <GoSearch size={30} className="text-dark_gray" />
      </button>
    </label>
  );
}
