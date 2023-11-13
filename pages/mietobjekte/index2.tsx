import Image from "next/image";
import classes from "@/styles/RentPage.module.css";
import { Button } from "@mui/material";
import Expose from "@/components/Expose";

function RentPage() {
  return (
    <>
      <h2>Mietobjekte</h2>
      <Expose 
        bigImage="https://pictures.immobilienscout24.de/listings/fab0ca13-ba8a-48eb-b635-f3914c618a11-1630509225.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageLeft="https://pictures.immobilienscout24.de/listings/c379d972-d7cb-4d6b-ba15-3c6ad761ba83-1480854370.jpg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageCenter="https://pictures.immobilienscout24.de/listings/28949256-8f0b-4a88-82b9-6b70e66747dd-1514312525.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageRight="https://pictures.immobilienscout24.de/listings/d077c623-056e-4f07-b506-2be085c9ff89-1514422136.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        title="Wohnung 1"
        titleSecond="2 Zimmer, 60m²"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
      <hr />
      <Expose 
        bigImage="https://pictures.immobilienscout24.de/listings/fab0ca13-ba8a-48eb-b635-f3914c618a11-1630509225.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageLeft="https://pictures.immobilienscout24.de/listings/c379d972-d7cb-4d6b-ba15-3c6ad761ba83-1480854370.jpg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageCenter="https://pictures.immobilienscout24.de/listings/28949256-8f0b-4a88-82b9-6b70e66747dd-1514312525.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageRight="https://pictures.immobilienscout24.de/listings/d077c623-056e-4f07-b506-2be085c9ff89-1514422136.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        title="Wohnung 1"
        titleSecond="2 Zimmer, 60m²"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
      <hr />
      <Expose 
        bigImage="https://pictures.immobilienscout24.de/listings/fab0ca13-ba8a-48eb-b635-f3914c618a11-1630509225.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageLeft="https://pictures.immobilienscout24.de/listings/c379d972-d7cb-4d6b-ba15-3c6ad761ba83-1480854370.jpg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageCenter="https://pictures.immobilienscout24.de/listings/28949256-8f0b-4a88-82b9-6b70e66747dd-1514312525.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        smallImageRight="https://pictures.immobilienscout24.de/listings/d077c623-056e-4f07-b506-2be085c9ff89-1514422136.jpeg/ORIG/resize/540x540%3E/format/jpg/quality/50"
        title="Wohnung 1"
        titleSecond="2 Zimmer, 60m²"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
  
    </>
  );
}

export default RentPage;
