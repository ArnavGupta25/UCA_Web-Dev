// var promise1 = new Promise(promiseExecuter);

function custompromiseexec() {
  console.log("Inside custom promise executor");
}
function custompromise(executorfunction) {
  executorfunction();
  this.state = "pending";
  let returnval = undefined;
}

var custompromise1 = new custompromise(custompromiseexec);

// -------------------------------------------------------------------------------------------------------------------------------------------------

function custompromiseExecuter(resolve, reject) {
  setTimeout(() => {
    resolve("Sample Value");
    // reject({response: "responsevalue"})
    console.log("Inside promise executer function");
  }, 10000);
}

function custompromise(executorfunction) {
  executorfunction(
    (responsearg) => {
      this.state = "fullfiled";
      console.log("inside resolve function", responsearg);
    },
    (errorarg) => {
      this.state = "rejected";
      console.log("inside reject function", errorarg);
    }
  );
  this.state = "pending";
  let returnval = undefined;
}

var custompromise1 = new custompromise(custompromiseExecuter);

// -------------------------------------------------------------------------------------------------------------------------------------------------

function custompromiseExecuter(resolve, reject) {
  setTimeout(() => {
    resolve("Sample Value");
    // reject({response: "responsevalue"})
    console.log("Inside promise executer function");
  }, 10000);
}

function custompromise(executorfunction) {
  this.state = "pending";
  let successcallbackcustom;
  let errorcallbackcustom;

  executorfunction(
    (responsearg) => {
      this.state = "fullfiled";
      console.log("inside resolve function", responsearg);
      successcallbackcustom(responsearg);
    },
    (errorarg) => {
      this.state = "rejected";
      errorcallbackcustom(errorarg)
      console.log("inside reject function", errorarg);

    }
  );
  // this.state="pending";

  this.then = (arg1) => {
    successcallbackcustom = arg1;
  };
  this.catch = (arg1) => {
    errorcallbackcustom = arg1;
  };

  let returnval = undefined;
}

var custompromise1 = new custompromise(custompromiseExecuter);

custompromise1.then((somevalue) => {
  responseValue = somevalue;
});
custompromise1.catch((somevalue) => {
  responseValue = somevalue;
});


//---------------------------------------------------------------------------------------------------------------------------------------------------------
