

it('should calculate the monthly rate correctly', function () {
  const currentValues = {
amount: 100000, years: 6, rate: 4
  }
  expect(calculateMonthlyPayment(currentValues)).toEqual('1564.52')
});


it("should return a result with 2 decimal places", function() {
  const currentValues = {
    amount: 100000, years: 6, rate: 4
      }
      expect(calculateMonthlyPayment(currentValues)).toEqual('1564.52')
});

/// etc
