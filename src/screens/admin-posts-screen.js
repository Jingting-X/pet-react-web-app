import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findPostsThunk, deletePostThunk } from '../services/post-thunk.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal.js';
import { useNavigate } from 'react-router-dom';
function AdminPostsScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const { posts } = useSelector((state) => state.posts);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
    }, []);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    const openDeleteModal = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };

    const handleDeletePostById = async () => {
        await dispatch(deletePostThunk(postToDelete._id));
        dispatch(findPostsThunk());
        setShowDeleteModal(false);
    };

    return (
        <>
        {!currentUser || currentUser.role !== "admin" ? (
            <h2 className='container bg-light p-4 mb-5'>You are not allowed to browse this page, please <a href='/signin'>sign in</a>.</h2>
        ) : (
        <div className='container'>
            <button className='btn btn-light border'
                onClick={() => navigate('/admin')}>
                <i className="fas fa-arrow-left me-2"></i>Back
            </button>
            <ul className="list-group mt-3">
                {posts.map((post) => (
                    <li className="list-group-item" key={post._id}>
                        <div>
                            by <b>{post.userName}</b>
                            <button className="btn btn-danger float-end me-3 h-75" onClick={() => openDeleteModal(post)}>
                                Delete
                            </button>
                        </div>
                        <div className='mt-2'>{post.post}</div>
                    </li>
                ))}
            </ul>
            <DeleteConfirmationModal
                show={showDeleteModal}
                postToDelete={postToDelete}
                onDelete={handleDeletePostById}
                onCancel={() => setShowDeleteModal(false)}
            />
        </div>)}
        </>
    );
}

export default AdminPostsScreen;
