import React from 'react';
import Zac from '../../images/zac.jpeg'
import './Infobox.css'

const Infobox = () => {

    return (
        <div id='mainBox'>

            {/* <h4 id='title'>Zac Eskridge</h4>

            <img className="myPic" src={Zac} alt="me" />
            <figcaption>Tempe, AZ</figcaption>

            <div className='butts'>
                <h4 id='colName'>Born</h4>
                <span className='colBody'>May 22, 1990</span>
                <br />
                <span className='colBody'>Clovis, New Mexico</span>
            </div> */}



            <table>
                <tr>
                    <th colspan='2' className='titleWrapper'>
                        <span id='title'>Zac Eskridge</span>
                    </th>
                </tr>

                <tbody>
                    <tr>
                        <td colspan='2' id='picWrapper'>
                            <img className="myPic" src={Zac} alt="me" />
                            <figcaption>Tempe, AZ</figcaption></td>

                    </tr>

                    <tr>
                        <th scope='row'>Born</th>
                        <td id=''>
                            May 22, 1990
                            <br />
                            Clovis, NM
                        </td>
                    </tr>

                    <tr>
                        <th scope='row'>Skills</th>
                        <td id='skills'>
                            Programming
                            <br />
                            Mixology
                            <br />
                            Cooking
                            <br />
                            Drumming
                            <br />
                            Disc Golf
                            <br />
                            Video Games
                        </td>
                    </tr>

                    <tr>
                        <th scope='row'>Occupation</th>
                        <td id='occupation'>
                            Full-Stack
                            <br />
                            Web Developer
                        </td>
                    </tr>


                    <tr></tr>
                    <tr></tr>

                </tbody>
            </table>

        </div>
    )
}


export default Infobox;

{/* <td id='languages'>
                            • HTML 5
                            <br />
                            • CSS 3
                            <br />
                            • JavaScript 5 and 6
                            <br />
                            • Node.js
                            <br />
                            • Express.js
                            <br />
                            • MongoDB
                            <br />
                            • Mongoose
                            <br />
                            • MySQL
                            <br />
                            • Sequelize
                            <br />
                            • React.js
                            <br />
                            • Python
                            <br />
                            • Flask
                            <br />

                        </td> */}