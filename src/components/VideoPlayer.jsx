import React from "react";

export default function VideoPlayer({ screens, title, src }) {
  return (
    <iframe
      title={title}
      src={src}
      height={screens.md ? "310" : "250"}
      width={screens.md ? "534" : "300"}
    />
  );
}
