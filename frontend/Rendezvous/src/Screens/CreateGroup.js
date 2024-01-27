import React from "react";

const CreatGroup = () => 
{
    return (
        <form action="#">
            <label htmlFor="">Group Name : </label>
            <input type="text" />

            <label htmlFor="">Members : </label>
            <input type="text" />

            <label htmlFor="">Start Date : </label>
            <input type="date" /> 

            <label htmlFor="">End Date : </label>
            <input type="date" />

            <input type="submit" value="Create"></input>
        </form>

    );
};

export default CreatGroup