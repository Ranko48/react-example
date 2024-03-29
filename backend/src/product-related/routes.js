const express = require('express')
const router = express.Router()
const typeRouter = require('./type/typeRoutes')
const materialRouter = require('./material/materialRoutes')
const colorRouter = require('./color/colorRoutes')
const brandRouter = require('./brand/brandRoutes')
const uploadRouter = require('./upload/uploadRoutes')
const productRouter = require('./product/productRoutes')


router.use('', typeRouter)
router.use('', materialRouter)
router.use('', colorRouter)
router.use('', brandRouter)
router.use('', uploadRouter)
router.use('', productRouter)

module.exports = router
