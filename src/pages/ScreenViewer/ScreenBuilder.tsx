import { useParams } from "react-router-dom";
import Navigable from "./NavigableLink";
import { NavLink } from "@/app/types";

type ScreenBuilderSelectorProps = {
  flow: { [key: string]: NavLink[] };
  device: string;
};

export const ScreenBuilderSelector = ({
  flow,
  device,
}: ScreenBuilderSelectorProps) => {
  const { screen } = useParams();

  if (!screen) {
    return <ScreenBuilder screen={flow.home} image="home" device={device} />;
  }

  return <ScreenBuilder screen={flow[screen]} image={screen} device={device} />;
};

/* //////////////////////////////////////////////////////////////////////////////////////////////// */

type ScreenBuilderProps = {
  screen: NavLink[];
  image: string;
  device: string;
};

const ScreenBuilder = ({
  screen,
  image,
  device,
  ...rest
}: ScreenBuilderProps) => {
  console.log(screen);

  return (
    <div className="relative mx-auto h-[36rem] w-max" {...rest}>
      <img
        className=" h-full"
        src={`/images/devices/${device}/${image}.jpeg`}
      />
      <div className="controls absolute top-0 h-full w-full">
        {screen.map((link) => (
          <Navigable key={link.to} {...link} />
        ))}
      </div>
    </div>
  );
};

export default ScreenBuilder;
