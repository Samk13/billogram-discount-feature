const {generateRandomNum, discountCodeGen, validateAmount, generateCode} = require("../../services/code-generator")
exports.brand_greeting = (req, res) => {

  res.json({
      data: {
         greeting: "hello! from the api",
         time: new Date(Date.now()),
         codeAmount: discountCodeGen(5 , generateCode({
            randFunc: generateRandomNum().toString(),
            brandName:"Sam",
            discount: "50%",
            validDate: new Date(Date.now()),
            user: "UserSam"})
            ),
         validate : validateAmount(123),
         discountCode: generateCode({brandName:"Sam", discount: "50%",validDate: new Date(Date.now()), user: "UserSam"})
      }
   })
}