const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

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
router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    !updatedTag[0]
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json({ message: "Tag update failed" });
  }
});


// Delete a tag
router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    // If the tag with the given id doesn't exist
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
