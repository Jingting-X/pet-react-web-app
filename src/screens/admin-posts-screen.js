import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findPostsThunk, deletePostThunk } from '../services/post-thunk.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal.js';
function AdminPostsScreen() {
    const { posts } = useSelector((state) => state.posts);

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
        <div>
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
        </div>
    );
}

export default AdminPostsScreen;
