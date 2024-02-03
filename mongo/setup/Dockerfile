FROM mongo:7.0
RUN mkdir /config
WORKDIR /config
COPY wait-for-it.sh .
COPY replicaSet.js .
COPY databases.js .
COPY setup.sh .
RUN chmod +x /config/wait-for-it.sh
RUN chmod +x /config/setup.sh
ENV MONGO_ROOT_USERNAME=$MONGO_ROOT_USERNAME
ENV MONGO_ROOT_PASSWORD=$MONGO_ROOT_PASSWORD
CMD [ "bash", "-c", "/config/wait-for-it.sh mongo1:27017 -- /config/setup.sh"]