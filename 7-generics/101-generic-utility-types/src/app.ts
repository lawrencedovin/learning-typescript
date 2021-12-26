interface CourseGoal {
    title: string;
    description: string;
    completionDate: Date;
}

function createCourseGoal(title: string, description: string, completionDate: Date): CourseGoal {
    // Transforms it into a Partial Type where all the properties are optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal = {title, description, completionDate};
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();