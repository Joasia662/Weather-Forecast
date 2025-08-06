import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ErrorMessageComponent } from "./error-message.component"
import { By } from "@angular/platform-browser"

describe('ErrorMessageComponent', () => {

    let fixture: ComponentFixture<ErrorMessageComponent>
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorMessageComponent]
        })
        fixture = TestBed.createComponent(ErrorMessageComponent)

    })
    it('should display the right message', () => {
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.message-text'))

        expect(de.nativeElement.textContent).toContain('Unfortunately we were unable to display the weather forecast for choosen city')
    })
})