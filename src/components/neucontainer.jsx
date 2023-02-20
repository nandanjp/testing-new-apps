import React from "react";

const Neucontainer = (props) => {
  // const numChildren = Array(props.children.length).fill(0);
  return <div className="neu-container">{...props.children}</div>;
};

export default Neucontainer;
