import { useEffect } from "react";
import classes from "./ContactUs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllDataContactUs } from "../../redux/actions/contactUs.action";
import { Result } from "../../models/IContactUsReducer";
const ContactUs = () => {
  const dispatch = useDispatch<any>();
  const { results } = useSelector((state: any) => state.root.contactUs);

  useEffect(() => {
    dispatch(getAllDataContactUs());
  }, []);
  return (
    <div className={classes.main_container}>
      <div className={classes.main_heading}>
        You are Viewing queries of user from App and Website.
      </div>
      <div className={classes.container}>
        {results?.map((item: Result) => {
          return (
            <>
              <div className={classes.card_section}>
                <div className={classes.name}>{item?.full_name}</div>
                <div className={classes.email}>{item?.email}</div>
                <div className={classes.message}>{item?.message}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
