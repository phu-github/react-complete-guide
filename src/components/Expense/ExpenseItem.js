import React from 'react';
import Card from '../UI/Card';
import './ExpenseItem.scss' 
import ExpensiveDate from './ExpensiveDate';
import {CheckmarkCircle, WifiOutline} from  'react-ionicons'
import { useContext } from 'react';
import { CardContext } from '../../context/FakeCardData';
function ExpenseItem(props) {
    const {cardData} = useContext(CardContext);
    console.log('======cardData',cardData);

    return (
        // <div className='cards'>
            <Card className='background'>
                <img className='card-image' alt='#' src='https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/245325238_899075300970050_4761981910673841683_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZkCzFAuzaM8AX_XPbKW&_nc_ht=scontent.fsgn13-2.fna&oh=548c1df6e96e37e8dc3de33a3743292d&oe=61971188'/>
                <div className='card-content'>
                    <div className="card-top">
                        <h3 className='card-title'>{props.title}</h3>
                        <div className='card-user'>
                            <img className='card-user-avatar' alt="" src='https://i.pravatar.cc/300'/>
                            <div className='card-user-info'>
                                <div className='card-user-top'>
                                    <h4 className='card-user-name'>Bảo Trân</h4>
                                    <CheckmarkCircle
                                    className='card-user-icon'
                                    color={'#7FBA7A'}
                                    title={'check'}
                                    height="20px"
                                    width="20px"
                                    />
                                </div>
                                <div className='card-user-game'>
                                    <ExpensiveDate date={props.date}></ExpensiveDate>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div className='card-live'>
                            <WifiOutline
                                color={'#00000'} 
                                title={'wifi'}
                                height="25px"
                                width="25px"
                            />
                            <span>Live</span>
                        </div>
                        <div className='card-watching'>2.4k watching</div>
                    </div>
                </div>
           </Card>
    );
}

export default ExpenseItem;