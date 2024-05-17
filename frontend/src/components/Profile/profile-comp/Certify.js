import React from 'react'
import {NavLink} from 'react-router-dom';

const Certify = () => {
  return (
    <div className="ml-16 mt-[2.6rem]">
        <h3 className="ml-[5.5rem] font-bold text-xl">Certificates</h3>
            <table className="tab shadow-lg transition duration-500 ml-[60px] ease-in-out text-[#ff9b05] text-[1.1rem] w-[23vw]">
            <tr>
                <td><NavLink to="#">Link to Certificate 1</NavLink></td>
            </tr>
            <tr>
                <td><NavLink to="#">Link to Certificate 2</NavLink></td>
            </tr>
            <tr>
                <td><NavLink to="#">Link to Certificate 3</NavLink></td>
            </tr>
            <tr>
                <td><NavLink to="#">Link to Certificate 4</NavLink></td>
            </tr>
            </table>
    </div>
  )
}

export default Certify