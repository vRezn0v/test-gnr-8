export const ASSERTION_TYPES = [{
  name: "Equal to",
  value: "eq"
}, {
  name: "Not equal to",
  value: "ne"
}, {
  name: "Greater than",
  value: "gt"
}, {
  name: "Greater than / Equal to",
  value: "gte"
}, {
  name: "Lesser than",
  value: "gt"
}, {
  name: "Lesser than / Equal to",
  value: "gte"
}, {
  name: "Deep Equal",
  value: "deep"
},
  // {
  //   name: "Array (contains)",
  //   value: "contains"
  // }, {
  //   name: "String (includes)",
  //   value: "includes"
  // }, {
  //   name: "Object (hasKey)",
  //   value: "hasKey"
  // }]
]

export const assertionTypeEnum = {
  eq: "should return",
  ne: "should not return",
  gt: "should return a value greater than",
  gte: "should return a value greater than or equal to",
  lt: "should return a value lower than",
  lte: "should return a value lower than or equal to",
  // contains: "should contain a value",
  // includes: "should include a substring",
  // hasKey: "should have a key named",
  deep: "should return a deep equal of"
}

export const typeToFunctionEnum = {
  eq: "equal",
  ne: "notEqual",
  gt: "isAbove",
  gte: "isAtLeast",
  lt: "isBelow",
  lte: "isAtMost",
  //contains: "should contain a value",
  //includes: "should include a substring",
  //hasKey: "should have a key named",
  deep: "deepEqual"
}