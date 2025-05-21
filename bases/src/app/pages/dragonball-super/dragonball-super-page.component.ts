import { NgClass } from "@angular/common";
import { Component, computed, inject, Inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonBallCharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball-super-page.component.html",
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonBallCharacterAddComponent]
})
export class DragonBallSuperComponent{

  public dragonballService= inject(DragonBallService);

}