import { Component, VERSION } from '@angular/core';
import {
  ToolbarSettingsModel,
  ToolbarType,
  PasteCleanupSettingsModel,
  HtmlEditorService,
  ImageService,
  LinkService,
  ToolbarService,
  PasteCleanupService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, PasteCleanupService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  /**
   * Sync Fusion html editor config
   */
  public tools: ToolbarSettingsModel = {
    items: [
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'SubScript',
      'SuperScript',
      '|',
      'Formats',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      'Indent',
      'Outdent',
      '|',
      'Image',
      'CreateLink',
      '|',
      'Undo',
      'Redo',
    ],
  };
  public pasteCleanupSettings: PasteCleanupSettingsModel = {
    prompt: true,
    plainText: false,
    keepFormat: false,
  };

  public value = 'Hi';
}
