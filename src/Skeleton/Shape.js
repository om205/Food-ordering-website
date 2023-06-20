import "./shape.css";

export default Shape = ({ height, width, theme, class_name }) => {
  const styleObj = {};
  if (height) styleObj.height = height;
  if (width) styleObj.width = width;
  return <div className={class_name} theme={theme} style={styleObj}></div>;
};
