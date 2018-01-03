import { observable, action } from 'mobx';

class Chela {
  id;
  name;
  @observable likes;
  image;
  price;

  constructor(id, name, likes, image, price) {
    this.id = id;
    this.name = name;
    this.likes = likes;
    this.image = image;
    this.price = price;
  }

  @action setLikes (likes) {
    this.likes = likes;
  }

  @action increase() {
    this.setLikes(this.likes + 1)
  }
}

export default Chela