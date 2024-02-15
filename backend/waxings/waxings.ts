// crud operations for waxing-treatments
import express, { Request, Response } from 'express';
import Waxing from './waxing';

const waxingRoutes = express.Router();

// GET all waxing services
waxingRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const waxingServices = await Waxing.find();
        res.status(200).json(waxingServices);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch waxing services', error: (error as Error).message });
    }
});

// GET a single waxing service by ID
waxingRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const waxingService = await Waxing.findById(id);
        
        if (!waxingService) {
            return res.status(404).json({ message: 'Waxing service not found' });
        }

        res.status(200).json(waxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch waxing service', error: (error as Error).message });
    }
});

// POST a new waxing service
waxingRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newWaxingService = new Waxing(req.body);
        const savedWaxingService = await newWaxingService.save();
        res.status(201).json(savedWaxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create waxing service', error: (error as Error).message });
    }
});

// PUT update an existing waxing service
waxingRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedWaxingService = await Waxing.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedWaxingService) {
            return res.status(404).json({ message: 'Waxing service not found' });
        }

        res.status(200).json(updatedWaxingService);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update waxing service', error: (error as Error).message });
    }
});

// DELETE a waxing service by ID
waxingRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedWaxingService = await Waxing.findByIdAndDelete(id);

        if (!deletedWaxingService) {
            return res.status(404).json({ message: 'Waxing service not found' });
        }

        res.status(200).json({ message: 'Waxing service deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete waxing service', error: (error as Error).message });
    }
});

export default waxingRoutes;
