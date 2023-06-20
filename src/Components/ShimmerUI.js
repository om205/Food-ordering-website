import Card from "../Skeleton/Card";

const Shimmer = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <Card key={index} />
      ))}
    </>
  );
};

export default Shimmer;
