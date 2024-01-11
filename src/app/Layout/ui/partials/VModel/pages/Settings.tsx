import settings from "../images/settings.jpeg";
import Navigable from "../NavigableLink";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="relative mx-auto h-[36rem] w-max">
      <img className="h-full" src={settings} />
      <div className="controls absolute top-0 h-full w-full">
        <Navigable
          top={"4.5%"}
          left={"3.5%"}
          to="profile"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          top={"10%"}
          left={"2.6%"}
          to="account"
          width={"95%"}
          height={"3.8%"}
        />
        <Navigable
          top={"39.6%"}
          left={"2.6%"}
          to="language"
          width={"95%"}
          height={"3.8%"}
        />
        <Navigable
          bottom={"2.5%"}
          left={"27%"}
          to="movies"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          bottom={"2.5%"}
          right={"27%"}
          to="downloads"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          bottom={"2.5%"}
          right={"7%"}
          to="search"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          bottom={"2.5%"}
          left={"7%"}
          to="home"
          width={"6%"}
          height={"3%"}
        />
      </div>
    </div>
  );
};

export default Settings;
