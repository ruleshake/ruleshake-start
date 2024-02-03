# ruleshake-start

Start RuleShake suite

## Requirements

* Install `docker`
* Check these ports are not used on your machine (if so, remplace them in [docker-compose.yml](docker-compose.yml))
  * `9090` for keycloak
  * `6082` for Mongo Express (A web-based MongoDB admin interface)
  * `8080` for RuleShake Studio
  * `8081` for RuleShake Catalog
  * `8082` for RuleShake Runner
  * `8083` for RuleShake Referential

## Setup

The setup is mostly done automatically when starting the docker compose. 
All that remains is a manual action which consists of adding a new entry in your `/etc/hosts` (Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows) :
```shell
127.0.0.1 keycloak
```

Automatic setup allows :
* Add and configure a realm on keycloak
* Create and initiate a replicaSet on mongo server (this allows you to use transactions on mongo queries).

## Start

```shell
git clone https://github.com/ruleshake/ruleshake-start.git
cd ruleshake-start
docker compose up
```

Access to RuleShake Studio on `http://localhost:8080` and login with `user`:`user` 
(`guest`:`guest` is another available user having read only access).