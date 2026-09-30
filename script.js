
const input = document.getElementById("date_Input")
const output = document.getElementById("output")

const um_Segundo = 1000
const um_Minuto = um_Segundo * 60
const uma_Hora = um_Minuto * 60
const um_Dia = uma_Hora * 24
const um_Mês = um_Dia * 30
const um_Ano = um_Dia * 12


function calculateRemainingTime(dataReferencia, dataHoje) {
    
    let tempoFalta = dataReferencia - dataHoje


    let anosFalta = 0    
    while(tempoFalta > um_Ano){
        um_Ano++
        tempoFalta -= um_Ano
    }

    let mesesFalta = 0 
    while(tempoFalta > um_Mês) {
        mesesFalta++
        tempoFalta -= um_Mês
} 

    let diasFalta = 0 
    while(tempoFalta > um_Dia) {
        diasFalta++
        tempoFalta -= um_Dia
} 

    let horasFalta = 0 
    while(tempoFalta > uma_Hora) {
        horasFalta++
        tempoFalta -= uma_Hora
} 

    let minutosFalta = 0 
    while(tempoFalta > um_Minuto) {
        minutosFalta++
        tempoFalta -= um_Minuto
} 

    let segundosFalta = 0 
    while(tempoFalta > um_Segundo) {
        segundosFalta++
        tempoFalta -= um_Segundo
} 

    return{

        anosFalta,
        mesesFalta,
        diasFalta,
        horasFalta,
        minutosFalta,
        segundosFalta
    }




} 

function textBuilder(tempoRestante){
    let resutl = []

    if(tempoRestante.anosFalta > 0){
        if (tempoRestante.anosFalta > 1){
            result.push(`${anosFalta} anos `)
        }
    }
        else {
            result.push(`${anosFalta} ano`)
    }

    if(tempoRestante.mesesFalta > 0){
        if (tempoRestante.mesesFalta > 1){
            result.push(`${mesesFalta} meses `)
        }
    }
        else {
            result.push(`${mesesFalta} mês`)
    }

    if(tempoRestante.diasFalta > 0){
        if (tempoRestante.diasFalta > 1){
            result.push(`${diasFalta} dias `)
        }
    }
        else {
            result.push(`${diasFalta} dia`)
    }

    if(tempoRestante.horasFalta > 0){
        if (tempoRestante.horasFalta > 1){
            result.push(`${horasFalta} horas `)
        }
    }
        else {
            result.push(`${horasFalta} hora`)
    }

    if(tempoRestante.minutosFalta > 0){
        if (tempoRestante.minutosFalta > 1){
            result.push(`${minutosFalta} minutos `)
        }
    }
        else {
            result.push(`${minutosFalta} minuto`)
    }

    if(tempoRestante.segundosFalta > 0){
        if (tempoRestante.segundosFalta > 1){
            result.push(`${segundosFalta} segundos `)
        }
    }
        else {
            result.push(`${segundosFalta} segundo`)
    }

}

const dataReferencial = new Date("2028", "01", "01").getTime()
const DatadeHoje = new Date().getTime()

let resultado = calculateRemainingTime(dataReferencial, DatadeHoje)

console.log(resultado)