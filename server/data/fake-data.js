import * as fuzzy from "fast-fuzzy";

const lessons = [
  {
    id: "1",
    title: "React",
    description: "Introduction to React",
    icon: "lightbulb",
    complete: false,
  },
  {
    id: "2",
    title: "Advanced React",
    description: "Advanced React concepts",
    icon: "shuffle",
    complete: false,
  },
  {
    id: "3",
    title: "React router",
    description: "React with React-router Framework mode",
    icon: "zap",
    complete: false,
  },
  {
    id: "4",
    title: "Tanstack start",
    description: "React with Tanstack start ",
    icon: "hourglass",
    complete: false,
  },
  {
    id: "5",
    title: "NextJs",
    description: "React with NextJS",
    icon: "fastforward",
    complete: false,
  },
  {
    id: "6",
    title: "Who wins above?",
    description: "The vision for React with Meta frameworks",
    icon: "puzzle",
    complete: false,
  },
];

export async function getLessons(tab, search, delay) {
  let filteredLessons = [...lessons];
  if (tab === "wip") {
    filteredLessons = lessons.filter((lesson) => !lesson.complete);
  } else if (tab === "done") {
    filteredLessons = lessons.filter((lesson) => lesson.complete);
  }
  if (search != null && search !== "" && search !== "undefined") {
    filteredLessons = fuzzy.search(search, filteredLessons, {
      keySelector: (obj) => obj.title + " " + obj.description,
      threshold: 0.9,
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredLessons);
    }, delay);
  });
}

export async function postLessonToggle(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lesson = lessons.find((lesson) => lesson.id === id);
      lesson.complete = !lesson.complete;
      resolve();
    }, delay);
  });
}

export async function postLogin(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
