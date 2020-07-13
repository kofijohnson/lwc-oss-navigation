import { LightningElement, track } from 'lwc';
import { studentService } from 'my/studentService';

export default class Students extends LightningElement {
    @track students = [];

    async connectedCallback() {
        this.students = await studentService.getStudents();
    }

    goToStudent(event) {
        this.dispatchEvent(
            new CustomEvent('navigate', {
                bubbles: true,
                composed: true,
                detail: { path: `/students/${event.currentTarget.dataset.key}` }
            })
        );
    }
    //getter method to check if students array have value
    get isStudentsAvailable() {
        return this.students.length > 0;
    }
}
