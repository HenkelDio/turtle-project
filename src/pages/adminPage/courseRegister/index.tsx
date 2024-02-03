import { IoIosArrowBack } from "react-icons/io";
import { BackPage } from "../../../packages/admin/FormGroup/styles";
import { Container, Box, ContainerPreview, ModulesContainer } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterForm from "../../../components/RegisterForm";
import FieldInput from "../../../components/Fields/FieldInput";
import ModuleBox from "../../../packages/admin/ModuleBox";
import { MdNoteAdd } from "react-icons/md";
import FormModule from "../../../packages/admin/formModule";
import useTurtleStore from "../../../store";

const CourseRegister: React.FC = () => {
	const [isOpenEditorModule, setOpenEditorModule] = useState(false);

	const { modules } = useTurtleStore((state) => state);

	return (
		<Container>
			<BackPage>
				<Link to="/courses">
					<IoIosArrowBack />
				</Link>
			</BackPage>

			{isOpenEditorModule ? (
				<FormModule />
			) : (
				<>
					<h1>Criar novo curso</h1>

					<Formik onSubmit={(values) => console.log(values)} initialValues={{}}>
						<Form style={{ textAlign: "center" }}>
							<FieldInput
								name="course_title"
								placeholder="Digite o título do curso"
								title="Título do curso"
							/>

							<ModulesContainer>
								<p>Módulos</p>

								<div className="modules">
									<ModuleBox />
									{modules?.map((val) => {
										return <ModuleBox />;
									})}
									<div
										className="addMoreModulesContainer"
										onClick={() => setOpenEditorModule(true)}
									>
										<span>
											<MdNoteAdd />
										</span>
										<p>Adicionar novo módulo</p>
									</div>
								</div>
							</ModulesContainer>

							<RegisterForm>
								<label htmlFor="student_cpf">Descrição do curso</label>
								<Field
									as="textarea"
									name="course_description"
									placeholder="Digite a descrição do curso"
								/>
								<ErrorMessage name="course_description" component="span" />
							</RegisterForm>

							<Button style={{ marginTop: "20px" }}>Salvar</Button>
						</Form>
					</Formik>
				</>
			)}
			{/* {
				step === 1 &&
				<>
					<QuillEditor
						setValue={setValue}
					/>
					<Button
						onClick={() => setStep(2)}
						style={{ marginTop: '100px' }}>
						Continuar
					</Button>
				</>
			}

			{
				step === 2 &&
				<>
					<BackPage
						onClick={() => setStep(1)}
					>
						<IoIosArrowBack />
					</BackPage>
					<ContainerPreview dangerouslySetInnerHTML={{ __html: value }} />
				</>
			} */}
		</Container>
	);
};

export default CourseRegister;
