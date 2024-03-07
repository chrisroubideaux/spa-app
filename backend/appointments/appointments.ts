// crud operations for appointments
import express, { Request, Response } from 'express';
import Appointment from './appointment';

const appointmentRoutes = express.Router();

// GET all appointments
appointmentRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch appointment', error: (error as Error).message });
    }
});

// GET a single appointment by ID
appointmentRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findById(id);
        
        if (!appointment) {
            return res.status(404).json({ message: 'Appoinemnt not found' });
        }

        res.status(200).json(appointment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to fetch appointment', error: (error as Error).message });
    }
});

// POST a new appointment
appointmentRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newAppointment = new Appointment(req.body);
        const savedAppoinement = await newAppointment.save();
        res.status(201).json(savedAppoinement);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to create appointment', error: (error as Error).message });
    }
});

// PUT update an existing appointment
appointmentRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(updatedAppointment);
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to update appointment', error: (error as Error).message });
    }
});

// DELETE a appointment by ID
appointmentRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedAppointment = await Appointment.findByIdAndDelete(id);

        if (!deletedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Failed to delete appointment', error: (error as Error).message });
    }
});

export default appointmentRoutes;
