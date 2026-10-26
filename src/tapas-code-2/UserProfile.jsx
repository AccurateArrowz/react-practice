import React, { useEffect } from "react";

function DisplayProfile({user}) {
  return (
    <div className="profile-info">
      <h1>{user.name}</h1>
      <p className="email">{user.email}</p>
      <p className="bio">{user.bio}</p>
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        Edit Profile
      </button>
    </div>
  );
}

function EditableProfile({initialFormState, onSaveProfile, cancelEditing}) {
    const [formData, setFormData] = useState({...initialFormState});

    const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div className="profile-form">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={formData.bio}
        onChange={(e) => handleInputChange("bio", e.target.value)}
        placeholder="Bio"
      />
      <div className="form-actions">
        <button onClick={cancelEditing}>Cancel</button>
        <button onClick={()=> onSaveProfile({formData})}>Save</button>
      </div>
    </div>
  );
}

export default function UserProfile({userId}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

    const handleSaveProfile = async ({formData}) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        formData,
      );
      setUser(response.data);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  const cancelEditing = ()=> setIsEditing(false);


  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
      );
      setUser(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        bio: response.data.bio,
      });
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    fetchUserData()
  }, [userId])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={fetchUserData}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="profile-header">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt={`${user.name}'s avatar`}
        className="avatar"
      />
      {!isEditing ?
       <DisplayProfile user={user}/> 
       : 
      <EditableProfile
       initialFormState={user}
       onSaveProfile={handleSaveProfile}
       cancelEditing={cancelEditing}/>}
    </div>
  );
}
