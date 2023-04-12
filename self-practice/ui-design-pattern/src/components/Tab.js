import styled from "styled-components";

const TabWrapper = styled.div`
  border: 1px solid black;
`;

const TabMenu = styled.ul`
  background-color: white;
  color: black;
  font-weight: bold;
  list-style: none;
  padding-left: 0;
  margin: 0;
  border-bottom: 1px solid black;

  display: flex;
  justify-items: center;
  align-items: center;

  .submenu {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid black;
    }
  }

  .active {
    background-color: black;
    color: white;
    transition: 0.3s;
  }
`;

const MenuContent = styled.div`
  text-align: center;
  padding: 15px 10px;
`;

function Tab({ menu, currentTab, onSelect }) {
  return (
    <TabWrapper>
      <TabMenu>
        {menu.map((el, idx) => (
          <li
            key={el.title}
            className={idx === currentTab ? "submenu active" : "submenu"}
            onClick={() => onSelect(idx)}
          >
            {el.title}
          </li>
        ))}
      </TabMenu>
      <MenuContent>{menu[currentTab].content}</MenuContent>
    </TabWrapper>
  );
}

Tab.defaultProps = {
  menu: [],
};

export default Tab;
