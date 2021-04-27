import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import { Collapse } from "antd";
import { Checkbox, Button } from "antd";
import { Input } from "antd";
import {
  CaretRightOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Travellerdetail = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <h1 className="font-semibold text-lg">Traveller Details </h1>

      <div className="ml-8">
        <Card className="max-w-5xl ">
          <Row>
            <Col span={21}>
              <div className="text-lg">Adult</div>
            </Col>
            <Col span={3}>
              <div className=" text-green-500 font-semibold">1/1 SELECTED </div>
            </Col>
          </Row>

          <div className="mt-2 ">
            <Card className="max-w-5xl mt-4 ">
              <Checkbox onChange={onChange}>
                .<span className="font-semibold text-lg">Sandeep Singh, </span>
              </Checkbox>

              <span className="text-lg ml-2">Male</span>
            </Card>
          </div>

          <div className="mt-2 ">
            <Card className="max-w-5xl mt-4 ">
              <div className=" font-semibold">
                <Collapse
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  expandIconPosition="right"
                  className="site-collapse-custom-collapse"
                >
                  <Panel
                    header={
                      <div className="flex items-center justify-between">
                        <Checkbox onChange={onChange}>
                          <span className="font-semibold text-lg">
                            Vikash Sharna,
                          </span>
                          <span className="text-lg ml-2">Male</span>
                        </Checkbox>
                        <Button
                          shape="round"
                          className="flex justify-end "
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          complete
                        </Button>
                      </div>
                    }
                    key="1"
                    className="site-collapse-custom-panel"
                  >
                    <span className="semi-bold">IMPORTANT:</span>
                    <span className="ml-2 text-light text-xs">
                      Enter your name as it is mentioned on your passport or any
                      government approved ID.
                    </span>
                    <Row>
                      <Col span={10}>
                        <input type="text" placeholder="Vikash" />
                      </Col>
                      <Col span={10}>
                        <input type="text" placeholder="Sharma" />
                      </Col>
                      <Col span={4}>
                        <Button>
                          <UserAddOutlined />
                        </Button>
                        <Button>
                          <UserOutlined />
                        </Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </div>
            </Card>
          </div>
          <div className="font-bold text-lg m-6 mb-0 text-red-500 ">
            + ADULT
          </div>
        </Card>
      </div>

      <div className="font-semibold text-lg mt-8">Contact Information</div>
      <div className="ml-8">
        <Card className="max-w-5xl ">
          <Card className="max-w-5xl ">
            <div className="text-light text-xs">
              Your ticket and flights Information will be sent here
            </div>
            <Row>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Country Code</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="India (+91)" />
                </div>
              </Col>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Mobile No.</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="7889104250" />
                </div>
              </Col>

              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Email</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="amandeepbahi35@gmail.com" />
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </div>

      {/*Gst Number*/}

      <div className="font-semibold text-lg mt-8">
        GST number for business travel (Optional)
      </div>
      <div className="ml-8">
        <Card className="max-w-5xl ">
          <Card className="max-w-5xl ">
            <div className="">
              <Checkbox onChange={onChange}>
                To claim credit of GST charged by airlines/MMT, please enter
                your company's GST number
              </Checkbox>
            </div>
            <Row>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Company Name</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="Company Name" />
                </div>
              </Col>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Registration No.</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="Registration No." />
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </div>

      <div className="font-semibold text-lg mt-8">Acknowledgement</div>
      <div className="ml-8">
        <Card className="max-w-5xl">
          <Card className="max-w-5xl ">
            <div className="">
              <Checkbox onChange={onChange}>
                I understand and agree with the{" "}
                <span className="" style={{ color: "#ff5722" }}>
                  fare rules,
                </span>{" "}
                the{" "}
                <span className="" style={{ color: "#ff5722" }}>
                  Privacy Policy,
                </span>{" "}
                the{" "}
                <span className="" style={{ color: "#ff5722" }}>
                  User Aggrement
                </span>{" "}
                and{" "}
                <span className="" style={{ color: "#ff5722" }}>
                  Terms of Service
                </span>{" "}
                of MakeMyTrip.
              </Checkbox>
            </div>
            <Row>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Company Name</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="Company Name" />
                </div>
              </Col>
              <Col span={8}>
                <div className="mt-4 font-semibold ml-4">Registration No.</div>
                <div className="ml-4 mr-4">
                  <Input type="text" placeholder="Registration No." />
                </div>
              </Col>
            </Row>
          </Card>
          <Button
            size="large"
            className="mt-8 "
            style={{ backgroundColor: "#ff5722", color: "white", width: 170 }}
          >
            Continue
          </Button>
        </Card>
      </div>
    </>
  );
};
export default Travellerdetail;
