import React from 'react';

const Company = (props) => {
  return (
    <tr>
      <td>4</td>
      <td>{props.company.name}</td>
      <td>{props.company.location}</td>
      <td>{props.company['web_link']}</td>
      <td>
        <button onClick={() => props.delete(props.company.name)}>delete</button>
        <button>edit</button>
      </td>
    </tr>
  );
};

export default Company;
