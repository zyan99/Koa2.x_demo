import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import news from '../controllers/news'

const router = Router()

router.get('/', indexCtrl)
router.get('/news', news)

export default router
