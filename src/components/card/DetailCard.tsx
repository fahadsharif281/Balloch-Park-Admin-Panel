import React from "react";
import classes from "./DetailCard.module.scss";
import CustomButton from "../common/Button/Button";
import {
  DeleteIcon,
  EditIcon,
  PlusSign,
  ViewIcon,
} from "../../assets/svg/SvgImges";
import logo from "../../assets/png/dashboard.png";

import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IDetailCard } from "../../models/IDetailCard";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ title, addTo, results }: IDetailCard) => {
  const navigate = useNavigate();
  const renderTooltip = (name: string, ...props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ fontSize: "10px" }}>{name}</div>
    </Tooltip>
  );
  return (
    <>
      <div className={classes.container}>
        <div className={classes.label_contain}>
          <label className={classes.label}>{title}</label>
          <div>
            <CustomButton
              onClick={() => {
                if (addTo) {
                  navigate(addTo);
                }
              }}
              buttonClassName={classes.button_class}
              text={
                <>
                  <div className={classes.add_button}>
                    <div className={classes.img}>
                      <PlusSign />
                    </div>
                    <div>Add</div>
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className={classes.card_container}>
          {results &&
            results?.map((items) => {
              return (
                <Card className={classes.card}>
                  <img src={items.images[0].image_url} />
                  <div className={classes.title_contain}>
                    <Card.Title className={classes.title}>
                      {items.title}
                    </Card.Title>
                  </div>
                  <div className={classes.card_images}>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("Delete")}
                    >
                      <div>
                        <DeleteIcon />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("Edit")}
                    >
                      <div>
                        <EditIcon />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip("View")}
                    >
                      <div>
                        <ViewIcon />
                      </div>
                    </OverlayTrigger>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DetailCard;