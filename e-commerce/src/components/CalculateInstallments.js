export const calculateInstallments = (totalAmount) => {
  const options = [];
  for (let i = 0; i <= 6; i += 2) {
    const totalWithInterest = (totalAmount * (1 + 0.1 * (i / 2))).toFixed(2);
    const monthlyPayment = (totalWithInterest / (i || 1)).toFixed(2);
    options.push({
      installment: i === 0 ? "Tek Çekim" : i,
      monthlyPayment: monthlyPayment,
      totalPayment: totalWithInterest,
    });
  }
  return options;
};
