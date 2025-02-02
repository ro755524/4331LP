// createClientController.ts
/*
    Adds new clinet to main database
*/

import { Request, Response } from "express";
import { createUser } from '../repositories/clientRepository';
import User, { IUser } from '../models/ClientSchema';
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const createClientController = async (req: Request, res: Response): Promise<void> => {

    try {
        const clientData = req.body;
        req.body.userId = null;
        const newClient = await createUser(clientData);

        //newClient.userId = newClient._id;
        await newClient.save();

        // Set the HTTP response status code
        res.status(201);

        // Use the json() method to send the response with JSON data
        res.json(newClient);

    } catch ( error: any ) {
        console.error('Error adding client: ', error);
    }
}

// function test() {
//     const testObject = {
       
//         body: {
//             username: 'testUser',
//             password: 'password',
//             email: 'test@email.com',
//             phone: 1111111111,
//             address: '123 test drive address',
//             // _id added by controller
//             products:[],
//         },

//     };

//     const testRes = {
       
//         body: {
//             username: 'testUser',
//             password: 'password',
//             email: 'test@email.com',
//             phone: 1111111111,
//             address: '123 test drive address',
//             userId: mongoose.Schema.Types.ObjectId,
//             products:[],
//         },

//     };

//     createClientController(testObject, testRes);
// }