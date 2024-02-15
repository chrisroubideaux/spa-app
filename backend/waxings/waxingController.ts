// waxing controller file
import { Request, Response } from 'express';
import Waxing from './waxing'; 

// Controller for GET all waxing services
export const getAllWaxingServices = async (req: Request, res: Response): Promise<void> => {
    try {
        const waxingServices = await Waxing.find();
        res.status(200).json(waxingServices);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch waxing services', error: (error as Error).message });
    }
};

// Controller for GET a single waxing service by ID
export const getWaxingServiceById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const waxingService = await Waxing.findById(id);
        
        if (!waxingService) {
            res.status(404).json({ message: 'Waxing service not found' });
            return;
        }

        res.status(200).json(waxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch waxing service', error: (error as Error).message });
    }
};

// Controller for POST a new waxing service
export const createWaxingService = async (req: Request, res: Response): Promise<void> => {
    try {
        const newWaxingService = new Waxing(req.body);
        const savedWaxingService = await newWaxingService.save();
        res.status(201).json(savedWaxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create waxing service', error: (error as Error).message });
    }
};

// Controller for PUT update an existing waxing service
export const updateWaxingService = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedWaxingService = await Waxing.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedWaxingService) {
            res.status(404).json({ message: 'Waxing service not found' });
            return;
        }

        res.status(200).json(updatedWaxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update waxing service', error: (error as Error).message });
    }
};

// Controller for DELETE a waxing service by ID
export const deleteWaxingService = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedWaxingService = await Waxing.findByIdAndDelete(id);

        if (!deletedWaxingService) {
            res.status(404).json({ message: 'Waxing service not found' });
            return;
        }

        res.status(200).json({ message: 'Waxing service deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete waxing service', error: (error as Error).message });
    }
};

module.exports = {
    getAllWaxingServices,
    getWaxingServiceById,
    createWaxingService,
    updateWaxingService,
    deleteWaxingService,

}