const express = require('express');
const Owner = require('./owner');

const ownerRoutes = express.Router();

// GET all owners
ownerRoutes.get('/', async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch owners', error: error.message });
  }
});

// GET a single owner by ID
ownerRoutes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await Owner.findById(id);

    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.status(200).json(owner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch owner', error: error.message });
  }
});

// POST a new owner
ownerRoutes.post('/', async (req, res) => {
  try {
    const newOwner = new Owner(req.body);
    const savedOwner = await newOwner.save();
    res.status(201).json(savedOwner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create owner', error: error.message });
  }
});

// PUT update an existing owner
ownerRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOwner = await Owner.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedOwner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.status(200).json(updatedOwner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update owner', error: error.message });
  }
});

// DELETE an owner by ID
ownerRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOwner = await Owner.findByIdAndDelete(id);

    if (!deletedOwner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.status(200).json({ message: 'Owner deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete owner', error: error.message });
  }
});

module.exports = ownerRoutes;
