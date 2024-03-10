const Facial = require('./facial');

// Controller for GET all facials
const getAllFacials = async (req, res) => {
  try {
    const facials = await Facial.find();
    res.status(200).json(facials);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch facials', error: error.message });
  }
};

// Controller for GET a single facial by ID
const getFacialById = async (req, res) => {
  try {
    const { id } = req.params;
    const facial = await Facial.findById(id);

    if (!facial) {
      res.status(404).json({ message: 'Facial not found' });
      return;
    }

    res.status(200).json(facial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch facial', error: error.message });
  }
};

// Controller for POST a new facial
const createFacial = async (req, res) => {
  try {
    const newFacial = new Facial(req.body);
    const savedFacial = await newFacial.save();
    res.status(201).json(savedFacial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create facial', error: error.message });
  }
};

// Controller for PUT update an existing facial
const updateFacial = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFacial = await Facial.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedFacial) {
      res.status(404).json({ message: 'Facial not found' });
      return;
    }

    res.status(200).json(updatedFacial);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update facial', error: error.message });
  }
};

// Controller for DELETE a facial by ID
const deleteFacial = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFacial = await Facial.findByIdAndDelete(id);

    if (!deletedFacial) {
      res.status(404).json({ message: 'Facial not found' });
      return;
    }

    res.status(200).json({ message: 'Facial deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete facial', error: error.message });
  }
};

module.exports = {
  getAllFacials,
  getFacialById,
  createFacial,
  updateFacial,
  deleteFacial,
};
