import { useState } from "react";
import classes from "@/styles/ReadMore.module.css";

interface ReadMoreProps {
  text: string;
  maxWords?: number;
}

export default function ReadMore({ text, maxWords = 30 }: ReadMoreProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const getVisibleText = (text: string, maxWords: number): string => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ");
  };

  const visibleText = getVisibleText(text, maxWords);
  const hiddenText = text.replace(visibleText, "").trim();

  return (
    <div className={classes.readMore}>
      <p>
        <span
          className={`${classes.hiddenContent} ${isExpanded ? classes.expanded : ""}`}
          style={{
            display: "inline",
          }}
        >
          {isExpanded ? (
            <span dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <>
              <span dangerouslySetInnerHTML={{ __html: visibleText }} />
              {hiddenText && <span>...</span>}
            </>
          )}
        </span>
        {hiddenText && (
          <button onClick={toggleExpansion} className={classes.inlineButton}>
            {isExpanded ? "« weniger lesen" : "weiter lesen »"}
          </button>
        )}
      </p>
    </div>
  );
}
