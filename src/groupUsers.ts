/**
 * Groups users into EMPLOYEE and CONTRACTOR groups.
 * @param {Array<unknown>} users - The array of users to be grouped.
 * @returns {Object<employees: Array<any>, contractors: Array<any>>} - An object containing two arrays: employees and contractors.
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  const groupedUsers = {
    employees: [] as Array<unknown>,
    contractors: [] as Array<unknown>,
  };

  users.forEach((user: any) => {
    if (user && typeof user === 'object' && 'type' in user) {
      if (user.type === 'EMPLOYEE') {
        groupedUsers.employees.push(user);
      } else if (user.type === 'CONTRACTOR') {
        groupedUsers.contractors.push(user);
      }
    }
  });

  return groupedUsers;
};
