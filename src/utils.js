const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getDateFormat = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1 >= 10 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
  const date = currentDate.getDate();

  const formattedDate = `${year}-${month}-${date}`;

  return formattedDate;
};

export const generateDummyExpenses = () => {
  const expenses = [];

  const startDate = new Date(2019, 0, 1);
  const endDate = new Date(2022, 11, 31);

  let idx = 20;
  while (idx >= 0) {
    const expense = {
      id: Math.random().toString(16) + Math.random().toString(16),
      title: `ProductId_${Math.random().toString(16)}`,
      date: randomDate(startDate, endDate),
      amount: +(Math.random() * 100).toFixed(2),
    };
    expenses.push(expense);
    idx--;
  }

  return expenses;
};
