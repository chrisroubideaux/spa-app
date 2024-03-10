const Owner = require('./owner');

// Controller for GET all owners
const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch owners', error: error.message });
  }
};

// Controller for GET a single owner by ID
const getOwnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await Owner.findById(id);

    if (!owner) {
      res.status(404).json({ message: 'Owner not found' });
      return;
    }

    res.status(200).json(owner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch owner', error: error.message });
  }
};

// Controller for POST a new owner
const createOwner = async (req, res) => {
  try {
    const newOwner = new Owner(req.body);
    const savedOwner = await newOwner.save();
    res.status(201).json(savedOwner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create owner', error: error.message });
  }
};

// Controller for PUT update an existing owner
const updateOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOwner = await Owner.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedOwner) {
      res.status(404).json({ message: 'Owner not found' });
      return;
    }

    res.status(200).json(updatedOwner);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update owner', error: error.message });
  }
};

// Controller for DELETE an owner by ID
const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOwner = await Owner.findByIdAndDelete(id);

    if (!deletedOwner) {
      res.status(404).json({ message: 'Owner not found' });
      return;
    }

    res.status(200).json({ message: 'Owner deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete owner', error: error.message });
  }
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwner,
  deleteOwner,
};
