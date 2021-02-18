dotnet publish -c Release
docker build -t amazen-server ./bin/Release/net5.0/publish
docker tag amazen-server registry.heroku.com/keepr-1/web
docker push registry.heroku.com/keepr-1/web
heroku container:release web -a keepr-1
echo press any key
read end