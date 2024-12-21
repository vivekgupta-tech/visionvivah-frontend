import React, { useState, useEffect } from "react";
import axios from "axios";


function Team() {
  const [teams, setTeams] = useState([]);

  // Fetch team data from the server
  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:4001/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  return (
    <div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0 w-[100%]">
      
      <h1 className="destination-titles font-extrabold text-center pt-24 text-5xl">
        Team VisionVivaah
      </h1>
      <div className="flex justify-center">
        <p className=" w-32 mt-4 border-red-500 border-2"></p>
        <p className="border-2 ml-1 w-1 border-black mt-4"></p>
        <p className="border-2 w-1 ml-1 border-black mt-4"></p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-20">
        {teams.map((data) => (
          <div
            key={data.id}
            className="h-96 w-60 border-1 border-gray-500 rounded-md shadow-md bg-white"
          >
            <div className="h-[48%] w-[40%] ml-16 mt-2">
              <img
                className="h-[85%] w-[100%] rounded-full"
                src={data.image}
                alt={data.name}
              />
            </div>

            <div>
              <p className="destination-titl text-center -ml-8 text-red-500 text-3xl">
                {data.name}
              </p>
              <p className="destination-post text-center -ml-12 mt-2 text-xl">
                {data.post}
              </p>
              <p className="text-sm text-center p-2 mt-2 mr-1">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
