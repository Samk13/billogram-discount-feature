const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({data: "hello! from the api"})
    // res.sendFile('../pages/home.html',{root: __dirname})
})

router.post('/getData', (req, res) => {
  const { page_number } = req.query;
  res.json(page_number);
});

router.get('/client', (req, res) => {
    res.json({
        "id": "123435324534",
        "user":"logged in user",
        "message":"😎😎All discount codes"
    })
})

// post requests
router.post('/user/set-discount', (req, res) => {
    const body = req.body.user
    if (body.length < 1){
        // throw new Error("❌ you cant have empty string as input")
        res.json(
            {
                error: "❌ you cant have empty string as input"
            }
        )
    }
    res.json({
        "data": body,
        "errors": []
    })
})

module.exports = {
  router,
};
