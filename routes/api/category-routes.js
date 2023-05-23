const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories
router.get('/', async (req, res) => {
  // Include its associated Product data
  try {
    const CategoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one category
router.get('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If the tag for the given id does not exist
    if (!CategoryData) {
      res.status(404).json({ message: 'No categry found with that id!' });
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    !updatedCategory[0]
      ? res.status(404).json({ message: "No category found with this id!" })
      : res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: "Category update failed" });
  }
});

// Delete a category
router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
      cascade: true
    });
    // If the category with the given id doesn't exist
    if(!CategoryData) {
      res.status(404).json({message: 'No Category found with that id!'});
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
