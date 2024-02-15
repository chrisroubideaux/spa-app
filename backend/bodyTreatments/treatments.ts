// crund opertions for body-treatments
import express, { Request, Response } from 'express';
import Treatment from './treatment'; 

const treatmentRoutes = express.Router();

// GET all treatments
treatmentRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const treatments = await Treatment.find();
        res.status(200).json(treatments);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch treatments', error: (error as Error).message });
    }
});

// GET a single treatment by ID
treatmentRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const treatment = await Treatment.findById(id);
        
        if (!treatment) {
            return res.status(404).json({ message: 'Treatment not found' });
        }

        res.status(200).json(treatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch treatment', error: (error as Error).message });
    }
});

// POST a new treatment
treatmentRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newTreatment = new Treatment(req.body);
        const savedTreatment = await newTreatment.save();
        res.status(201).json(savedTreatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create treatment', error: (error as Error).message });
    }
});

// PUT update an existing treatment
treatmentRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedTreatment = await Treatment.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedTreatment) {
            return res.status(404).json({ message: 'Treatment not found' });
        }

        res.status(200).json(updatedTreatment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update treatment', error: (error as Error).message });
    }
});

// DELETE a treatment by ID
treatmentRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedTreatment = await Treatment.findByIdAndDelete(id);

        if (!deletedTreatment) {
            return res.status(404).json({ message: 'Treatment not found' });
        }

        res.status(200).json({ message: 'Treatment deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete treatment', error: (error as Error).message });
    }
});

export default treatmentRoutes;
