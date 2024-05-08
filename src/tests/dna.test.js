const Funciones =require("../data");
const Bases = "CTAGGGTA"

const { getADNBase, getADNLow, getADNVacio, ValidateADN
}= require("../dna");

describe("ValidateADN", ()=>{
})
it ("Si las bases estan en mayusculas",()=>{
    const Bases = getADNLow("CTAGGGTA")
    expect(Bases).toHaveReturned("CTAGGGTA")
    expect(Bases).toBeTruthy("CTTTAAA")
});

it ("Si no se escribe nada",()=>{
    const Bases = getADNVacio
    expect(Bases).toBeTruthy("CTAGGGTA")
    expect(Bases).toBeTruthy("CTTTAAA")

});
it ("Si tiene las bases correcatas CTAG",()=>{
    const Bases = getADNBase("CTAGGGTA")
    expect(Bases).toBeTruthy("CTAGGGTA")
    expect(Bases).toBeTruthy("CTTTAAA")
});