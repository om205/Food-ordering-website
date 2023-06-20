import Shape from "./Shape";
import "./shape.css";

export default Card = () => {
  return (
    <div className="card shimmer">
      <Shape class_name="rectangle" theme="dark" height="150px" />
      <Shape class_name="line" theme="light" />
      <Shape class_name="line" theme="dark" />
      <Shape class_name="line" theme="light" />
    </div>
  );
};
