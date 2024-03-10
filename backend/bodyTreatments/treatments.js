// treatments routes
const express = require('express');
const Treatment = require('./treatment');
const treatmentRoutes = express.Router();

// GET all treatments
treatmentRoutes.get('/', async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch treatments', error: error.message });
  }
});

// GET a single treatment by ID
treatmentRoutes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const treatment = await Treatment.findById(id);

    if (!treatment) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json(treatment);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch service', error: error.message });
  }
});

// POST a new treatment
treatmentRoutes.post('/', async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    const savedTreatment = await newTreatment.save();
    res.status(201).json(savedTreatment);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to create treatment service',
        error: error.message,
      });
  }
});

// PUT update an existing treatment
treatmentRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTreatment = await Treatment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTreatment) {
      return res.status(404).json({ message: 'Server not found' });
    }

    res.status(200).json(updatedTreatment);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update service', error: error.message });
  }
});

// DELETE a treatment by ID
treatmentRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTreatment = await Treatment.findByIdAndDelete(id);

    if (!deletedTreatment) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete service', error: error.message });
  }
});

module.exports = treatmentRoutes;
