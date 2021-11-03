import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function About() {
  const history = useHistory();

  useEffect(() => {
    history.push("/about");
  });

  return (
    <div>
      <h1>About page!</h1>
    </div>
  );
}
