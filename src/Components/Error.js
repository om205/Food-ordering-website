import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);
  return (
    <>
      <div className="container-flex">
        <h3>OOPS!!</h3>
        <p>Something went wrong..</p>
        <h5>
          Error Code: {status} - {statusText}
        </h5>
      </div>
    </>
  );
};

export default Error;
