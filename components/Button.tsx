import React from "react";

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
    <button
      className="bg-primary px-6 py-2 rounded-4xl hover:scale-105 shadow-lg duration-300 cursor-pointer
      "
    >
      {title}
    </button>
  );
}
