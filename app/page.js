import "./page.css";
import Slider from "./ui/Slider/slider";

export default function Home() {
  return (
    <main className="container">
      <h1 className="container-title">Virtual reality was never this <span className="text-orange">perfect</span> <br /> and it will never be the same</h1>
      <div className="container-top">
        <div className="container-top-image">
          <img src="/visionproblack.jpeg" alt="Apple Vision Pro" />
          <h3 className="container-top-image-text">Our latest and most advanced technology of all time</h3>
        </div>
      </div>
      <div className="container-main">
        <h2 className="container-subtitle">The future is now</h2>
        <p>
          Our new product is a powerful revolution of our decade. <br />
          Years of experience have allowed us to create <span className="text-orange">Apple Vision Pro. </span><br />
          A wearable device that changes the way we look at entertaiment, work and many more...< br />
          Transform any room into office, cinema, game center or just whatever you want...
        </p>
        <h2>Watch our demo and see for yourself!</h2>
      </div>
      <div className="container-video">
        <iframe
          src="https://www.youtube.com/embed/Vb0dG-2huJE"
          height={608}
          width={1080}
          allowFullScreen
          className="container-video-frame"
        />
      </div>
      <div className="container-slider">
        <h2 className="container-subtitle">Online meeting was never this productive</h2>
        <p>Connect with Facetime or other aplication wherever you are and enjoy your meeting. <br />
          Colaborate with your cooworkers on the same documents. Share apps, windows or your entire view.
        </p>
      </div>
      <Slider />
      <h2 className="container-subtitle">Comfortable for every had shape</h2>
      <div className="container-girlphoto">
        <img src="/visiongirl.jpeg" alt="Girl wearing Apple Vision Pro" />
      </div>

      <div className="container-bottom-text">
        <h2 className="container-subtitle">With attention to detail in every single component<br />
          Precision and passion make us the <span className="text-orange">best</span><br />
          Just take a look at this. It&apos;s <span className="text-orange">perfect...</span></h2>
      </div>

      <div className="container-bottom-image">
        <img src="/appletop.jpeg" alt="Apple Vision Pro Glass" />
        <img src="/appletop2.jpeg" alt="Apple Vision Pro Glass" />
      </div>
    </main >
  );
}
