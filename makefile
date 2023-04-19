compile:
	npx tsc

make-migrations:
	npx sequelize-cli migration:generate --name create-todo

run-migrations:
	npx sequelize-cli db:migrate

undo-migrations:
	npx sequelize-cli db:migrate:undo