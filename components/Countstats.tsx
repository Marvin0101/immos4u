import classes from "@/styles/Countstats.module.css";
import { CountUp } from "use-count-up";

function Countstats() {
  return (
    <>
      <div className={classes.countstats}>
        <div className={classes.counter}>
          <p className={classes.countnumber}>
            <CountUp isCounting={true} start={10} end={20} duration={5} />+
            Jahre
          </p>
          <p>Erfahrung</p>
        </div>
        <div className={classes.counter}>
          <p className={classes.countnumber}>
            <CountUp isCounting start={20} end={200} duration={5} />+
          </p>
          <p>Verkaufte Immobilien</p>
        </div>
        <div className={classes.counter}>
          <p className={classes.countnumber}>
            <CountUp isCounting start={300} end={500} duration={5} />+
          </p>
          <p>Vermietete Immobilien</p>
        </div>
        <div className={classes.counter}>
          <p className={classes.countnumber}>
            <CountUp isCounting start={5} end={30} duration={5} />+
          </p>
          <p>Hausmeisterservices</p>
        </div>
      </div>
    </>
  );
}

export default Countstats;
