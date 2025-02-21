import { useState } from "react";
import classes from "@/styles/BuyPage.module.css";

function EvaluationPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const iframeLoading = () => {
    console.log("iframe loaded.");
    setIsLoading(false);
  };
  return (
    <>
      <h2>Immobilienbewertung</h2>
      <div className={classes["iframe-container"]}>
        {isLoading && (
          <>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-big">Lade Bewertungsplattform...</div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </>
        )}
        <iframe
          src="https://www.immobilien-wertermittlung.de/iwlead/lead?uid=7670&amp;c=immc72qb6m7ag4bt&amp;amp;wmode=dark"
          width="100%"
          height="100%"
          onLoad={iframeLoading}
          style={{ display: isLoading ? "none" : "unset" }}
        ></iframe>
      </div>
    </>
  );
}

export default EvaluationPage;
