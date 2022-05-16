import "dotenv/config";
import { mongo_connect, mongo_disconnect } from "../services/database-connection"
import Question  from '../models/question';
import questios from '../seeder/data/questions.json';
(async()=>{
    try {
        await mongo_connect();
        await Question.remove({}); //TODO remove after first production release
        await Question.insertMany(questios);
        console.log('Question data has been inserted');
        await mongo_disconnect();
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})()