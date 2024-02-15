// crud operations for owners
import express, { Request, Response } from 'express';
import Owner from './owner';

const ownerRoutes = express.Router();

// GET all owners
ownerRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch owners', error: (error as Error).message });
    }
});

// GET a single owner by ID
ownerRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const owner = await Owner.findById(id);
        
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        res.status(200).json(owner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch owner', error: (error as Error).message });
    }
});

// POST a new owner
ownerRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newOwner = new Owner(req.body);
        const savedOwner = await newOwner.save();
        res.status(201).json(savedOwner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create owner', error: (error as Error).message });
    }
});

// PUT update an existing owner
ownerRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedOwner = await Owner.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedOwner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        res.status(200).json(updatedOwner);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update owner', error: (error as Error).message });
    }
});

// DELETE an owner by ID
ownerRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedOwner = await Owner.findByIdAndDelete(id);

        if (!deletedOwner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete owner', error: (error as Error).message });
    }
});

export default ownerRoutes;
