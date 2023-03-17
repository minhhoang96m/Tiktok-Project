import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./CenterContent.module.scss";
import { useState } from "react";
import {
    Button as ButtonBT,
    Offcanvas,
    Container,
    Row,
    Col,
} from "react-bootstrap";

const cx = classnames.bind(styles);
function CenterContent({ children }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={cx("wrapper")}>
            {children}
            <div
                className={cx(
                    "display-3",
                    "text-center",
                    "text-uppercase",
                    "bg-primary"
                )}
            >
                this is a title
            </div>

            <div className={cx("table-responsive-xxl")}>
                <table className={cx("table ", "table-bordered", "layout")}>
                    <thead className={cx("table-danger")}>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br></br>

            <ButtonBT
                variant={cx("primary")}
                onClick={handleShow}
                className={cx("me-2")}
            >
                Launch
            </ButtonBT>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement={cx("start")}
                backdrop
                scroll
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                    This is text
                </Offcanvas.Body>
            </Offcanvas>

            <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
    </Container>
        </div>
    );
}
CenterContent.propTypes = {
    children: PropTypes.node,
};
export default CenterContent;
