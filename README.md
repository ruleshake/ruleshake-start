<p align="center">
  <a href="https://ruleshake.com/"><img src="./imgs/ruleshake-hero.png" alt="ruleshake"></a>
</p>

<p align=center>
RuleShake is a headless, high-performance and scalable calculation engine.
<br />
Define your rules simply and let RuleShake offer the best personalized package to your customers.
</p>

<p align="center">
  <a href="https://ruleshake.com/docs/intro">Docs</a> - <a href="https://ruleshake.com/blog/">Blog</a> - <a href="https://demo.ruleshake.com">Demo</a>
</p>

<p align="center">
Ruleshake is made up of Studio which is its configuration interface, Catalog which is the service for creating and 
configuring variable collections, Referential the dataset management service and Runner the variable collection evaluation service.
</p>

<p align="center">
  <a href="https://ruleshake.com/blog/architecture"><img src="./imgs/ruleshake-architecture.png" alt="ruleshake-architecture"></a>
</p>

## Install

* Install `Docker Compose`: https://docs.docker.com/compose/install/
* Check these ports are not used on your machine (if so, remplace them in [.env](.env))
  * `9090` for keycloak
  * `9091` for Mongo Express (A web-based MongoDB admin interface)
  * `9000` for RuleShake Studio
  * `9001` for RuleShake Catalog
  * `9002` for RuleShake Runner
  * `9003` for RuleShake Referential

The setup is mostly done automatically when starting the docker compose.
All that remains is a manual action which consists of adding a new entry in your `/etc/hosts` (Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows) :

```shell
127.0.0.1 keycloak
```

Automatic setup allows :

* Create and configure a realm on keycloak. The name of the realm is the value of [`KEYCLOAK_RULESHAKE_ORGANIZATION`](.env) prefixed by `ruleshake-`. Example: `ruleshake-samples`.
* Create and initiate a replicaSet on mongo server (this allows to use transactions on mongo queries).

## Start

```shell
git clone https://github.com/ruleshake/ruleshake-start.git
cd ruleshake-start
docker compose up
```

### Studio

Access to RuleShake Studio on `http://localhost:9000` and login with `user`:`user` (`guest`:`guest` is another available user having read only access).

<p align="center">
  ><img src="./imgs/ruleshake-studio.png" alt="ruleshake-studio">
</p>

### API

To use ruleshake services API, first get an access token from Keycloak:

```shell
curl --location 'http://keycloak:9090/realms/ruleshake-samples/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=ruleshake-studio' \
--data-urlencode 'client_secret=UZbzqJyFkmqaWIPqJBsR4Xb5Np1c1k7A' \
--data-urlencode 'grant_type=client_credentials'
```

Then, call the desired API using the token you just retrieved. Example of evaluating a collection of variables in RuleShake Runner: 

```shell
curl --location 'http://localhost:9002/api/v1/evaluations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <access_token>' \
--data '{
  "requestTime": "2024-02-14T13:37:00.000Z",
  "collectionCode": "TEST",
  "inputs": [
      {
          "reference": "test",
          "value": "test",
          "type": "string"
      }
  ]
}'
```