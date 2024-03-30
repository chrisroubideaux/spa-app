const { Request, Response } = require('express');
const Waxing = require('./waxing');

// Controller for GET all waxing services
exports.getAllWaxingServices = async (req, res) => {
  try {
    const waxingServices = await Waxing.find();
    res.status(200).json(waxingServices);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch waxing services',
      error: error.message,
    });
  }
};

// Controller for GET a single waxing service by ID
exports.getWaxingServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const waxingService = await Waxing.findById(id);

    if (!waxingService) {
      res.status(404).json({ message: 'Waxing service not found' });
      return;
    }

    res.status(200).json(waxingService);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch waxing service',
      error: error.message,
    });
  }
};

// Controller for POST a new waxing service
exports.createWaxingService = async (req, res) => {
  try {
    const newWaxingService = new Waxing(req.body);
    const savedWaxingService = await newWaxingService.save();
    res.status(201).json(savedWaxingService);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create waxing service',
      error: error.message,
    });
  }
};

// Controller for PUT update an existing waxing service
exports.updateWaxingService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWaxingService = await Waxing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedWaxingService) {
      res.status(404).json({ message: 'Waxing service not found' });
      return;
    }

    res.status(200).json(updatedWaxingService);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update waxing service',
      error: error.message,
    });
  }
};

// Controller for DELETE a waxing service by ID
exports.deleteWaxingService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWaxingService = await Waxing.findByIdAndDelete(id);

    if (!deletedWaxingService) {
      res.status(404).json({ message: 'Waxing service not foun' });
      return;
    }

    res.status(200).json({ message: 'Waxing service deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete waxing service',
      error: error.message,
    });
  }
};
