import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import classes from '@/styles/Address.module.css';

function Address(props: any) {
  return (
    <>
      <address>
        {props.name} <br />
        {props.position && <div className={classes.row}>- {props.position} -</div>}
        {props.mobil && <div className={classes.row}><PhoneAndroidIcon fontSize='small'/>{props.mobil} </div>} 
        {props.mail && <div className={classes.row}><EmailIcon fontSize='small'/>{props.mail}</div>} 
        {props.street && <>{props.street} <br /></>} 
        {props.city && <>{props.city} <br /></>} 
        {props.tel && <div className={classes.row}><CallIcon fontSize='small'/>{props.tel}</div>} 
      </address>
    </>
  );
}

export default Address;
