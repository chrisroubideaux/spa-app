const Massage = require('./massage');

// Controller for GET all massages
const getAllMassages = async (req, res) => {
  try {
    const massages = await Massage.find();
    res.status(200).json(massages);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch massages', error: error.message });
  }
};

// Controller for GET a single massage by ID
const getMassageById = async (req, res) => {
  try {
    const { id } = req.params;
    const massage = await Massage.findById(id);

    if (!massage) {
      res.status(404).json({ message: 'Massage not found' });
      return;
    }

    res.status(200).json(massage);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch massage', error: error.message });
  }
};

// Controller for POST a new massage
const createMassage = async (req, res) => {
  try {
    const newMassage = new Massage(req.body);
    const savedMassage = await newMassage.save();
    res.status(201).json(savedMassage);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create massage', error: error.message });
  }
};

// Controller for PUT update an existing massage
const updateMassage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMassage = await Massage.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedMassage) {
      res.status(404).json({ message: 'Massage not found' });
      return;
    }

    res.status(200).json(updatedMassage);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update massage', error: error.message });
  }
};

// Controller for DELETE a massage by ID
const deleteMassage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMassage = await Massage.findByIdAndDelete(id);

    if (!deletedMassage) {
      res.status(404).json({ message: 'Massage not found' });
      return;
    }

    res.status(200).json({ message: 'Massage deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to delete massage', error: error.message });
  }
};

module.exports = {
  getAllMassages,
  getMassageById,
  createMassage,
  updateMassage,
  deleteMassage,
};
