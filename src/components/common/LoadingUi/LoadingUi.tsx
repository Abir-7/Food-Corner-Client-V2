import loadingImg from "../../../assets/loading.gif";

const LoadingUi = () => {
  return (
    <div className="w-full mt-20 flex items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <img className="w-1/3" src={loadingImg} alt="" />{" "}
        <p className="text-orange-400 font-semibold text-3xl">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingUi;
