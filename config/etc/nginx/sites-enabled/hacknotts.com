server {
	listen 80;
	server_name hacknotts.com www.hacknotts.com;
	return 301 $scheme://2016.hacknotts.com$request_uri;
}


server {
	listen 80;

	root /srv/www/hacknotts.com/hacknotts.com/2015;
	index index.html;

	server_name 2015.hacknotts.com;
}

server {
	listen 80;

	root /srv/www/hacknotts.com/hacknotts.com/production/current;
	index index.html;

	server_name current.hacknotts.com 2016.hacknotts.com;
}

server {
	listen 80;

	root /srv/www/hacknotts.com/hacknotts.com/staging/current;
	index index.html;

	server_name staging.hacknotts.com;
}
