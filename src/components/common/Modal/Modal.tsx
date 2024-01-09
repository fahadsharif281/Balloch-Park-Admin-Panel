import { Children, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import classes from "./Modal.module.scss";
function Modall({
  show,
  onHide,
  children,
  title,
}: {
  show: boolean;
  title?: string;
  onHide: any;
  children: any;
}) {
  return (
    <>
      <div>
        <Modal className={classes.modal} centered show={show} onHide={onHide}>
          <Modal.Header closeButton>
            {title && <Modal.Title>{title}</Modal.Title>}
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Modall;
