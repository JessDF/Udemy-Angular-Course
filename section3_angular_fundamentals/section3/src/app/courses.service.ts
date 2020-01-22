//Angular doesn't have a decorator for services
export class CoursesService {
    getCourses() {
        //For now hard coding as we aren't ready to get in complexity of consuming HTTP service
        return ["course1", "course2", "course3"];
    }
}