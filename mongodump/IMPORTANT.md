I was getting an error when trying to do a mongodump on my Windows 10 laptop. I renamed a joins collection "Renamecollection". But the true name is

"\_Join:users:\_Role"

\_Join:users:\_Role

^You should put back the original name after importing!

mongorestore --db parse-example --verbose ./parse-example/
