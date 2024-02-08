import styles from "./page.module.css";
import SpecsButton from "./ui/buttons/specsbutton";
import Slider from "./ui/slider/slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Virtual reality was never this <span className={styles.textOrange}>perfect</span> <br /> and it will never be the same</h1>
      <div className={styles.content}>
        <div className={styles.imageConteiner}>
          <img src="/visionproblack.jpeg" alt="Apple Vision Pro" className={styles.image} />
          <h3 className={styles.text}>Our latest and most advanced technology of all time</h3>
        </div>
      </div>
      <div className={styles.mainContent}>
        <h2 className={styles.headerText}>The future is now</h2>
        <p>
          Our new product is a powerful revolution of our decade. <br />
          Years of experience have allowed us to create <span className={styles.textOrange}>Apple Vision Pro. </span><br />
          A wearable device that changes the way we look at entertaiment, work and many more...< br />
          Transform any room into office, cinema, game center or just whatever you want...
        </p>
        <h2>Watch our demo and see for yourself!</h2>
      </div>
      <iframe
        src="https://www.youtube.com/embed/Vb0dG-2huJE"
        height={608}
        width={1080}
        allowFullScreen
        className={styles.videoFrame}
      />
      <div className={styles.bottomMeeting}>
        <h2>Online meeting was never this productive</h2>
        <p>Connect with Facetime or other aplication wherever you are and enjoy your meeting. <br />
          Colaborate with your cooworkers on the same documents. Share apps, windows or your entire view.
        </p>
        <Slider />
      </div>
      <h2 className={styles.bottomGirlText}>Comfortable for every had shape</h2>
      <div className={styles.bottomGirlImage}>
        <img src="/visiongirl.jpeg" alt="Girl wearing Apple Vision Pro" />
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomContentText}>
          <h2 className={styles.headerText}>With attention to detail in every single component<br />
            Precision and passion make us the <span className={styles.textOrange}>best</span></h2>
          <h2>Just take a <span className={styles.headerTextRainbow}>look...</span></h2>
        </div>
        <div className={styles.bottomContentImg}>
          <img src="/appletop.jpeg" alt="Apple Vision Pro Glass" />
          <img src="/appletop2.jpeg" alt="Apple Vision Pro Glass" />
        </div>
      </div>
      <SpecsButton />


    </main >
  );
}
