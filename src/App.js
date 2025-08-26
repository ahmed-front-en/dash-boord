// src/App.js
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 1. استيراد مكونات التوجيه
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard"; // صفحة الداشبورد الرئيسية
import FoodOrderPage from "./FoodOrderPage"; // الصفحات الجديدة
import ManageMenuPage from "./ManageMenuPage";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGreyBg};
`;

const MainContent = styled.main`
  margin-left: ${({ theme }) => theme.layout.sidebarWidth};
  flex-grow: 1;
  padding: 24px 30px;
  overflow-y: auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* 2. استخدام Router للف التطبيق */}
      <Router>
        <AppContainer>
          <Sidebar />
          <MainContent>
            <Header />
            {/* 3. تحديد أين ستعرض الصفحات المختلفة */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/food-order" element={<FoodOrderPage />} />
              <Route path="/manage-menu" element={<ManageMenuPage />} />
              {/* أضف مسارات باقي الصفحات هنا لاحقًا */}
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
