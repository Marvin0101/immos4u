import classes from "@/styles/Gallery.module.css";
import { Carousel } from "antd";
import Image from "next/image";

function Gallery() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        {/* <div>
          <Image
            src="/team/team_immos4u.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.imageFull}
          />
        </div> */}
        <div>
          <Image
            src="/region/20200909_145007.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20200909_151806.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20200909_151835.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20200909_161831.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20200909_162529.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20200909_162736.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20201025_121611.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20201025_125107.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20201025_125155.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
          <Image
            src="/region/20201025_130934_04.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        {/* <div>
        <Image
            src="/region/P1010015.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
        <Image
            src="/region/P1010088.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
        <Image
            src="/region/P1010130.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
        <Image
            src="/region/P1010131.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div>
        <div>
        <Image
            src="/region/P1010160.jpg"
            alt="Region"
            width={800}
            height={200}
            className={classes.image}
          />
        </div> */}
      </Carousel>
    </div>
  );
}

export default Gallery;
