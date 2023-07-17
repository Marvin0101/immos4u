import classes from '@/styles/Footer.module.css'
import Link from 'next/link';

function Footer() {
    return ( 
        <div className={classes.footer}>
            <div className={classes.content}>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/impressum">Impressum</Link>
                <Link href="/jobs">Jobs</Link>
                <Link href="/kontakt">Kontakt</Link>
            </div>
            <div>© 2023 immos4u</div>
        </div>
     );
}

export default Footer;