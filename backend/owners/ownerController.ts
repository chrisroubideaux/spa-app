// owner controller file 
import { Request, Response } from 'express';
import Owner from './owner'; 

// Controller for GET all owners
export const getAllOwners = async (req: Request, res: Response): Promise<void> => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch owners', error: (error as Error).message });
    }
};

// Controller for GET a single owner by ID
export const getOwnerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const owner = await Owner.findById(id);
        
        if (!owner) {
            res.status(404).json({ message: 'Owner not found' });
            return;
        }

        res.status(200).json(owner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch owner', error: (error as Error).message });
    }
};

// Controller for POST a new owner
export const createOwner = async (req: Request, res: Response): Promise<void> => {
    try {
        const newOwner = new Owner(req.body);
        const savedOwner = await newOwner.save();
        res.status(201).json(savedOwner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create owner', error: (error as Error).message });
    }
};

// Controller for PUT update an existing owner
export const updateOwner = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedOwner = await Owner.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedOwner) {
            res.status(404).json({ message: 'Owner not found' });
            return;
        }

        res.status(200).json(updatedOwner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update owner', error: (error as Error).message });
    }
};

// Controller for DELETE an owner by ID
export const deleteOwner = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedOwner = await Owner.findByIdAndDelete(id);

        if (!deletedOwner) {
            res.status(404).json({ message: 'Owner not found' });
            return;
        }

        res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete owner', error: (error as Error).message });
    }
};
