export interface MyTestObj {
  a?: boolean;
}

describe('my fisrt test', () => { //fist parameter is a description of this state

    let sut : MyTestObj ; //system under test  -- generic name


    // ***** FUNCTION THAT HELP RESET THE STATE OF MY TEST (TO CLEAN STATE) BEFORE EACH USE *****
    beforeEach(() =>{
        sut = { };
    })

    //THE TEST IS ALWAYS DONE WITH AN IT FUNCTION
    it('Should be true if true', () => {
        //arrange
        sut.a = false;
        //act
        sut.a = true;

        //assert
        expect(sut.a).toBe(true)
    })
})
