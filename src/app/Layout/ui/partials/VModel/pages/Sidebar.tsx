import sidebar from "../images/sidebar.jpeg";
import Navigable from "../NavigableLink";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="relative mx-auto h-[36rem] w-max">
      <img className=" h-full" src={sidebar} />
      <div className="controls absolute top-0 h-full w-full">
        <Navigable
          top={"4.5%"}
          left={"3.5%"}
          to="home"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          top={"39.2%"}
          left={"3.5%"}
          to="sidebar_categories"
          width={"27%"}
          height={"4%"}
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

export default Sidebar;
