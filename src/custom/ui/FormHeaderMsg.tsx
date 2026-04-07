import React from "react";

const FormHeaderMsg = ({
  welcomeMsg,
  title,
}: {
  welcomeMsg: string;
  title: string;
}) => {
  return (
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-bold text-sky-950 text-center">
        {welcomeMsg}
      </h2>
      <p className="text-sky-600 mt-2 text-center">{title}</p>
    </div>
  );
};

export default FormHeaderMsg;
