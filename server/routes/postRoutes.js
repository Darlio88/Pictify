import express from 'express'
import {allPosts, createPost, handleLiked, deletePost} from '../controllers/postControllers.js'
const router = express.Router()

router.get('/', allPosts)
router.delete('/:id', deletePost)
router.patch('/:id', handleLiked)
router.post('/create', createPost)


export default router