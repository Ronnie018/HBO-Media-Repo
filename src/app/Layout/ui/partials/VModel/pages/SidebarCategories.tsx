import sidebar_categories from "../images/sidebar_categories.jpeg";
import Navigable from "../NavigableLink";

type Props = {};

const SidebarCategories = (props: Props) => {
  return (
    <div className="relative mx-auto h-[36rem] w-max">
      <img className=" h-full" src={sidebar_categories} />
      <div className="controls absolute top-0 h-full w-full">
        <Navigable
          top={"4.5%"}
          left={"3.5%"}
          to="home"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          top={"3%"}
          left={"34.5%"}
          to="home"
          width={"65.5%"}
          height={"97%"}
        />
      </div>
    </div>
  );
};

export default SidebarCategories;
