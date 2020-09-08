const service = require('./exercises');
// const { randomNumber } = require('./exercises');
jest.mock('./exercises');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(20, 2)).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(20, 2);
});

describe("Testando implementações, ex03", () => {
  it("mockando função para receber 3 parâmetros e retornar a sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  it("mockando função que receba um parâmetro e retorne seu dobro", () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  });
});

describe("Testando implementações, ex04", () => {
  it("Mockando a primeira função para ela retornar caixa baixa", () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(service.firstFunction('JEDERSON')).toBe('jederson');
  });

  it("Mockando a segunda função para retornar a ultima letra da string", () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.secondFunction('Jederson')).toBe('n');
  });

  it("Mockando a terceira função para receber 3 parâmetros e concatena-los", () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.thirdFunction('Je', 'der', 'son')).toBe('Jederson');
  });
})