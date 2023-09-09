import React, { useRef } from "react";

const UnControlledFile = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
    // Do something with the files here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={fileInput} type="file" />
    </form>
  );
};

export default UnControlledFile;
