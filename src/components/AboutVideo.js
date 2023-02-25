import { useState } from "react";

const AboutVideo = () => {
  const [video, setVideo] = useState(false);
  return (
    <div
      className="section section-inner m-video-large"
      onClick={() => setVideo(true)}
    >
      <div
        className={`video  scroll-animate ${
          video ? "animate__animated active" : ""
        }`}
      >
        <div
          className="img js-parallax"
          style={{ backgroundImage: "url(assets/images/started-n7.jpg)" }}
        />
        {video && (
          <iframe
            className="js-video-iframe"
            data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
          />
        )}
        <div className="play" />
      </div>
    </div>
  );
};
export default AboutVideo;
