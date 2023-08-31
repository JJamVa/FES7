var express = require('express');
var router = express.Router();

let arr = [];


router.get('/read', (req, res) => {
  res.status(200).json({
    message: "read message",
  })
})

// POST
// 데이터받기
router.post('/create', (req, res) => {
  const { data } = req.body;
  arr.push(data)
  res.status(200).json({
    message: "create success!!",
    result: arr
  })
})

router.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  })
})

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id,1)
  res.status(200),json({
    message: "delete success",
    result:arr,
  })
})

module.exports = router;