module.exports = function check(str, bracketsConfig) {
  // your solution
const array = Array.from(str);
let result = array.join('');
for (let i = 0; i < array.length; i++) {
  for (let b = 0; b < bracketsConfig.length; b++) {
    let n = bracketsConfig[b].join('');
    result = result.replace(n, '');
  };
};
if (result.length === 0) {
  return true;
}
else {
  return false;
};
};