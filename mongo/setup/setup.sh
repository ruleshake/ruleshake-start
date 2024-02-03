#!/usr/bin/env bash
sleep 3
if [ ! -f /data/mongo-init.flag ]; then
    echo "Init replicaset"
    mongosh --host mongo1 --port 27017 --username $MONGO_ROOT_USERNAME --password $MONGO_ROOT_PASSWORD replicaSet.js
    echo "Init databases"
    mongosh --host mongo1 --port 27017 --username $MONGO_ROOT_USERNAME --password $MONGO_ROOT_PASSWORD databases.js
    touch /data/mongo-init.flag
else
    echo "Database already initialized"
fi