import React, { FC } from "react";
import { Outlet } from "react-router";

interface IExercisesProps {
  //...
}

const Exercises: FC<IExercisesProps> = () => {
  return (
    <div>
      Exercises component
      <Outlet />
    </div>
  );
};

export default Exercises;
