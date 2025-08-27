import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Block } from './block/block';
import { BindingComposant } from './binding-composant/binding-composant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Block, BindingComposant],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './block/block.css']
})
export class App {
  protected title = 'Younes SEFIANI';
  blockName = "Blockus";

}
