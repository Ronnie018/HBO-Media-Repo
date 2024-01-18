// @ts-nocheck
import { NavLink } from "@/app/types";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { convertToPercentage } from "../ScreenCreator/utils";

const Navigable = ({
  to,
  x,
  y,
  width,
  height,
  ...props
}: NavLink & { ch: number; cw: number }) => {
  const { device } = useParams();

  return (
    <Link
      to={`/${device}/${to}`}
      className={classNames("navigable out absolute")}
      style={{
        top: y + "%",
        left: x + "%",
        width: width + "%",
        height: height + "%",
      }}
    />
  );
};

export default Navigable;
