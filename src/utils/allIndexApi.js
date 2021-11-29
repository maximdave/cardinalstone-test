import axios from "axios";

//	7 days chart details
const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
const weekDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 7);

const yesterdayDateFormatted = `${yesterdayDate.getFullYear()}-${
  yesterdayDate.getMonth() + 1
}-${yesterdayDate.getDate()}`;

const weekDateFormatted = `${weekDate.getFullYear()}-${
  weekDate.getMonth() + 1
}-${weekDate.getDate()}`;

const weekUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${weekDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getWeekChart() {
  try {
    const { data } = await axios.get(weekUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// A month chart details
const monthDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 30);
const monthDateFormatted = `${monthDate.getFullYear()}-${
  monthDate.getMonth() + 1
}-${monthDate.getDate()}`;
const monthUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${monthDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getMonthChart() {
  try {
    const { data } = await axios.get(monthUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// Three month chart details
const threeMonthsDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 90);
const threeMonthsDateFormatted = `${threeMonthsDate.getFullYear()}-${
  threeMonthsDate.getMonth() + 1
}-${threeMonthsDate.getDate()}`;
const threeMonthsUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${threeMonthsDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getThreeMonthsChart() {
  try {
    const { data } = await axios.get(threeMonthsUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// six month chart details
const sixMonthsDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 180);
const sixMonthsDateFormatted = `${sixMonthsDate.getFullYear()}-${
  sixMonthsDate.getMonth() + 1
}-${sixMonthsDate.getDate()}`;
const sixMonthsUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${sixMonthsDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getSixMonthsChart() {
  try {
    const { data } = await axios.get(sixMonthsUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// 1 year chart details
const aYearDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 365);
const aYearDateFormatted = `${aYearDate.getFullYear()}-${
  aYearDate.getMonth() + 1
}-${aYearDate.getDate()}`;
const aYearUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${aYearDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getAYearChart() {
  try {
    const { data } = await axios.get(aYearUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// 2 years chart details
const twoYearsDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 730);
const twoYearsDateFormatted = `${twoYearsDate.getFullYear()}-${
  twoYearsDate.getMonth() + 1
}-${twoYearsDate.getDate()}`;
const twoYearsUrl = `https://restserverstaging.cardinalstone.com/api/getSecurityChartData?startDate=${twoYearsDateFormatted}&endDate=${yesterdayDateFormatted}&security=ASI`;

async function getTwoYearsChart() {
  try {
    const { data } = await axios.get(twoYearsUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export {
  getWeekChart,
  getMonthChart,
  getThreeMonthsChart,
  getSixMonthsChart,
  getAYearChart,
  getTwoYearsChart,
};
