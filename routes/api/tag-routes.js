const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  // Include its associated Product data
  try {
    const TagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If the tag for the given id does not exist
    if (!TagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', (req, res) => {
  // create a new tag
});

// Update an existing tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// Delete a tag
router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    // If the product with the given doesn't exist
    if(!TagData) {
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
