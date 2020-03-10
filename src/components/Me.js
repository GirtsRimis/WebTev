import React, { Component } from 'react'
import './sass/Me.sass'
import face from './images/face.png'

export class Me extends Component {
    render() {
        return (
            <div className="me">
                <img className="face" src={face} alt="Me"/>
                <h3>Kas es esmu?</h3>
                <hr/>
                <p>Programmētājs ar degsmi mācīties un attīstīties. Spēju izveidot vienkāršu
                    un modernu mājas lapu, kā arī protu tai piedot augstāku funckionalitāti,
                    kas to noteikti padarīs pievilcīgāku lietotājam.
                </p>
                <p>
                    Lai radītu labu programmatūru, izmantoju jaunākās dizaina tendeces un tehnoloģijas, 
                    pievēršu lielu uzmanību dizainam un programmatūras sajūtai.
                </p>
            </div>
        )
    }
}

export default Me