import express from 'express';
import Mailing from '../index.js';
/* import { SOME_THING_WENT_WRONG } from '../store/constant';
import { generateServerErrorCode } from '../store/utils'; */
const mailingController = express.Router();
/**
 * POST/ User subscribe to App
 */
mailingController.post('/', (req, res) => {
  try {
    Mailing.sendEmail(req.query);
    res.status(200).json({ message: 'email sent successfully' });
  } catch (e) {
    res.status(500).json({ 
        message: 'email sent successfully',
        error: e});
  }
});
export default mailingController;