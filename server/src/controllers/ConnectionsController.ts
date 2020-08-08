import { Request, Response } from 'express';
import db from '../database/connection';

class ConnectionsController {
  async index ( resquest: Request, response: Response)  {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });

  }
  
  async store ( request: Request, response: Response ) {
    const { user_id } = request.body;
   
    try {
      const insertedConnectionsIds = await db('connections').insert({
        user_id
      });

      return response.status(201).send();
    } catch (err) {
      console.log(err)

      return response.status(400).json({ 
        error: 'Unexpected error while creating new connections.'});

    }

  }

}

export default new ConnectionsController();