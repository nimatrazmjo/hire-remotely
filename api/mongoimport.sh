#!/bin/sh
mongoimport -d online-test --collection questions --file src/seeder/data/questions.json --jsonArray --uri "mongodb://mongo-state:27017"
