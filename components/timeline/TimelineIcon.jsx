import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext";

const phaseComponent = {
    university:{
        light:(
            <svg t="1669394435660" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1107" width="50" height="50">
                <path
                    d="M789.333333 486.250667V746.666667c0 58.901333-124.16 106.666667-277.333333 106.666666-150.570667 0-273.109333-46.144-277.226667-103.68L234.666667 746.666667V486.250667l260.053333 115.285333a42.666667 42.666667 0 0 0 30.848 1.450667l3.733333-1.450667L789.333333 486.250667zM529.28 166.464l398.592 176.704a21.333333 21.333333 0 0 1 0 38.997333L874.666667 405.76 874.666667 603.093333A42.666667 42.666667 0 1 1 832 603.029333v-178.410666l-302.72 134.229333a42.666667 42.666667 0 0 1-34.56 0L96.106667 382.165333a21.333333 21.333333 0 0 1 0-38.997333l398.570666-176.704a42.666667 42.666667 0 0 1 34.602667 0z"
                    fill="#515151" p-id="1108"></path>
            </svg>
        ),
        dark:(
            <svg t="1669394435660" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1107" width="50" height="50">
                <path
                    d="M789.333333 486.250667V746.666667c0 58.901333-124.16 106.666667-277.333333 106.666666-150.570667 0-273.109333-46.144-277.226667-103.68L234.666667 746.666667V486.250667l260.053333 115.285333a42.666667 42.666667 0 0 0 30.848 1.450667l3.733333-1.450667L789.333333 486.250667zM529.28 166.464l398.592 176.704a21.333333 21.333333 0 0 1 0 38.997333L874.666667 405.76 874.666667 603.093333A42.666667 42.666667 0 1 1 832 603.029333v-178.410666l-302.72 134.229333a42.666667 42.666667 0 0 1-34.56 0L96.106667 382.165333a21.333333 21.333333 0 0 1 0-38.997333l398.570666-176.704a42.666667 42.666667 0 0 1 34.602667 0z"
                    fill="#e6e6e6" p-id="1108"></path>
            </svg>
        )
    },
    graduated:{
        dark:(
            <svg t="1669397475163" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4228" width="50" height="50">
                <path
                    d="M706 842.3h-52.5l-25.3-124.2c-3-14.7-15.9-25.2-30.9-25.3H426.1c-15 0.1-27.9 10.6-30.9 25.3l-25.9 124.2H318c-17.3 0-31.5 14.2-31.5 31.5s14.2 31.5 31.5 31.5h388c17.3-0.7 31.5-14.2 31.5-31.5s-14.2-31.5-31.5-31.5z m-253.9-87.2H572l17.9 86.5H434.2l17.9-86.5zM960 589V181.1c0-16.6-6.5-32.5-18.2-44.2a62.518 62.518 0 0 0-44.2-18.3H126.4c-16.6 0-32.5 6.5-44.2 18.2C70.5 148.6 64 164.5 64 181.1V589h896z m0 0"
                    p-id="4229" fill="#e6e6e6"></path>
                <path
                    d="M64 634.7v49.4c0 16.6 6.5 32.5 18.2 44.2 11.7 11.7 27.6 18.3 44.2 18.2h771.2c16.6 0 32.5-6.5 44.2-18.3 11.7-11.7 18.3-27.6 18.2-44.2v-49.4H64z"
                    p-id="4230" fill="#e6e6e6"></path>
            </svg>
        ),
        light:(
            <svg t="1669397475163" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4228" width="50" height="50">
                <path
                    d="M706 842.3h-52.5l-25.3-124.2c-3-14.7-15.9-25.2-30.9-25.3H426.1c-15 0.1-27.9 10.6-30.9 25.3l-25.9 124.2H318c-17.3 0-31.5 14.2-31.5 31.5s14.2 31.5 31.5 31.5h388c17.3-0.7 31.5-14.2 31.5-31.5s-14.2-31.5-31.5-31.5z m-253.9-87.2H572l17.9 86.5H434.2l17.9-86.5zM960 589V181.1c0-16.6-6.5-32.5-18.2-44.2a62.518 62.518 0 0 0-44.2-18.3H126.4c-16.6 0-32.5 6.5-44.2 18.2C70.5 148.6 64 164.5 64 181.1V589h896z m0 0"
                    p-id="4229" fill="#515151"></path>
                <path
                    d="M64 634.7v49.4c0 16.6 6.5 32.5 18.2 44.2 11.7 11.7 27.6 18.3 44.2 18.2h771.2c16.6 0 32.5-6.5 44.2-18.3 11.7-11.7 18.3-27.6 18.2-44.2v-49.4H64z"
                    p-id="4230" fill="#515151"></path>
            </svg>
        )
    }

}


const TimelineIcon = ({phase}) => {

    const themeContext = useContext(ThemeContext);
    return (
        <span>
            {phaseComponent[phase][themeContext.theme]}
        </span>
    );
};

export default TimelineIcon;
