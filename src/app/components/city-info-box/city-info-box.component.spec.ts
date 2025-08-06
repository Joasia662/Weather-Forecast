import { CityInfoBoxComponent } from "./city-info-box.component"

describe('CityInfoBoxComponent', () => {
    let component: CityInfoBoxComponent;
    let localCityInfo;

    beforeEach(() => {
        localCityInfo = {
            "id": 3094802,
            "name": "Krakow",
            "coord": {
                "lat": 50.0833,
                "lon": 19.9167
            },
            "country": "PL",
            "population": 755050,
            "timezone": 7200,
            "sunrise": 1754190732,
            "sunset": 1754245246
        }

        component = new CityInfoBoxComponent();
        component.cityInfo = localCityInfo;
    })

    it('should convert cityInfo.sunrise timestamp (1754190732) to Date, format it properly and assign it to local variable sunrise("2025-08-03T03:12:12.000Z") inside ngOnInit', () => {
        component.ngOnInit();

        expect(component.sunrise).toEqual(new Date("2025-08-03T03:12:12.000Z"));
    })

    it('should convert cityInfo.sunset timestamp (1754245246) to Date, format it properly and assign it to local variable sunset("2025-08-03T18:20:46.000Z") inside ngOnInit', () => {
        component.ngOnInit();

        expect(component.sunset).toEqual(new Date("2025-08-03T18:20:46.000Z"));
    })

})