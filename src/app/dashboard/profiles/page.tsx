"use client";
import React, { useState, useEffect } from "react";

const UserProfile = ({ name, email, id }) => (
  <div className="border border-gray-200 rounded-md p-4 mb-4">
    <h3 className="font-semibold">{name}</h3>
    <p className="text-gray-500">{email}</p>
    <p className="text-gray-500">ID: {id}</p>
  </div>
);

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        // Login to get authentication token
        const loginResponse = await fetch(
          "https://icapitalone.up.railway.app/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "admin@gmail.com",
              password: "admin",
            }),
          }
        );
        const { token } = await loginResponse.json();
        console.log(token);

        // Fetch user profiles using the authentication token
        const userProfileResponse = await fetch(
          "https://icapitalone.up.railway.app/users?page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (userProfileResponse.ok) {
          const userData = await userProfileResponse.json();
          setUserProfiles(userData.data);
        } else {
          console.error("Failed to fetch user profiles");
        }
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, []);

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userProfiles.map((user) => (
          <UserProfile
            key={user.id}
            name={user.name}
            email={user.email}
            id={user.id}
          />
        ))}
      </div>
    </main>
  );
};

export default UserProfiles;
