class Person {
    private occupation: string;

    constructor(occupation: string) {
        this.occupation = occupation;
    }

    getOccupation(): string {
        return this.occupation;
    }
}

// Usage
const person = new Person('Software Developer');
console.log(person.getOccupation()); // Outputs: Software Developer
