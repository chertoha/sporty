import React, { FC, Suspense } from "react";
import { Outlet } from "react-router";

interface IExercisesProps {
  //...
}

const Exercises: FC<IExercisesProps> = () => {
  return (
    <div>
      Exercises component
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Exercises;
