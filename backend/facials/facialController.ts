import { Request, Response } from 'express';
import Facial from './facial'; // Importing the Facial model

// Controller for GET all facials
export const getAllFacials = async (req: Request, res: Response): Promise<void> => {
    try {
        const facials = await Facial.find();
        res.status(200).json(facials);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch facials', error: (error as Error).message });
    }
};

// Controller for GET a single facial by ID
export const getFacialById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const facial = await Facial.findById(id);
        
        if (!facial) {
            res.status(404).json({ message: 'Facial not found' });
            return;
        }

        res.status(200).json(facial);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch facial', error: (error as Error).message });
    }
};

// Controller for POST a new facial
export const createFacial = async (req: Request, res: Response): Promise<void> => {
    try {
        const newFacial = new Facial(req.body);
        const savedFacial = await newFacial.save();
        res.status(201).json(savedFacial);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create facial', error: (error as Error).message });
    }
};

// Controller for PUT update an existing facial
export const updateFacial = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedFacial = await Facial.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedFacial) {
            res.status(404).json({ message: 'Facial not found' });
            return;
        }

        res.status(200).json(updatedFacial);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update facial', error: (error as Error).message });
    }
};

// Controller for DELETE a facial by ID
export const deleteFacial = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedFacial = await Facial.findByIdAndDelete(id);

        if (!deletedFacial) {
            res.status(404).json({ message: 'Facial not found' });
            return;
        }

        res.status(200).json({ message: 'Facial deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete facial', error: (error as Error).message });
    }
};

module.exports = {
    getAllFacials,
    getFacialById,
    createFacial,
    updateFacial,
    deleteFacial,
} 