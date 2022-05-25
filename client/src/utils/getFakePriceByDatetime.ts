const getFakePriceByDatetime = (date?: Date) => {
  if (date) {
    const fakePriceByDatetime = date.getTime().toString();
    const value = fakePriceByDatetime.slice(
      fakePriceByDatetime.length - 5,
      fakePriceByDatetime.length - 3,
    );

    const safePrice = value === '00' ? 0.0015 : Number(`0.00${value}`);
    return safePrice;
  }

  return 0;
};

export default getFakePriceByDatetime;
