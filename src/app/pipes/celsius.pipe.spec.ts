import { CelsiusPipe } from "./celsius.pipe";

describe('CelsiusPipe', () => {

    it('should display 10 °C when value is 10 ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform(10)).toEqual('10 °C')
    })

    it('should display -100 °C when value is -100 ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform(-100)).toEqual('-100 °C')
    })

    it('should display 0 °C when value is 0 ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform(0)).toEqual('0 °C')
    })

    it('should display Infinity °C when value is Infinity ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform(Infinity)).toEqual('Infinity °C')
    })

    it('should display 8 °C when value is "8" ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform("8")).toEqual('8 °C')
    })

    it('should display Nan when value is NaN ', () => {
        let pipe = new CelsiusPipe();

        expect(pipe.transform(NaN)).toEqual('NaN')
    })
})