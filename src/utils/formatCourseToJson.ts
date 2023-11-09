import { ICourse, ILesson, IModule, IQuestion } from "../types";

function formatCourseToJson(courses: ICourse[]) {

	const formattedCourses = courses.map((course) => {
		return {
			course_title: course.course_title,
			modules: course.modules.map((module: IModule) => {
				return {
					module_title: module.module_title,
					lessons: module.lessons?.map(( lesson: ILesson ) => {
						return {
							lesson_title: lesson.lesson_title,
							lesson_video_url: lesson.video_url,
							lesson_pdf_url: lesson.pdf_url,
							lesson_richtext: lesson.content
						};
					}),
				};
			}),
			questions: course.questions?.map((question: IQuestion) => {
				return {
					question_title: question.question_title,
					options: question.options,
					correct_answer: question.correct_answer
				}
			})
		};
	});

	return formattedCourses[0];
}

export { formatCourseToJson }