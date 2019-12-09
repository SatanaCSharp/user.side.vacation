import React from 'react';
import {Buttons } from "../";
const VacationItem = ({vacation, handleEditButtonClick, handleShowButtonClick, handleDeleteButtonClick})=>(
  <section className="list-vacations__vacation">
      <section className="dates">
        <span className="dates__startDate">{vacation.startDate.substring(0,10)}</span>
          -
        <span className="dates__endDate">{vacation.endDate.substring(0,10)}</span>
      </section>
      <section className="buttons">
          <Buttons.ShowButton handleButtonClick={handleShowButtonClick}/>
          <Buttons.EditButton handleButtonClick={handleEditButtonClick}/>
          <Buttons.DeleteButton handleButtonClick={handleDeleteButtonClick}/>
      </section>
  </section>
);
export default VacationItem;
