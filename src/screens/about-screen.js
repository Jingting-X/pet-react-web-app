import '../styles/app.css'
import { useNavigate } from 'react-router';
function AboutScreen() {
    const navigate = useNavigate();
    return (
        <div className="container bg-white pt-2">
            <div className="col-4 d-flex justify-content-start">
                <button className="btn  border" onClick={() => navigate('/home')}><i className="fas fa-arrow-left me-2"></i>Back Home</button>
            </div>
            <div className="row mt-5">
                <div className="col introduction">
                    <p className="introduction">Welcome to Dog Land, a dog social media website, a platform dedicated to connecting dog owners, dog lovers, and third-party service providers. Our website welcomes all four types of users: guest, personal user, service provider, and admin.</p>
                </div>
                <div className='col-1'></div>
                <div className="col">
                    <img alt='' src="img/post_management.jpeg" className="rounded-circle w-100 mb-4" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img src="img/user_management.jpeg" className="rounded-circle w-100 mb-4" />
                </div>
                <div className='col-1'></div>
                <div className="col introduction">
                    <p className="introduction">As a guest, you can browse through our wide range of dog-related events and posts, while personal users can share their dog-related experiences, pictures, and text with others. Service providers, on the other hand, can post information about upcoming dog-related events, such as dog shows or training classes.</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col introduction">
                    <p className="introduction">Our website allows users to follow other users and be followed by others, creating a community of dog enthusiasts. Users can also comment on posts, creating a space for discussion and connection around all things dog-related. Our mission is to provide a platform where dog lovers can share their love for their pets, connect with other dog enthusiasts, and access a range of services and events. Join us today and become a part of our thriving dog-loving community.
                    </p>
                </div>
                <div className='col-1'></div>
                <div className="col">
                    <img src="img/event_management.jpeg" className="rounded-circle w-100 mb-4" />
                </div>
            </div>
        </div>
    );
}

export default AboutScreen;