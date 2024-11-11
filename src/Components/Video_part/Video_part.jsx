import React, { useEffect, useRef } from "react";
import gif from "../Assets/real_2.jpeg"

export default function Video_part() {
  const refvideo = useRef();

  return (
    <div className="main_video_part py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img   className="w-100 rounded" src={gif}></img>
          
          </div>
        </div>
      </div>
    </div>
  );
}
