/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import DocumentRequestHome from "../../../../components/Controls/ManageControl/DocumentRequest/DocumentRequestHome";

const page = ({ params }) => {
  const [newControls, setNewControls] = useState([]);

  useEffect(() => {
    const storedControls = JSON.parse(localStorage.getItem("newControl")) || [];
    setNewControls(storedControls);
  }, []); 

  console.log(typeof params.id);
  //   console.log(newControls);

  const controls = newControls.find(
    (control) => parseInt(control.id) === parseInt(params.id)
  );

  console.log(controls);

  return (
    <div>
      <DocumentRequestHome />
    </div>
  );
};

export default page;
