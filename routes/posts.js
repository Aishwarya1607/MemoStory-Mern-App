import express from 'express';

import {  getPosts, getPost, getPostsBySearch, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

// localhost:5000/posts
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id',getPost);
router.post('/', auth, createPost);
router.patch('/:id' ,auth, updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost); //why patch when it is used for updating liking is also like updating

export default router;