

export default function formatDigits(digit){
    
    return Math.round(digit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}