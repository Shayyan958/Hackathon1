import React from "react";

import AutoCompleteText from "./AutoCompleteText";
import courses from "./listCourses.js";

const CourseSheet = () => {
  //   let sems = [
  //     { sno: 1, name: "1st" },
  //     { sno: 2, name: "2nd" },
  //     { sno: 3, name: "3rd" },
  //     { sno: 4, name: "4th" },
  //     { sno: 5, name: "5th" },
  //     { sno: 6, name: "6th" },
  //     { sno: 7, name: "7th" },
  //     { sno: 8, name: "8th" },
  //   ];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "75px" }}>Code</th>
            <th style={{ width: "450px" }}>Title</th>
            <th style={{ width: "25px", textAlign: "center" }}>Cr</th>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              1st Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===1))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              2nd Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===2))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              3rd Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===3))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              4th Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===4))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              5th Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===5))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              6th Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===6))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              7th Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===7))} /></td>
            <td></td>
          </tr>
          <tr>
            <th colspan="3" style={{ fontWeight: "bold" }}>
              8th Semester
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((c)=>(c.semester===8))} /></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CourseSheet;
