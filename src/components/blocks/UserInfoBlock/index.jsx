import React from 'react';
import { Buttons } from '../';
const FullNameBlock = ({firstName, lastName}) =>(
    <section className="full-name">
    <h3 className="title"> Full Name </h3>
    <section className="full-name__info">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
    </section>
</section>
);
const EmailBlock = ({email}) => (
    <section className="email">
        <h3 className="title"> Email </h3>
        <section className="email__info">
            <span className="email-data">{email}</span>
        </section>
    </section>
);
const HiredDateBlock = ({hiredDate}) => (
    <section className="hired-date">
        <h3 className="title"> Hired Date </h3>
        <section className="hired-date__info">
            <span className="date">{hiredDate}</span>
        </section>
    </section>
);
const BalanceBlock = ({balance}) => (
    <section className="balance">
        <h3 className="title"> Balance </h3>
        <section className="balance__info">
            <span className="quantity">{balance}</span>
        </section>
    </section>
);

const UserInfoBlock = ({ props, handleEditUserButtonClick })=> (
    <section className="user-info">
        <section className="user-info__avatar">
            <Buttons.EditUserButton handleButtonClick={handleEditUserButtonClick}/>
            <img  src="http://gsdl.org.in/gsdl%20image/user.png" alt=""/>
        </section>
        <section className="user-info__details">
            <FullNameBlock
                firstName={props.firstName}
                lastName={props.lastName}
            />
            <EmailBlock email={props.email}/>
            <HiredDateBlock hiredDate={props.hiredDate}/>
            <BalanceBlock balance={props.vacationBalance}/>
        </section>
    </section>
);
export default UserInfoBlock;
