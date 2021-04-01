import { Tabs } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const CustomTab = ({ tabs = [], activeKey, onChange, children }) => (
  <Tabs activeKey={activeKey} onChange={onChange}>
    {tabs.map((tab) => (
      <TabPane
        tab={
          <span className="flex items-center">
            {tab.icon}
            {tab.name}
          </span>
        }
        key={tab.key}
      >
        {children}
      </TabPane>
    ))}
  </Tabs>
);

export default CustomTab;
