import { useState } from "react";
import classes from "@/styles/BuyPage.module.css";

function BuyPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const iframeLoading = () => {
    console.log("iframe loaded.");
    setIsLoading(false);
  };
  return (
    <>
      <h2>Mietobjekte</h2>
      <div className={classes["iframe-container"]}>
        {isLoading && (
          <>
            <div className="skeleton skeleton-main">Lade Angebote...</div>
            <div className="skeleton skeleton-main">Lade Angebote...</div>
            <div className="skeleton skeleton-main">Lade Angebote...</div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </>
        )}
        <iframe
          src="https://portal.immobilienscout24.de/ergebnisliste/90856771?wmode=transparent"
          width="100%"
          height="100%"
          onLoad={iframeLoading}
          style={{ display: isLoading ? "none" : "unset" }}
        ></iframe>
      </div>
    </>
  );
}

export default BuyPage;
