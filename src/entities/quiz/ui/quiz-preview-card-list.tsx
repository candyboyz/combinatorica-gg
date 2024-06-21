import React from "react";
import { QuizPreviewCard } from "./quiz-preview-card";

export type QuizPreviewCardListProps = {
  quizs: { title: string; subtitle: string; score: number; url: string }[];
};

export const QuizPreviewCardList = ({ quizs }: QuizPreviewCardListProps) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-center">
      {quizs.map((quiz) => (
        <QuizPreviewCard key={quiz.title} {...quiz} />
      ))}
    </div>
  );
};
