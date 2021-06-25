exports.brand_greeting = (req, res) => {
  res.json({
      data: {
         "greeting": "hello! from the api",
         "time": new Date(Date.now())
      }
   })
}