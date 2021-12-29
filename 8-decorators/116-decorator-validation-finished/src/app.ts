interface ValidatorConfig {
    // Class Name
    [property: string]: {
        [validatableProperty: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        // Takes already existing property values if it exists ['positive']
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    };
}

function PositiveNumber(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        // Takes already existing property values if it exists ['required']
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    };
}

// Runs the logic of the validators
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    // if no errors for validating that means the form inputs are good.
    if(!objValidatorConfig) return true;
    let isValid = true;
    for(const property in objValidatorConfig) {
        for(const validator of objValidatorConfig[property]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[property];
                    break;
                case 'positive':
                    isValid = isValid && obj[property] > 0;
                    break;
            }
        }
    }
    return isValid;
}

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