// crud operations for waxings
const express = require('express');
const { Request, Response } = require('express');
const Waxing = require('./waxing');

const waxingRoutes = express.Router();

// GET all waxing services
waxingRoutes.get('/', async (req, res) => {
  try {
    const waxingServices = await Waxing.find();
    res.status(200).json(waxingServices);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to fetch waxing services',
        error: error.message,
      });
  }
});

// GET a single waxing service by ID
waxingRoutes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const waxingService = await Waxing.findById(id);

    if (!waxingService) {
      return res.status(404).json({ message: 'Waxing service not found' });
    }

    res.status(200).json(waxingService);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to fetch waxing service',
        error: error.message,
      });
  }
});

// POST a new waxing service
waxingRoutes.post('/', async (req, res) => {
  try {
    const newWaxingService = new Waxing(req.body);
    const savedWaxingService = await newWaxingService.save();
    res.status(201).json(savedWaxingService);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to create waxing service',
        error: error.message,
      });
  }
});

// PUT update an existing waxing service
waxingRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWaxingService = await Waxing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedWaxingService) {
      return res.status(404).json({ message: 'Waxing service not found' });
    }

    res.status(200).json(updatedWaxingService);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to update waxing service',
        error: error.message,
      });
  }
});

// DELETE a waxing service by ID
waxingRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWaxingService = await Waxing.findByIdAndDelete(id);

    if (!deletedWaxingService) {
      return res.status(404).json({ message: 'Waxing service not found' });
    }

    res.status(200).json({ message: 'Waxing service deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Failed to delete waxing service',
        error: error.message,
      });
  }
});

module.exports = waxingRoutes;
