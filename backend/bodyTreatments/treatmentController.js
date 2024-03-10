const Treatment = require('./treatment');

// Controller for GET all treatments
const getAllTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch treatments', error: error.message });
  }
};

// Controller for GET a single treatment by ID
const getTreatmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const treatment = await Treatment.findById(id);

    if (!treatment) {
      res.status(404).json({ message: 'Treatment not found' });
      return;
    }

    res.status(200).json(treatment);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch treatment', error: error.message });
  }
};

// Controller for POST a new treatment
const createTreatment = async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    const savedTreatment = await newTreatment.save();
    res.status(201).json(savedTreatment);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create treatment', error: error.message });
  }
};

// Controller for PUT update an existing treatment
const updateTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTreatment = await Treatment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTreatment) {
      res.status(404).json({ message: 'Treatment not found' });
      return;
    }

    res.status(200).json(updatedTreatment);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update treatment', error: error.message });
  }
};

// Controller for DELETE a treatment by ID
const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTreatment = await Treatment.findByIdAndDelete(id);

    if (!deletedTreatment) {
      res.status(404).json({ message: 'Treatment not found' });
      return;
    }

    res.status(200).json({ message: 'Treatment deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete treatment', error: error.message });
  }
};

module.exports = {
  getAllTreatments,
  getTreatmentById,
  createTreatment,
  updateTreatment,
  deleteTreatment,
};
