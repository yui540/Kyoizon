fs      = require 'fs'
path    = require 'path'
express = require 'express'
app     = express()

index = require './routes/index'

##
# config
##
app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'

##
# routing
##
app.use index
app.use express.static __dirname + '/public'

app.listen 8080, ->
	console.log 'Server Running...'