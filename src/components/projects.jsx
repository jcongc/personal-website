import React, { useState, useEffect } from "react";
import Papa from 'papaparse';
import Input from '@mui/material/Input';
import { Button } from "@mui/material";

const Projects = () => {
    const [data, setData] = useState(null);
    const [searchFighter, setSearchFighter] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        Papa.parse('./ufc-fighters-statistics.csv', {
            download: true,
            header: true,
            complete: function(results) {
                setData(results.data);
            }
        });
    }, []);

    useEffect(() => {
        if (data) {
            const filtered = data.filter(row => row['name'].toLowerCase().includes(searchFighter.toLowerCase()));
            setFilteredData(filtered);
        }
    }, [searchFighter, data]);

    function processAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
    
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
    
        return age;
    }

    return (
        <div className="projects-container">
            <div className="projects-box">
                <Input type="text" placeholder='Enter Fighter Name:' value={searchFighter} onChange={e => setSearchFighter(e.target.value)} />
                {filteredData.length === 1 ? (
                    <div>
                        <h2>{filteredData[0].nickname !== "" ? `${filteredData[0].name.split(" ")[0]} "${filteredData[0].nickname}" ${filteredData[0].name.split(" ")[1]}` : filteredData[0].name}</h2>
                        <p>Record: {filteredData[0].wins} - {filteredData[0].losses} - {filteredData[0].draws}</p>
                        <p>Weight: {filteredData[0].weight_in_kg}kg</p>
                        <p>Height: {filteredData[0].height_cm}cm</p>
                        <p>Age: {isNaN(processAge(filteredData[0].date_of_birth)) ? 'Invalid date of birth' : processAge(filteredData[0].date_of_birth)}</p>
                    </div>
                ) : (
                    filteredData.length > 0 && (
                        <ul>
                            {filteredData.slice(0, 5).map((item, index) => (
                                <React.Fragment key={index}>
                                    <Button onClick={() => setSearchFighter(item.name)}>{item.name}</Button> <br/>
                                </React.Fragment>
                            ))}
                        </ul>
                    )
                )}
            </div>
        </div>
    );
}

export default Projects;
