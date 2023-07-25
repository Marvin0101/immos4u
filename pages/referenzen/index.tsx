import Image from "next/image";
import classes from "@/styles/ReferentPage.module.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function ReferentPage() {
    return ( 
        <>
            <h2>Referenzen</h2>
            <div className={classes.center}>
                <h3 className={classes.title}>Verkauft - Heidelberg Boxberg</h3>
                <div className={classes["image-container"]}>
                <Image className={classes.image} src="/referenzen/boxberg.jpg" alt="haus in boxberg" fill />
                </div>
                <div className={classes.textbox}>
                    <FormatQuoteIcon />
                    Mein wunderschönes Eltern-Haus in Heidelberg wollte ich eigentlich selbst verkaufen. Viele Interessenten kamen, es war sehr anstrengend. Frau Carta lernte ich durch Zufall kennen - sie war mir sofort sympathisch. Ihr freundliches, zupackendes, sehr professionelles Wesen kam mir entgegen. Mit ihrem Optimismus und großem Verständnis für mein Anliegen und das Haus, habe ich ihr nach 45min den Auftrag erteilt das Haus zu verkaufen. Und das, nachdem ich die vier wichtigsten Makler der Stadt, wegen zum Teil sprachlos machender Preisangebote und merkwürdigen Vertragsansprüchen, ausgeschlossen hatte. Ich konnte kein Vertrauen fassen. Frau Carta hat vom Kennenlernen bis zum unterschriebenen Vorvertrag nur sehr wenig Zeit gebraucht - und den Wunschpreis erzielt. Innerhalb kürzester Zeit machte sie Hausbesichtigungen. Sie hat mir eine realistische Einschätzung des Marktes gegeben, sofort verstanden welche Käufer ich mir wünsche und mich wissen lassen, wie ich das Haus passend herrichten kann. Den ganzen Prozess über hat sie mich begleitet und mich mit keiner noch so kleinen Frage allein gelassen. Sie ist sanft nach innen, deutlich und ehrlich in der Sache, wenn es sein muss resolut auf eine gute Art und ich hatte jederzeit absolutes Vertrauen zu ihr. Die Abwicklung lief problemlos und auch beim sehr emotionale Notartermin war ich froh, sie an meiner Seite zu wissen. Ich bin Frau Carta dankbar für Ihre Unterstützung und für den erfolgreichen Verkauf. Gerne empfehle ich sie jederzeit weiter.
                    <FormatQuoteIcon className={classes["last-quote"]}/>
                </div>
            </div>
        </>
     );
}

export default ReferentPage;