// User class implementation
class User {
  // Private fields
  #firstName;
  #secondName;
  #age;

  // Constructor
  constructor(firstName, secondName, age) {
    this.firstName = firstName; // Using setter to validate
    this.secondName = secondName; // Using setter to validate
    this.age = age; // Using setter to validate
  }

  // Setter for firstName
  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('firstName must be a string');
    }
    this.#firstName = value;
  }

  // Setter for secondName
  set secondName(value) {
    if (typeof value !== 'string') {
      throw new Error('secondName must be a string');
    }
    this.#secondName = value;
  }

  // Setter for age
  set age(value) {
    if (typeof value !== 'number') {
      throw new Error('age must be a number');
    }
    this.#age = value;
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Getter for full name
  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  // Introduce function
  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  // Celebrate birthday function
  celebrateBirthday() {
    this.#age += 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 !== 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
