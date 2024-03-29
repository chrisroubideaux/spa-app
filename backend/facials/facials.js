const express = require('express');
const Facial = require('./facial');

const facialRoutes = express.Router();

// GET all facials
facialRoutes.get('/', async (req, res) => {
  try {
    const facials = await Facial.find();
    res.status(200).json(facials);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch facials', error: error.message });
  }
});

// GET a single facial by ID
facialRoutes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const facial = await Facial.findById(id);

    if (!facial) {
      return res.status(404).json({ message: 'Facial not found' });
    }

    res.status(200).json(facial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch facial', error: error.message });
  }
});

// POST a new facial
facialRoutes.post('/', async (req, res) => {
  try {
    const newFacial = new Facial(req.body);
    const savedFacial = await newFacial.save();
    res.status(201).json(savedFacial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create facial', error: error.message });
  }
});

// PUT update an existing facial
facialRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFacial = await Facial.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedFacial) {
      return res.status(404).json({ message: 'Facial not found' });
    }

    res.status(200).json(updatedFacial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update facial', error: error.message });
  }
});

// DELETE a facial by ID
facialRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFacial = await Facial.findByIdAndDelete(id);

    if (!deletedFacial) {
      return res.status(404).json({ message: 'Facial not found' });
    }

    res.status(200).json({ message: 'Facial deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete facial', error: error.message });
  }
});

module.exports = facialRoutes;
