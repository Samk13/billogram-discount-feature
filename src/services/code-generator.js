

const generateRandomNum = () => {
  return Math.floor((Math.random() + 1) * 100000) + 10000
}

const validateAmount = (n) => {
  if (typeof n !== "number") {return "only number is accepted"}
  if (parseInt(n) <= 0){return "amount cannot be less then 0"}
  if (parseInt(n) >= 100){return "amount should be less then 100"}
  else {return n.toString()}
}

const generateCode = ({
  brandName,
  randFunc,
  discount,
  validDate,
  user
}) => {
  return {
    id : randFunc,
    name: brandName,
    discount,
    validDate,
    createdAt: new Date(Date.now()),
    expired: false,
    usedBy: user || ""
  }
}

const discountCodeGen = (n=1, generateCode=()=>({})) =>{
  const result =[]
  for (let i= 1; i <= n; i++){
    result.push(generateCode)
  }
  return result

}

module.exports = {
  discountCodeGen,
  generateRandomNum,
  validateAmount,
  generateCode
}