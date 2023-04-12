import { useState } from "react";
import Tab from "./Tab";

function TabSample() {
  const [currentTab, setCurrentTab] = useState(0);

  const menu = [
    { title: "menu1", content: "content1" },
    { title: "menu2", content: "content2" },
    { title: "menu3", content: "content3" },
    { title: "menu4", content: "content4" },
  ];

  const selectMenuHandler = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <Tab menu={menu} currentTab={currentTab} onSelect={selectMenuHandler} />
  );
}

export default TabSample;
