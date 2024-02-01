import { ICourse, ILesson, IModule, IQuestion } from "../types";

function formatCourseToJson(courses: ICourse[]) {

	const formattedCourses = courses.map((course) => {
		return {
			course_title: course.course_title,
			course_description: course.course_description,
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
					question_text: question.question_title,
					question_options: question.question_options,
					question_answer: question.question_answer
				}
			})
		};
	});

	return formattedCourses[0];
}

export { formatCourseToJson }