// @ts-nocheck
import { useParams } from "react-router-dom";
import { NavLink } from "@/app/types";
import Navigable from "./NavigableLink";
import { useEffect, useRef, useState } from "react";

type ScreenBuilderSelectorProps = {
  flow: {
    screens: {
      [key: string]: NavLink[];
    };
    images: {
      [key: string]: string;
    };
  };
  device: string;
};

export const ScreenBuilderSelector = ({ flow }: ScreenBuilderSelectorProps) => {
  const { screen } = useParams();

  const homeId = Object.keys(flow.screens)[0];

  if (!screen) {
    return (
      <ScreenBuilder
        screen={flow.screens[homeId]}
        image={flow.images[homeId]}
      />
    );
  } else {
    return (
      <ScreenBuilder
        screen={flow.screens[screen]}
        image={flow.images[screen]}
      />
    );
  }
};

/* //////////////////////////////////////////////////////////////////////////////////////////////// */

type ScreenBuilderProps = {
  screen: NavLink[];
  image: string;
  proportion: {
    width: number;
    height: number;
  };
};

const ScreenBuilder = ({
  screen,
  proportion,
  image,
  ...rest
}: ScreenBuilderProps) => {
  const self = useRef(null);
  const [canvasRect, setCanvasRect] = useState<DOMRect>();

  let used = false;
  useEffect(() => {
    if (used || !window) return;
    used = true;
    setCanvasRect(() => self.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={self} className="relative mx-auto h-[36rem] w-max" {...rest}>
      <img className=" h-full" src={image} />
      <div className="controls absolute top-0 h-full w-full">
        {screen.map((link) => {
          return <Navigable key={link.id} {...link} />;
        })}
      </div>
    </div>
  );
};

export default ScreenBuilder;
