export class boletim{
    b1: number
    b2: number
    b3: number
    b4: number
    constructor(){
        this.b1 = 0
        this.b2 = 0 
        this.b3 = 0
        this.b4 = 0
    }
    calcularMedia(){
        let media: number = ((this.b1 * 2) + (this.b2 * 2) + (this.b3 * 3) + (this.b4 * 3))/10
        return media
    }
}