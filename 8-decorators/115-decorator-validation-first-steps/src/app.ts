function Required() {}
function PositiveNumber() {}
function validate(obj: object) {}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
    event.preventDefault();
    const titleElement = document.querySelector('#title') as HTMLInputElement;
    const priceElement = document.querySelector('#price') as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('Not a valid Course');
        return;
    }

    console.log(createdCourse);
});