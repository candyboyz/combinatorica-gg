"use client";

import { cn } from "@/shared/lib/utils";
import { Wrapper } from "@/shared/ui/wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type QuizAnswerPageProps = {
  params: { id: string };
};

const quizs = [
  {
    title: "Базовый тест по комбинаторик",
    subtitle: "Базовый тест по комбинаторике для начинающих изучение",
    questions: [
      {
        question:
          "Сколькими способами могут разместиться 8 человек в салоне автобуса на восьми свободных местах?",
        type: "text",
        selectType: "single",
        answers: ["40320", "1600", "24", "4"],
        correctAnswer: 0,
      },
      {
        question: "Комбинаторика отвечает на вопрос",
        type: "text",
        selectType: "single",
        answers: [
          "Какова частота массовых случайных явлений",
          "С какой вероятностью произойдет некоторое случайное событие",
          "Сколько различных комбинаций можно составить из элементов данного множества",
        ],
        correctAnswer: 2,
      },
      {
        question: "Сколько существует вариантов выбора двух чисел из восьми?",
        type: "text",
        selectType: "single",
        answers: ["36", "18", "28", "6"],
        correctAnswer: 2,
      },
      {
        question:
          "В партии из 4000 семян пшеницы 50 семян не взошли. Какова вероятность появления невсхожих семян?",
        type: "text",
        selectType: "single",
        answers: ["0.05", "0.0125", "0.5", "0.001"],
        correctAnswer: 1,
      },
      {
        question:
          "Выберите из предложенных множеств множество натуральных чисел",
        type: "text",
        selectType: "single",
        answers: ["N", "C", "Q", "R"],
        correctAnswer: 0,
      },
      {
        question:
          "Множество, состоящее из всех элементов, принадлежащих множеству А и не принадлежащих множеству В называют",
        type: "text",
        selectType: "single",
        answers: [
          "Пересечением множеств А и В",
          "Разностью множеств А и В",
          "Объединением множеств А и В",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Любое множество, состоящее из k элементов, взятых из данных n элементов, называется",
        type: "text",
        selectType: "single",
        answers: ["Сочетанием", "Размещением", "Перестановкой"],
        correctAnswer: 0,
      },
      {
        question:
          "Количество сочетаний из n элементов по k вычисляют по формуле:",
        type: "text",
        selectType: "single",
        answers: ["n!k! / (n−k)!", "n! / (n−k)!", "n! / k!"],
        correctAnswer: 0,
      },
      {
        question:
          "Сколько различных пятизначных чисел можно составить из цифр 1, 2, 3, 4, 5?",
        type: "text",
        selectType: "single",
        answers: ["120", "3125", "5", "20"],
        correctAnswer: 0,
      },
      {
        question:
          "Сколькими способами из 9 учебных дисциплин можно составить расписание учебного дня из 6 различных уроков.",
        type: "text",
        selectType: "single",
        answers: ["258", "10000", "60480", "78356"],
        correctAnswer: 2,
      },
      {
        question:
          "Если объект А можно выбрать х способами, а объект В – у способами, то каким количеством способов можно выбрать объект «А и В»",
        type: "text",
        selectType: "single",
        answers: ["xy", "x", "x-y", "x+y"],
        correctAnswer: 0,
      },
      {
        question:
          "Сколькими способами можно расставить 4 различные книги на книжной полке?",
        type: "text",
        selectType: "single",
        answers: ["20", "4", "24", "16"],
        correctAnswer: 2,
      },
      {
        question:
          "В футбольной команде 11 человек. Необходимо выбрать капитана и его заместителя. Сколькими способами это можно сделать?",
        type: "text",
        selectType: "single",
        answers: ["110", "160", "121", "11"],
        correctAnswer: 0,
      },
      {
        question: "Вычислить 10!/5!",
        type: "text",
        selectType: "single",
        answers: ["2", "125", "2000", "30240"],
        correctAnswer: 3,
      },
      {
        question:
          "В корзине лежат грибы, среди которых 10% белых и 40% рыжих. Какова вероятность того, что выбранный гриб белый или рыжий?",
        type: "text",
        selectType: "single",
        answers: ["0.5", "0.1", "0.4", "0.04"],
        correctAnswer: 0,
      },
      {
        question:
          "Сколько существует трехзначных чисел, все цифры которых нечетные и различные.",
        type: "text",
        selectType: "single",
        answers: ["30", "60", "120", "10"],
        correctAnswer: 1,
      },
      {
        question: "Число 14! НЕ делится на:",
        type: "text",
        selectType: "single",
        answers: ["168", "136", "147", "132"],
        correctAnswer: 1,
      },
      {
        question:
          "Сколько различных двухзначных чисел можно записать, используя цифры 2, 3, 8, если цифры в этих числах могут повторяться?",
        type: "text",
        selectType: "single",
        answers: ["9", "3", "6", "8"],
        correctAnswer: 0,
      },
      {
        question: "Что означает K!",
        type: "text",
        selectType: "single",
        answers: [
          "Восклицание",
          "Произведение целых чисел от 1 до  K",
          "Сумму квадратов целых чисел от 1 до K",
          "K−1",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Сколькими способами могут разместиться 3 человека в четырехместном купе на свободных местах?",
        type: "text",
        selectType: "single",
        answers: ["12", "48", "6", "24"],
        correctAnswer: 3,
      },
    ],
  },
  {
    title: "Решение комбинаторных задач",
    subtitle:
      "Тест предназначен для поверки умения решать комбинаторные задачи",
    questions: [
      {
        question: "Вычислите P6 - P5",
        type: "text",
        selectType: "single",
        answers: ["640", "620", "600", "540"],
        correctAnswer: 2,
      },
      {
        question: "Вычислите A4/8",
        type: "text",
        selectType: "single",
        answers: ["1680", "1640", "1540", "1660"],
        correctAnswer: 0,
      },
      {
        question: "Вычислите C5/10",
        type: "text",
        selectType: "single",
        answers: ["236", "252", "260", "210"],
        correctAnswer: 1,
      },
      {
        question:
          "Сколькими способами 5 человек могут встать в очередь в театральную кассу?",
        type: "text",
        selectType: "single",
        answers: ["130", "110", "150", "120"],
        correctAnswer: 3,
      },
      {
        question:
          "Сколько пятизначных чисел (без повторения цифр), можно составить из цифр 1, 3, 5, 6, 9,  таких, которые делятся на 2?",
        type: "text",
        selectType: "single",
        answers: ["150", "120", "24", "60"],
        correctAnswer: 2,
      },
      {
        question:
          "Сколькими способами можно изготовить трехцветный флаг с горизонтальными полосами, если имеется 7 различных цветов?",
        type: "text",
        selectType: "single",
        answers: ["150", "120", "180", "210"],
        correctAnswer: 3,
      },
      {
        question:
          "Сколько различных четырехзначных чисел (без повторения цифр) можно составить из цифр 1, 4, 5, 6, 7, 9?",
        type: "text",
        selectType: "single",
        answers: ["120", "360", "350", "56"],
        correctAnswer: 1,
      },
      {
        question:
          "В киоске продается 8 различных наборов марок, посвященных спортивной тематике. Сколькими способами можно выбрать из них три набора?",
        type: "text",
        selectType: "single",
        answers: ["120", "350", "56", "360"],
        correctAnswer: 2,
      },
      {
        question:
          "В группе 7 студентов успешно занимаются математикой. Сколькими способами можно выбрать из них двоих для участия в олимпиаде?",
        type: "text",
        selectType: "single",
        answers: ["60", "120", "56", "21"],
        correctAnswer: 3,
      },
      {
        question:
          "На витрине магазина 7 видов рубашек и 5 видов брюк. Сколькими способами покупатель может выбрать 3 рубашки и 2 брюк?",
        type: "text",
        selectType: "single",
        answers: ["120", "350", "56", "360"],
        correctAnswer: 1,
      },
    ],
  },
  {
    title: "Комбинаторные задачи в 5 классе",
    subtitle: "Вам предлагается пройти тест по теме 'Комбинаторные задачи'",
    questions: [
      {
        question:
          "В кружок бального танца записались Петя, Коля, Витя, Игорь, Таня, Оля, Наташа, Света. Какие танцевальные пары девочки и мальчика могут образоваться?",
        type: "text",
        selectType: "single",
        answers: ["12", "16", "14", "10"],
        correctAnswer: 1,
      },
      {
        question:
          "Сколько существует различных прямоугольников, площади которых равны 20 см2, а длины сторон выражены целым числом сантиметров?",
        type: "text",
        selectType: "single",
        answers: ["6", "2", "3", "10"],
        correctAnswer: 2,
      },
      {
        question:
          "Школьные туристы решили совершить путешествие к горному озеру. Первый этап пути можно преодолеть на поезде или автобусе. Второй этап - на байдарках, велосипедах или пешком. И третий этап пути - пешком или с помощью канатной дороги. Какие возможные варианты путешествия есть у школьных туристов?",
        type: "text",
        selectType: "single",
        answers: ["10", "12", "15", "14"],
        correctAnswer: 1,
      },
      {
        question:
          "Запишите трехзначные числа, которые можно составить из цифр 1, 9, 6 используя в записи числа каждую из них не больше одного раза. В ответе укажите большее из них.",
        type: "text",
        selectType: "single",
        answers: ["961", "4521", "645", "4214"],
        correctAnswer: 0,
      },
      {
        question:
          "Сколько двузначных чисел существует, для записи которых используются только цифры 9, 3 и 1 (цифры не могут повторяться)?",
        type: "text",
        selectType: "single",
        answers: ["4", "1", "6", "3"],
        correctAnswer: 2,
      },
    ],
  },
];

const QuizAnswersPage = ({ params }: QuizAnswerPageProps) => {
  const session = useSession();

  if (session.status === "unauthenticated") redirect("/");

  const [quizQuestId, setQuizQuestId] = useState(0);

  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Wrapper className="flex items-center justify-center my-5 h-full">
      {isCompleted ? (
        <QuizComplete
          quiz={quizs[Number(params.id) - 1]}
          answers={quizAnswers}
        />
      ) : (
        <div className="max-w-[900px] h-[480px] w-full border rounded-xl px-4 py-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {quizs[Number(params.id) - 1].title}
            </h2>
            <p className="text-sm font-light">{`${quizQuestId + 1}/${
              quizs[Number(params.id) - 1].questions.length
            }`}</p>
          </div>

          <div className="flex flex-col h-full justify-between gap-4">
            <p className="text-sm font-light">
              {quizs[Number(params.id) - 1].questions[quizQuestId].question}
            </p>
            <div className="flex flex-col gap-2.5">
              {quizs[Number(params.id) - 1].questions[quizQuestId].answers.map(
                (answer, index) => {
                  return (
                    <button
                      onClick={() => {
                        setQuizAnswers((prev) => {
                          prev[quizQuestId] = index;

                          return [...prev];
                        });
                      }}
                      key={answer}
                      className={cn(
                        "border rounded-lg py-1.5 text-start px-4 select-none",
                        quizAnswers[quizQuestId] === index &&
                          "border-green-500",
                      )}>
                      {answer}
                    </button>
                  );
                },
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  if (quizQuestId === 0) return;

                  setQuizQuestId((prev) => prev - 1);
                }}>
                {quizQuestId === 0 ? (
                  ""
                ) : (
                  <div className="flex select-none">
                    <ChevronLeft />
                    <p>Назад</p>
                  </div>
                )}
              </button>
              <button
                onClick={() => {
                  if (
                    quizQuestId ===
                    quizs[Number(params.id) - 1].questions.length - 1
                  )
                    return setIsCompleted(true);

                  setQuizQuestId((prev) => prev + 1);
                }}>
                {quizs[Number(params.id) - 1].questions.length - 1 ===
                quizQuestId ? (
                  "Завершить"
                ) : (
                  <div className="flex select-none">
                    <p>Дальше</p>
                    <ChevronRight />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

type QuizCompleteProps = {
  quiz: (typeof quizs)[0];
  answers: number[];
};

const QuizComplete = ({ quiz, answers }: QuizCompleteProps) => {
  const getTrueAnswersCount = () => {
    const trueAnswers: boolean[] = [];

    quiz.questions.forEach((quest, index) => {
      if (quest.correctAnswer === answers[index]) trueAnswers.push(true);
    });

    return trueAnswers.length;
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg font-bold">{quiz.title}</h2>
      <div className="flex gap-2">
        <p>Правильных ответов:</p>
        <p className="font-meidum text-green-500">{getTrueAnswersCount()}</p>
      </div>
      <div className="flex gap-2">
        <p>Всего вопросов:</p>
        <p className="font-meidum">{quiz.questions.length}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Правильные ответы:</p>
        <ul className="flex flex-col ml-10 list-decimal">
          {quiz.questions.map((quest, index) => {
            return (
              <li
                key={index}
                className={cn(
                  quest.correctAnswer !== answers[index] && "text-red-600",
                )}>
                {quest.answers[quest.correctAnswer]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuizAnswersPage;
