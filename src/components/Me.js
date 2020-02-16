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
                <p>Esmu studens un apgūstu programmēšanu. Novērtēju sevi kā iesācēja līmeņa
                    programmētāju, bet spēju izveidot labu produktu. Pie katras problēmas
                    rūpīgi apskatu doto dokumentāciju un radu risinājumu.
                </p>
                <p>
                    Iesācējs - tas nozīmē, ka produkta izstrāde ir mazliet ilgākā, nekā pie pieredzējušāka
                    programmētāja.
                </p>
            </div>
        )
    }
}

export default Me