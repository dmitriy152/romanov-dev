import { create } from "zustand";
export const useCharts = create(set => ({
    data: [
        { day: "1", title: "Оценка макета"},
        { day: "2", title: "Заключение договора"},
        { day: "3", title: "Верстка по макету"},
        { day: "10", title: "Адаптивность проекта"},
        { day: "15", title: "Тестирование верстки"},
        { day: "16", title: "Разработка backend"},
        { day: "24", title: "Интеграция frontend и backend"},
        { day: "28", title: "Тестирование проекта"},
        { day: "30", title: "Акт приема передачи продукта"},
      ]
}))