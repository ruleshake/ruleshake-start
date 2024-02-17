# ruleshake-start

Start RuleShake suite

## Setup

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

* Add and configure a realm (named `ruleshake-samples`) on keycloak
* Create and initiate a replicaSet on mongo server (this allows to use transactions on mongo queries).

## Start

```shell
git clone https://github.com/ruleshake/ruleshake-start.git
cd ruleshake-start
docker compose up
```

Access to RuleShake Studio on `http://localhost:8080` and login with `user`:`user` 
(`guest`:`guest` is another available user having read only access).