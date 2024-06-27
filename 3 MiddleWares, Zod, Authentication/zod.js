const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());
// const schema = zod.object({
//   email: zod.string().email(),
//   pasword: zod.string()
// });

app.use(express.json());

app.post('/health-checkup', (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: 'Invalid Input',
    });
  } else {
    res.send(response.data);
  }
});

const PORT = 3000;
app.listen(PORT);
