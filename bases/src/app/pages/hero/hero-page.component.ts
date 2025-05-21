import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent{

  name = signal("Iron man");
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizeName = computed(() => {
    const name = `${this.name().toUpperCase()}`;
    return name;
  })

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }
  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);
  }
  resetForm(){
    this.name.set("IronMan");
    this.age.set(45);
  }

}