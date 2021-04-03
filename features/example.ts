class TestClass { 

  // here we have initialized a string variable called testName and testName is a private variable
  /*private*/ testName: string; 

  // this is a parameterized constructor for initializing an object of TestClass
  // name is a string variable and i is a number variable
  public constructor(name: string, i: number) { 
    // if the user doesnt give a name during initilization of object then the name becomes null. Here we have used === to avoid type conversions
    if (this.testName === undefined) { this.testName = null; } 	
    // if its not undefined then name testName is initialized as name given in the object
    this.testName = name; 
  } 

  // this is a public function initilized in TestClass
  public countToThree() { 
    // m is initialized as 1 and its a for loop so after each loop m would increse by 1 and when m is greater than 3 then loop gets terminated
    for(let m: number = 1; m <= 3; m++) {{ 
      console.info("Count is: " + m); 
    };}
    /** Output 
    * Count is 1 
    * Count is 2 
    * Count is 3
    */
  } 
} 

// TestClass object is created
TestClass["__class"] = "TestClass";