import classNames from "classnames";
import { Link } from "react-router-dom";

type NavigableProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  to: string;
  height: string;
  width: string;
};

const Navigable = ({ to, ...props }: NavigableProps) => {
  return (
    <Link
      to={to}
      className={classNames("out absolute")}
      style={{
        ...props,
      }}
    />
  );
};

export default Navigable;
