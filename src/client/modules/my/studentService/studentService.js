class StudentService {
    students = [];

    async getStudents() {
        if (this.students.length === 0) await this.loadStudents();
        return [...this.students];
    }

    getStudent(id) {
        let i;
        for (i = 0; i < this.students.length; i++)
            if (this.students[i].id == id) return { ...this.students[i] };

        return {};
    }

    async loadStudents() {
        let response = await fetch('/students');
        this.students = await response.json();
    }
}

export let studentService = new StudentService();
