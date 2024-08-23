import React from 'react';
import PropTypes from "prop-types";

export function SimpleCounter(props) {
    return (
        <div className="BigCounter">

            <div className="calendar">

                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>

        </div>);
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

let counter = 0;
const upDatecounter = () => {
    const four = Math.floor(counter / 1000)
    const three = Math.floor(counter / 100)
    const two = Math.floor(counter / 10)
    const one = Math.floor(counter / 1)
    document.querySelector('.four').textContent = four
    document.querySelector('.three').textContent = three
    document.querySelector('.two').textContent = two
    document.querySelector('.one').textContent = one

    counter++;
};

setInterval(upDatecounter, 1000)
