// massage controller
import { Request, Response } from 'express';
import Massage from './massage'; // Importing the Massage model

// Controller for GET all massages
export const getAllMassages = async (req: Request, res: Response): Promise<void> => {
    try {
        const massages = await Massage.find();
        res.status(200).json(massages);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch massages', error: (error as Error).message });
    }
};

// Controller for GET a single massage by ID
export const getMassageById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const massage = await Massage.findById(id);
        
        if (!massage) {
            res.status(404).json({ message: 'Massage not found' });
            return;
        }

        res.status(200).json(massage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch massage', error: (error as Error).message });
    }
};

// Controller for POST a new massage
export const createMassage = async (req: Request, res: Response): Promise<void> => {
    try {
        const newMassage = new Massage(req.body);
        const savedMassage = await newMassage.save();
        res.status(201).json(savedMassage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create massage', error: (error as Error).message });
    }
};

// Controller for PUT update an existing massage
export const updateMassage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedMassage = await Massage.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedMassage) {
            res.status(404).json({ message: 'Massage not found' });
            return;
        }

        res.status(200).json(updatedMassage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update massage', error: (error as Error).message });
    }
};

// Controller for DELETE a massage by ID
export const deleteMassage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedMassage = await Massage.findByIdAndDelete(id);

        if (!deletedMassage) {
            res.status(404).json({ message: 'Massage not found' });
            return;
        }

        res.status(200).json({ message: 'Massage deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete massage', error: (error as Error).message });
    }
};

module.exports = {
    getAllMassages,
    getMassageById,
    createMassage,
    updateMassage,
    deleteMassage,
};
