import BeatLoader from "react-spinners/BeatLoader";


export const Loader = () => {
  return (
    <>
      <BeatLoader
        color="#646a7a"
        loading={true}
        speedMultiplier={1}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h2>...Loading...</h2>
    </>
  );
};
