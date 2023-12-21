let router = require('../router/router');
const { postCat, getAllCats } = require('../models/cat');

router.get('/', async (req, res) => {
  try {
    const cats = await getAllCats();
    res.render('index.html', { cats }); 
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Error fetching cats');
  }
});

router.post('/', async (req, res) => {
    try {
      const cat = req.body;
      await postCat(cat);
      res.status(201).json({ message: 'Cat created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating cat');
    }
  });
  
  module.exports = router;