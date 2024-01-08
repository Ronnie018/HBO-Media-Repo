import movies from "../images/movies.jpeg";
import Navigable from "../NavigableLink";

type Props = {};

const Movies = (props: Props) => {
  return (
    <div className="relative mx-auto h-[36rem] w-max">
      <img className=" h-full" src={movies} />
      <div className="controls absolute top-0 h-full w-full">
        <Navigable
          top={"4.5%"}
          right={"3.5%"}
          to="home"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          top={"4.5%"}
          left={"3.5%"}
          to="sidebar"
          width={"6%"}
          height={"3%"}
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
          to="movies"
          width={"6%"}
          height={"3%"}
        />
        <Navigable
          bottom={"2.5%"}
          right={"7%"}
          to="movies"
          width={"6%"}
          height={"3%"}
        />
      </div>
    </div>
  );
};

export default Movies;
