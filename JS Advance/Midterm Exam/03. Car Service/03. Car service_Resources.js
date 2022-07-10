const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

let {
  expect
} = require('chai');

describe('carService', () => {
  describe('isItExpensive ', () => {
    it('if issue == Engine or Transmission', () => {
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it('If issue !== Engine or Transmission', () => {
      expect(carService.isItExpensive('Window')).to.equal('The overall price will be a bit cheaper');
    })
  });
  describe('discount', () => {
    it('if numberOfParts is > 2 && <= 7', () => {
      expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
      expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
      expect(carService.discount(5, 100)).to.equal('Discount applied! You saved 15$');
    });
    it('if numberOfPrice is > 7', () => {
      expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');
    });
    it('if numberOfPrice is <= 2', () => {
      expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
      expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
    });
    it('If FIRST parameter is NOT a number', () => {
      expect(() => carService.discount('', 1)).to.throw();
      expect(() => carService.discount([], 1)).to.throw();
      expect(() => carService.discount({}, 1)).to.throw();
      expect(() => carService.discount(undefined, 1)).to.throw();
      expect(() => carService.discount(null, 1)).to.throw();
    });
    it('If SECOND parameter is NOT a number', () => {
      expect(() => carService.discount(1, '')).to.throw();
      expect(() => carService.discount(1, [])).to.throw();
      expect(() => carService.discount(1, {})).to.throw();
      expect(() => carService.discount(1, undefined)).to.throw();
      expect(() => carService.discount(1, null)).to.throw();
    });
  });
  describe('partsToBuy', () => {
    it('tes1', () => {
      expect(carService.partsToBuy([{
        part: "blowoff valve",
        price: 145
      }, {
        part: "coil springs",
        price: 230
      }], ['blowoff valve', 'coil springs'])).to.equal(375)
      expect(carService.partsToBuy([{
        part: "blowoff valve",
        price: 145
      }, {
        part: "coil springs",
        price: 230
      }], ['blowoff valve'])).to.equal(145)
    });
    it('if partsCatalog is empty', () => {
      expect(carService.partsToBuy([], [''])).to.equal(0)
    });
    it('If FIRST parameter is not an array', () => {
      expect(() => carService.partsToBuy('', [])).to.throw();
      expect(() => carService.partsToBuy(1, [])).to.throw();
      expect(() => carService.partsToBuy({}, [])).to.throw();
      expect(() => carService.partsToBuy(null, [])).to.throw();
      expect(() => carService.partsToBuy(undefined, [])).to.throw();
    });
    it('If SECOND parameter is not an array', () => {
      expect(() => carService.partsToBuy([], '')).to.throw();
      expect(() => carService.partsToBuy([], 1)).to.throw();
      expect(() => carService.partsToBuy([], {})).to.throw();
      expect(() => carService.partsToBuy([], null)).to.throw();
      expect(() => carService.partsToBuy([], undefined)).to.throw();
    })
  })
})