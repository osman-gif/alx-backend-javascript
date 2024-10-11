function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    CurrentYearIncome = `income-${getCurrentYear()}`;
    CurrentYearGdp = `gdp-${getCurrentYear()}`;
    CurrentYearCapita = `capita-${getCurrentYear()}`;
    return {
        [CurrentYearIncome]: income,
        [CurrentYearGdp]: gdp,
        [CurrentYearCapita]: capita
    }

  }
  