class Car {
  constructor(_make, _model, _year, _color) {
    this.make = _make;
    this.model = _model;
    this.year = _year;
    this.color = _color;
  }

  changeColor(_color) {
    this.color = _color;
  }

  changeMake(_make) {
    this.make = _make;
  }
}

// var make = "Honda";
// var model = "Civic";