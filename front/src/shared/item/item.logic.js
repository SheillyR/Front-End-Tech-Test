import { useEffect, useState } from "react";

const ItemLogic = (props) => {
  const [values, setValues] = useState({
    ...props,
  });

  const setClass = () => {
    setValues({ ...values });
  };

  useEffect(() => {
    setClass();
  });

  return {
    values,
  };
};

export default ItemLogic;