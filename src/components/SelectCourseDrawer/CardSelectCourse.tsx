import { Card, Checkbox } from "@chakra-ui/react";
import { ICourse } from "../../types";
import { useState } from "react";

interface IProps {
	course: ICourse;
	setSelectedCourses: React.Dispatch<React.SetStateAction<number[]>>
	selectedCourses: number[]
	isAlreadySelected: boolean | undefined
}

const CardSelectCourse: React.FC<IProps> = ({ course, setSelectedCourses, selectedCourses, isAlreadySelected }: IProps) => {

  function handleCourseSelect() {
			selectedCourses.some((el: number) => course.course_id === el)
			? setSelectedCourses([
					...selectedCourses.filter((item: number) => course.course_id !== item),
				])
			: setSelectedCourses([...selectedCourses, course.course_id]);
  }

	return (
		<Card p={5} variant="outline" cursor="pointer">
			<Checkbox
				colorScheme="green"
				value={course.course_id}
				size="lg"
				spacing="1rem"
				defaultChecked={isAlreadySelected}
        onChange={handleCourseSelect}
			>
				<b>{course.course_title}</b>
			</Checkbox>
		</Card>
	);
};

export default CardSelectCourse;
