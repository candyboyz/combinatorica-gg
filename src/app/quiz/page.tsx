import { QuizPreviewCardList } from "@/entities/quiz";
import { getAuthSession } from "@/shared/lib/next-auth";
import { Wrapper } from "@/shared/ui/wrapper";
import { redirect } from "next/navigation";
import React from "react";

const quizs = [
  {
    title: "Базовый тест по комбинаторик",
    subtitle: "Базовый тест по комбинаторике для начинающих изучение",
    score: 4,
    url: "1",
  },
  {
    title: "Решение комбинаторных задач",
    subtitle:
      "Тест предназначен для поверки умения решать комбинаторные задачи",
    score: 2,
    url: "2",
  },
  {
    title: "Комбинаторные задачи в 5 классе",
    subtitle: "Вам предлагается пройти тест по теме 'Комбинаторные задачи'",
    score: 5,
    url: "3",
  },
];

const QuizPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) redirect("/");

  return (
    <Wrapper className="my-5">
      <QuizPreviewCardList quizs={quizs} />
    </Wrapper>
  );
};

export default QuizPage;
