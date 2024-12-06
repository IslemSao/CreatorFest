export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Who can attend Creatorfest?",
    answer:
      "Creatorfest is open to anyone interested in starting their content creation journey. Whether you're a complete beginner or looking to refine your skills, this event is for you!",
  },
  {
    id: "2",
    question: "Will there be hands-on workshops?",
    answer:
      "Yes! Creatorfest includes practical workshops where you can learn new skills, ask questions, and get real-time feedback. You’ll leave with the confidence to start creating.",
  },
  {
    id: "3",
    question: "How can I register for Creatorfest?",
    answer:
      "You can register for Creatorfest directly on our website. Simply fill out the registration form above.",
  },
  {
    id: "4",
    question: "Can I attend multiple workshops?",
    answer:
      "Yes, you're welcome to attend as many workshops as you'd like! The event is designed to give you the freedom to choose sessions that align with your interests and goals.",
  },
];
