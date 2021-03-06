import React from "react";
import TrumpBackground from "./components/trump-background";
import { CloudinaryContext, Video, Transformation } from "cloudinary-react";
import { setConfig, buildVideoUrl } from "cloudinary-build-url";

setConfig({
  cloudName: "richardhaines",
});
export default () => {
  return (
    <div>
      <TrumpBackground />
      <main className="container">
        <h1 className="title">A Christmas Message From The President</h1>
        <section className="video-section">
          <Video
            cloudName="richardhaines"
            publicId="joe-bell/trump-xmas"
            width="100%"
            height="100%"
            controls
            autoPlay
          />
        </section>
      </main>
     
    </div>
  );
};
