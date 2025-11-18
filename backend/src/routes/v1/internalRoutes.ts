import { Router } from 'express';

const router = Router();

// No internal routes are defined in the base structure.
// This is where feature-specific, authenticated endpoints will be added.
// Example for the future:
// import bookRoutes from '@/api/v1/internal/books/routes';
// router.use('/books', bookRoutes);

export default router;
