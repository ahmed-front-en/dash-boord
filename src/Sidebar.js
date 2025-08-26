// src/Sidebar.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // استيراد NavLink للتوجيه
import {
  FiGrid,
  FiShoppingCart,
  FiFileText,
  FiStar,
  FiSettings,
  FiCreditCard,
  FiUser,
  FiHelpCircle,
} from "react-icons/fi";

// --- Styled Components (النسخة الكاملة والصحيحة) ---

const SidebarContainer = styled.aside`
  width: ${({ theme }) => theme.layout.sidebarWidth};
  background-color: ${({ theme }) => theme.colors.cardBg};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 20px;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkText};
`;

const MenuTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyText};
  text-transform: uppercase;
  margin: 20px 0 10px;
  padding: 0 12px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greyText};
    font-weight: 500;
    transition: all 0.3s ease;
    margin-bottom: 4px;

    svg {
      font-size: 20px;
    }
  }

  /* NavLink سيضيف هذا الكلاس تلقائيًا للرابط النشط */
  a.active {
    background-color: ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.primaryPurple};
  }

  /* عند مرور الماوس على رابط غير نشط */
  a:not(.active):hover {
    background-color: ${({ theme }) => theme.colors.lightGreyBg};
  }
`;

// --- بيانات الروابط (مع المسارات الصحيحة) ---

const menuItemsData = [
  { path: "/", icon: <FiGrid />, text: "Dashboard" },
  { path: "/food-order", icon: <FiShoppingCart />, text: "Food Order" },
  { path: "/manage-menu", icon: <FiFileText />, text: "Manage Menu" },
  { path: "/reviews", icon: <FiStar />, text: "Customer Review" },
];

const otherItemsData = [
  { path: "/settings", icon: <FiSettings />, text: "Settings" },
  { path: "/payment", icon: <FiCreditCard />, text: "Payment" },
  { path: "/accounts", icon: <FiUser />, text: "Accounts" },
  { path: "/help", icon: <FiHelpCircle />, text: "Help" },
];

// --- المكون الرئيسي ---

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoIcon>G</LogoIcon>
        <LogoText>GOODFOOD</LogoText>
      </LogoContainer>
      <nav>
        <MenuTitle>Menu</MenuTitle>
        <MenuList>
          {menuItemsData.map((item, index) => (
            <MenuItem key={index}>
              <NavLink to={item.path}>
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
        <MenuTitle>Others</MenuTitle>
        <MenuList>
          {otherItemsData.map((item, index) => (
            <MenuItem key={index}>
              <NavLink to={item.path}>
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
