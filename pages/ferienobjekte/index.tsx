import { useState } from "react";
import classes from "@/styles/HolidayPage.module.css";

function HolidayPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const iframeLoading = () => {
    console.log("iframe loaded.");
    setIsLoading(false);
  };
  return (
    <>
      <h2>Unsere Ferienwohnung auf Sardinien</h2>
      <div className={classes.video}>
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          style={{ 
            objectFit: 'contain'
          }}
        >
          <source src="/videos/ferienwohnung.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </video>
      </div>
    </>
  );
}

export default HolidayPage;
