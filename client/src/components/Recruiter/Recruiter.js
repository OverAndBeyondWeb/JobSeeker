import React from 'react';

const Recruiter = (props) => {
  return (
    <tr>
      <td>{props.recruiter.internal}</td>
      <td>{props.recruiter.fname}</td>
      <td>{props.recruiter.lname}</td>
      <td>{props.recruiter.title}</td>
      <td>{props.recruiter['company_name']}</td>
      <td>
        <button onClick={props.delete}>delete</button>
        <button onClick={props.edit}>edit</button>
      </td>
    </tr>
  );
};

export default Recruiter;
