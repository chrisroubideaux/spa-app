// crud operations for massages
import express, { Request, Response } from 'express';
import Massage from './massage';

const massageRoutes = express.Router();

// GET all massages
massageRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const massages = await Massage.find();
        res.status(200).json(massages);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch massages', error: (error as Error).message });
    }
});

// GET a single massage by ID
massageRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const massage = await Massage.findById(id);
        
        if (!massage) {
            return res.status(404).json({ message: 'Massage not found' });
        }

        res.status(200).json(massage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch massage', error: (error as Error).message });
    }
});

// POST a new massage
massageRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newMassage = new Massage(req.body);
        const savedMassage = await newMassage.save();
        res.status(201).json(savedMassage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create massage', error: (error as Error).message });
    }
});

// PUT update an existing massage
massageRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedMassage = await Massage.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedMassage) {
            return res.status(404).json({ message: 'Massage not found' });
        }

        res.status(200).json(updatedMassage);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update massage', error: (error as Error).message });
    }
});

// DELETE a massage by ID
massageRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedMassage = await Massage.findByIdAndDelete(id);

        if (!deletedMassage) {
            return res.status(404).json({ message: 'Massage not found' });
        }

        res.status(200).json({ message: 'Massage deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete massage', error: (error as Error).message });
    }
});

export default massageRoutes;
