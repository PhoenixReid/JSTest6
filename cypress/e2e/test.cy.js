describe("Проверка Авторизации", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Приложение открылось", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("Авторизация", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
});

describe("Проверка функций приложениЯ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.login("test@test.com", "test");
    
  });

  it("Регистрация  книги", () => {
    const nameBook = "Оригинальное название";
    const describeBook = "Крайне оригинальное описание оригинальной книги";
    const authorBook = "Ноуннейм Неизвестный";
    cy.RegBook(nameBook,describeBook,authorBook);
    cy.contains(nameBook).should("be.visible");
    cy.contains(authorBook).should("be.visible");
  });

  

  it("Проверка скачки книги", () => {
    cy.contains("Add to favorite").click();
    cy.contains("Add to favorite").should("not.be.visible");
  });

  it("Проверка скачки книги", () => {
    cy.contains("Delete from favorite").click();
    cy.contains("Delete from favorite").should("not.be.visible");
  });

  

  


  

  




});
