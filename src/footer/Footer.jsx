import React from "react";
import { Row, Col } from "antd";
import styles from "./footer.module.css";
import {
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import FooterLogo from "../assets/images/fot.png";
import fotter_grey_logo from "../assets/images/fotter_grey_logo.png";

const Footer = () => {
  return (
    <>
      <div className={styles.backimg}>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="flex items-center justify-between">
            <div>
              <img src={FooterLogo} height={350} width={350} />
            </div>
            <div>
              <img src={FooterLogo} height={250} width={200} />
            </div>
          </div>
        </div>
        <div className={styles.font}>
          <Row>
            <Col span={6}>
              <img src={fotter_grey_logo} alt="" />
            </Col>
            <Col span={6}>Quick links</Col>
            <Col span={6}>Customer Care</Col>
            <Col span={6}>Contact us</Col>
          </Row>
        </div>

        <div className={styles.size}>
          <Row>
            <Col span={6}>Lorem ipsum dolor sit amet </Col>
            <Col span={6}>Home</Col>
            <Col span={6}>About us </Col>
            <Col span={6}>
              <CalendarOutlined style={{ color: "green" }} />
              7/25 sheridan Lane Gundagai ,
            </Col>
          </Row>

          <Row>
            <Col span={6}>consecteur adipicing elit Sint </Col>
            <Col span={6}>Flights </Col>
            <Col span={6}>Privacy policy </Col>
            <Col span={6}>NSW 27221 </Col>
          </Row>

          <Row>
            <Col span={6}> dolores quaerat enim accusantium et </Col>
            <Col span={6}>Services </Col>
            <Col span={6}> Disclaimer policy</Col>
            <Col span={6}>
              <PhoneOutlined rotate="90" style={{ color: "green" }} /> +61
              259240804, 1800 123 2135
            </Col>
          </Row>

          <Row>
            <Col span={6}> dolores quaerat enim accusantium et </Col>
            <Col span={6}>Services </Col>
            <Col span={6}> Disclaimer policy</Col>
            <Col span={6}> 2135 </Col>
          </Row>

          <Row>
            <Col span={6}> cum. Lorem ipsum dolor sit amet</Col>
            <Col span={6}>Blogs </Col>
            <Col span={6}> Terms & conditions </Col>
            <Col span={6}> info@travoweb.com </Col>
          </Row>

          <Row>
            <Col span={6}> officiis cumque nulla natus tenetur dolores</Col>
            <Col span={6}> Contact us </Col>
            <Col span={6}> FAQs </Col>
            <Col span={6}>
              <MailOutlined style={{ color: "green" }} />
              info@travoweb.com
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Footer;
