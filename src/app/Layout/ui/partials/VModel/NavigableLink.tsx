import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

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
  const { device } = useParams();

  return (
    <Link
      to={`/${device}/${to}`}
      className={classNames("navigable out absolute")}
      style={{
        ...props,
      }}
    />
  );
};

export default Navigable;
