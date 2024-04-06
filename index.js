/* Your Code Here */
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arr) {
  return arr.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');

  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

// TIme out event
function createTimeOutEvent(dateStamp) {
  const dateAndHour = dateStamp.split(' ');
  const date = dateAndHour[0];
  const hour = parseInt(dateAndHour[1], 10);

  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: hour,
    date: date,
  });

  return this;
}

//Hours worked
function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(
    (event) => event.date === date
  );
  const timeOutEvent = this.timeOutEvents.find(
    (event) => event.date === date
  );

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}



function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  return hoursWorked * payRate;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPay, employee) => {
    return totalPay + allWagesFor.call(employee);
  }, 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
