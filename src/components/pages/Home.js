import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";

const Home = () => {
  const navigate = useNavigate();
    return (
    <div className="flex self-start w-full justify-center flex-col gap-2 items-center mt-[256px]">
      <h1 className="text-lg">Hey yo, welcome!</h1>
      <CustomButton text="Start Building Resume" onClickHandler={() => {
        navigate("/personal-info")
      }}/>
    </div>
    )
}

export default Home;