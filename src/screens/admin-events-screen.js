import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function AdminEventsScreen() {
//     const { posts } = useSelector((state) => state.posts);

//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getPostsThunk());
//     }, []);

//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [postToDelete, setPostToDelete] = useState(null);

//     const openDeleteModal = (post) => {
//         setPostToDelete(post);
//         setShowDeleteModal(true);
//     };

//     const handleDeletePostById = async () => {
//         await dispatch(deletePostThunk(postToDelete._id));
//         dispatch(getPostsThunk());
//         setShowDeleteModal(false);
//     };

//     return (
//         <div>
//             <ul className="list-group mt-3">
//                 {posts.map((post) => (
//                     <li className="list-group-item" key={user._id}>
//                         {post.title} {post.userName}
//                         <button className="btn btn-danger float-end me-3" onClick={() => openDeleteModal(user)}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <DeleteConfirmationModal
//                 show={showDeleteModal}
//                 postToDelete={postToDelete}
//                 onDelete={handleDeletePostById}
//                 onCancel={() => setShowDeleteModal(false)}
//             />
//         </div>
//     );
// }
}

export default AdminEventsScreen;
