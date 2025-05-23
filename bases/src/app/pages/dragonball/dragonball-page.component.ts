import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  templateUrl: "./dragonball-page.component.html",
})
export class DragonBallComponent{

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    }
  ]);

  powerClasess = computed(() => {
    return {
      'text-danger': true
    };
  });

  addCharacter() {
    console.log('viene aqui');

    if(!this.name()||!this.power()|| this.power()<=0){
      return;
    }
    const newCharacter: Character ={
      id: this.characters.length+1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(
      (list) => [...list, newCharacter]
    );
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}