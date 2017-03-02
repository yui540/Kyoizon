express = require 'express'
router  = express.Router()

# GET: topページ ----------------------------------------------------
router.get '/', (req, res, next) ->
	res.render 'index'

module.exports = router