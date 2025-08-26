// src/Dashboard.js
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { FiArrowUp } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// --- بيانات وهمية للرسم البياني ---
const revenueData = [
  { name: "01", lastWeek: 4000, thisWeek: 2400 },
  { name: "02", lastWeek: 3000, thisWeek: 1398 },
  { name: "03", lastWeek: 2000, thisWeek: 9800 },
  { name: "04", lastWeek: 2780, thisWeek: 3908 },
  { name: "05", lastWeek: 1890, thisWeek: 4800 },
  { name: "06", lastWeek: 2390, thisWeek: 3800 },
  { name: "07", lastWeek: 3490, thisWeek: 4300 },
  { name: "08", lastWeek: 2000, thisWeek: 6500 },
  { name: "09", lastWeek: 2780, thisWeek: 3000 },
  { name: "10", lastWeek: 1890, thisWeek: 5200 },
  { name: "11", lastWeek: 2390, thisWeek: 7800 },
  { name: "12", lastWeek: 3490, thisWeek: 4300 },
];

// --- Styled Components ---
const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyText};
  margin: 0 0 8px;
`;

const CardValue = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`;

const CardTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  margin: 4px 0 12px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.greenAccent : theme.colors.redAccent};
`;

const CardSubtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.greyText};
  margin: 0;
`;

const ChartContainer = styled.div`
  height: 150px;
  margin-top: 30px; /* زيادة المسافة العلوية */
`;

// --- المكون الرئيسي للصفحة ---
const Dashboard = () => {
  // في التصميم الأصلي، لا يوجد عمود نشط، كلها بنفس اللون
  // لكننا سنبقي على هذه الفكرة للتلوين لاحقًا إذا أردنا
  const activeBarIndex = -1; // -1 يعني لا يوجد عمود نشط

  return (
    <DashboardGrid>
      {/* البطاقة الأولى: الإيرادات */}
      <Card>
        <CardTitle>Revenue</CardTitle>
        <CardValue>IDR 7,852,000</CardValue>
        <CardTrend type="up">
          <FiArrowUp />
          <span>2.1% vs last week</span>
        </CardTrend>
        <CardSubtitle>Sales from 1-12 Dec, 2020</CardSubtitle>

        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            >
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={false} />
              <Tooltip cursor={{ fill: "rgba(93, 65, 204, 0.1)" }} />
              <Bar dataKey="thisWeek" fill="#5D41CC" radius={[4, 4, 4, 4]} />
              {/* في التصميم الأصلي، هناك رسم بياني آخر بلون أفتح */}
              <Bar dataKey="lastWeek" fill="#E9E5FF" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>

      {/* بطاقات وهمية مؤقتة */}
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>
      <Card>Card 5</Card>
    </DashboardGrid>
  );
};

export default Dashboard;
