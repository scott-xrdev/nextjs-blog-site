import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		// Store it in a database
		const newMessage = {
			email,
			name,
			message,
		};

		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.4rrkb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

		let client;
		try {
			// client = await MongoClient.connect(process.env.DB_URL);
			client = await MongoClient.connect(connectionString);
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database.' });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res
				.status(500)
				.json({ message: 'Something went wrong while sending the message' });
			return;
		}

		client.close();

		res
			.status(201)
			.json({ message: 'Successfully sent message!', message: newMessage });
	}
};

export default handler;
