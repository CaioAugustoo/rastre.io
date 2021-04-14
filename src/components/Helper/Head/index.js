import { useEffect } from "react";

const Head = ({ title }) => {
  useEffect(() => {
    document.title = "Rastre.io | " + title;
  }, [title]);

  return <></>;
};

export default Head;
