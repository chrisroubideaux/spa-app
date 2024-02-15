// body treatment controller
import { Request, Response } from 'express';
import Treatment from './treatment'; 

// Controller for GET all treatments
export const getAllTreatments = async (req: Request, res: Response): Promise<void> => {
    try {
        const treatments = await Treatment.find();
        res.status(200).json(treatments);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch treatments', error: (error as Error).message });
    }
};

// Controller for GET a single treatment by ID
export const getTreatmentById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const treatment = await Treatment.findById(id);
        
        if (!treatment) {
            res.status(404).json({ message: 'Treatment not found' });
            return;
        }

        res.status(200).json(treatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch treatment', error: (error as Error).message });
    }
};

// Controller for POST a new treatment
export const createTreatment = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTreatment = new Treatment(req.body);
        const savedTreatment = await newTreatment.save();
        res.status(201).json(savedTreatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create treatment', error: (error as Error).message });
    }
};

// Controller for PUT update an existing treatment
export const updateTreatment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedTreatment = await Treatment.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedTreatment) {
            res.status(404).json({ message: 'Treatment not found' });
            return;
        }

        res.status(200).json(updatedTreatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update treatment', error: (error as Error).message });
    }
};

// Controller for DELETE a treatment by ID
export const deleteTreatment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedTreatment = await Treatment.findByIdAndDelete(id);

        if (!deletedTreatment) {
            res.status(404).json({ message: 'Treatment not found' });
            return;
        }

        res.status(200).json({ message: 'Treatment deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete treatment', error: (error as Error).message });
    }
};

module.exports = {
    getAllTreatments,
    getTreatmentById,
    createTreatment,
    updateTreatment,
    deleteTreatment
}