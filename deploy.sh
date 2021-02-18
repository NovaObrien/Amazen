dotnet publish -c Release
docker build -t keepr-1 ./bin/Release/net5.0/publish
docker tag keepr-1 registry.heroku.com/keepr-1/web
docker push registry.heroku.com/keepr-1/web
heroku container:release web -a keepr-1
echo press any key
read end