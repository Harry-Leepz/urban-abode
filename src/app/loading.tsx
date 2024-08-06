import ClipLoader from "react-spinners/ClipLoader";

const loaderStyles = {
  display: "block",
  margin: "100px auto",
};

export default function Loading() {
  return (
    <>
      <ClipLoader
        loading
        color='#0F172A'
        size={150}
        cssOverride={loaderStyles}
        aria-label='loading spinner'
      />
    </>
  );
}
