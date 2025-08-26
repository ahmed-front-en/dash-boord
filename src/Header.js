// src/Header.js
import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 30px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkText};

  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.cardBg}; /* تغيير الخلفية للأبيض */
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 12px;
  padding: 0 15px;
  width: 350px;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primaryPurple};
  }

  svg {
    color: ${({ theme }) => theme.colors.greyText};
    font-size: 20px;
  }

  @media (max-width: 992px) {
    display: none; /* إخفاء شريط البحث على الشاشات المتوسطة والصغيرة */
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding: 12px 10px;
  font-size: 14px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const RestaurantSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    @media (max-width: 480px) {
      display: none; /* إخفاء النص على الشاشات الصغيرة جدًا */
    }
  }
`;

const NotificationBell = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.darkText};
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 3px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.redAccent};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.cardBg};
  }
`;

const Header = ({ onMenuClick }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MenuButton onClick={onMenuClick}>
          <FiMenu />
        </MenuButton>
        <SearchBarContainer>
          <FiSearch />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBarContainer>
      </HeaderLeft>
      <HeaderRight>
        <RestaurantSelect>
          <img
            src="https://cdn-icons-png.flaticon.com/512/877/877951.png"
            alt="Burger Icon"
          />
          <span>Delicious Burger</span>
        </RestaurantSelect>
        <NotificationBell>
          <FiBell />
        </NotificationBell>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
