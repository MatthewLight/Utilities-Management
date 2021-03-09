import Router from 'express';
import { 
  getUtilities,
  getUtilitiesById,
  createUtilities,
  updateUtilities,
  deleteUtilitiesById,
  deleteUtilities } from '../controllers/controller';

const router = Router();

router.get('/utilities', getUtilities);
router.get('/utilities/:id', getUtilitiesById);
router.post('/utilities', createUtilities);
router.put('/utilities/:id', updateUtilities);
router.delete('/utilities/:id', deleteUtilitiesById);
router.delete('/utilities', deleteUtilities);
router.get('*', (req, res) => {
  res.json({ msg: '(404) Route not found :(' });
});

export default router;

// import path from 'path'
// import handlebars from 'express-handlebars';
// router.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
// router.set('views', path.join(__dirname, '../client/views'));
// router.set('view engine', '.hbs');
// router.get('/', (req, res) => {
//   res.render('main', {
//     layout: 'index',
//     data: 'ss'
//   })
// });
