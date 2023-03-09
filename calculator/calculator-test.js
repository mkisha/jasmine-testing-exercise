
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 50000,
    years: 6,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('876.66');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 20000,
    years: 6,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('331.46');
});

/// etc
