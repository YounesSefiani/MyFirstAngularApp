import { Component } from '@angular/core';
import { Block } from './block/block';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Block],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './block/block.css']
})
export class App {
  protected title = 'Younes SEFIANI';
  blockName = "Blockus";
}
