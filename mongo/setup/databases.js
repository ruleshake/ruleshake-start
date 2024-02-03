print("Init catalog db")
db = db.getSiblingDB('ruleshake-catalog-db')
db.createUser({
    user: 'catalog',
    pwd: 'catalog',
    roles: [{ role: 'readWrite', db: 'ruleshake-catalog-db' }],
});

print("Init referential db")
db = db.getSiblingDB('ruleshake-referential-db')
db.createUser({
    user: 'referential',
    pwd: 'referential',
    roles: [{ role: 'readWrite', db: 'ruleshake-referential-db' }],
});

print("Init runner db")
db = db.getSiblingDB('ruleshake-runner-db')
db.createUser({
    user: 'runner',
    pwd: 'runner',
    roles: [{ role: 'readWrite', db: 'ruleshake-runner-db' }],
});

print("Database initialized")