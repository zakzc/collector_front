import React from "react";

const Error = ({ extraStyle }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      height="64"
      width="64"
    >
      <path
        style={{ fill: "#FF3636" }}
        d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"
      />
      <path
        style={{ fill: "#F40000" }}
        d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"
      />
      <polygon
        style={{ fill: "#E7E7E7" }}
        points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 171.099,383.2 128.8,340.901 
	213.701,256 128.8,171.099 171.099,128.8 256,213.701 340.901,128.8 383.2,171.099 "
      />
      <polygon
        style={{ fill: "#D3D3D8" }}
        points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 256,213.701 340.901,128.8 
	383.2,171.099 "
      />
    </svg>
  );
};

export default Error;
