export const calculateInstallments = (totalAmount) => {
  const options = [];
  for (let i = 0; i <= 6; i += 2) {
    const monthlyPayment = i === 0 ? totalAmount : (totalAmount / i).toFixed(2);
    const totalPayment =
      i === 0 ? totalAmount : (monthlyPayment * i).toFixed(2);
    options.push({
      installment: i === 0 ? "Tek Çekim" : i,
      monthlyPayment: monthlyPayment,
      totalPayment: totalPayment,
    });
  }
  return options;
};
