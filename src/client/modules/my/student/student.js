import { LightningElement, track, api } from 'lwc';
import { studentService } from 'my/studentService';

export default class Student extends LightningElement {
    @api studentId;
    @track student;

    connectedCallback() {
        this.student = studentService.getStudent(this.studentId);
    }
}
