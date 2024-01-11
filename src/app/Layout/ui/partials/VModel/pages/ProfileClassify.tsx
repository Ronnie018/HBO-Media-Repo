import profile_classify from "../images/profile_classify.jpeg";
import Navigable from "../NavigableLink";

type Props = {};

const ProfileClassify = (props: Props) => {
  return (
    <div className="relative mx-auto h-[36rem] w-max">
      <img className=" h-full" src={profile_classify} />
      <div className="controls absolute top-0 h-full w-full">
        <Navigable
          top={"3%"}
          right={"0%"}
          to="profile"
          width={"100%"}
          height={"75%"}
        />
      </div>
    </div>
  );
};

export default ProfileClassify;
