db:
 podman run -p 3306:3306 --name mysql-next -e MYSQL_ROOT_PASSWORD=password -d mysql:latest
 podman exec -it mysql-next bash
	mysql -u root -p nextjs < db.sql
