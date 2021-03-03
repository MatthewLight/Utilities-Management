import Router from 'express';
import { getUtilities } from '../controllers/controller';

const router = Router();

router.get('/getUtilities', getUtilities);

router.get('/', (req, res) => {
  res.json({ msg: 'home page' });
});
router.get('*', (req, res) => {
  res.json({ msg: '(404) Route not found :(' });
});

export default router;
