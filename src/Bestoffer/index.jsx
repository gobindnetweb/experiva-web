import React from "react";
import Offer1 from "../assets/images/offer1.jpg";
import styles from "./Bestoffer.module.css";
import { Row, Col, Button } from "antd";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";

const Bestoffer = () => {
  return (
    <div className="container">
      <div className="oleoScriptBold">
        <div className="oleoScriptRegular">
          <h1
            className="mb-16 text-5xl font-bold transform -rotate-3"
            style={{ color: "#5a5a58" }}
          >
            Our best offers
          </h1>
        </div>
      </div>

      <div className="px-32">
        <Row>
          <Col span={12} className="border-r-2 px-8 py-4">
            <div className="openSansFont">
              <div className="openSans">
                <h2 className="font-semibold text-light">Offer of the week</h2>
              </div>
            </div>

            <Row>
              <Col span={8}>
                <div className="h-full flex flex-col justify-around">
                  <div>
                    <label className="font-semibold text-light">From</label>
                    <div className="font-normal text-3xl">
                      <label>Singapore</label>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-light">To</label>
                    <div className="font-normal text-3xl">
                      <label>Malaysia</label>
                    </div>
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <img src={Offer1} alt="" className={styles.images} />
              </Col>

              <Col span={8}>
                <div className="h-full flex flex-col justify-center">
                  <label className="ml-7">New Price</label>

                  <div className="singa">
                    <div className="font-semibold text-3xl">
                      <label>$ 820.00</label>
                    </div>
                  </div>
                  <div className="text-sm">
                    <Button type="primary" shape="round">
                      View Calander
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={12} className="border-l-2 px-8 py-4">
            <div className="openSansFont">
              <div className="openSans">
                <h2 className="ml-5" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  New promotions
                </h2>
              </div>
            </div>

            <Row>
              <Col span={16}>
                <div class="space-y-6 ml-5">
                  <img src={img1} alt="" />

                  <img src={img2} alt="" />
                </div>
              </Col>

              <Col span={6}>
                <div className={styles.setmarg}>
                  <div className="text-lg text-light">
                    <label>Visit</label>
                  </div>

                  <div className="font-normal text-xl">
                    <label>Indonesia</label>
                  </div>

                  <div class="space-y-14">
                    <div className="singa">
                      <div className="font-semibold text-3xl">
                        <label>$ 430.00</label>
                      </div>
                    </div>

                    <div className="text-lg text-light">
                      <label>Visit</label>
                    </div>
                  </div>

                  <div
                    className="font-normal
                   text-xl"
                  >
                    <label>Aruba</label>
                  </div>

                  <div className="singa">
                    <div className="font-semibold text-3xl">
                      <label>$ 430.00</label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Bestoffer;
