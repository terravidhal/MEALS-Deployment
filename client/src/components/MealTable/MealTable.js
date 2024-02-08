import React from "react";
import "./MealTable.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';




const MealTable = (props) => {
  const { allMeals } = props;

  return (
    <div className="MealTable">
      <Table striped >
         <thead>
          <tr>
            <th>Meal</th>
            <th>Prep Time</th>
            <th>Options</th>
          </tr>
        </thead> 
        <tbody>
        {allMeals.map((elt, index) => {
            return (
              <tr className="" key={index}>
                <td  className="actions">{elt.name}</td>
                <td  className="actions">{elt.cookTime}</td>
                <td className="actions">
                  <Link className=""  to={"/meals/" + elt._id}>
                    details
                  </Link> |&nbsp;
                  <Link className=""  to={"/meals/edit/" + elt._id}>
                    edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};



export default MealTable;
