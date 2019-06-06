export default class ApiService {
  data = [
    { id: 1, titleEn: 'apple', titleRu: 'яблоко'},
    { id: 2, titleEn: 'pear', titleRu: 'груша'},
    { id: 3, titleEn: 'strawberry', titleRu: 'клубника'},
    { id: 4, titleEn: 'orange', titleRu: 'апельсин'},
    { id: 5, titleEn: 'lemon', titleRu: 'лимон'},
  ];

  getWords() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.99) {
          reject('Ошибка получения данных')
        } else {
          resolve(this.data)
        }
      }, 500);
    });
  }
}
