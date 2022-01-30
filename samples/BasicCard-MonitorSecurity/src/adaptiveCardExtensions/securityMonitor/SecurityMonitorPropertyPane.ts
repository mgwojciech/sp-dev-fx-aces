import { IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import * as strings from 'SecurityMonitorAdaptiveCardExtensionStrings';

export class SecurityMonitorPropertyPane {
  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneTextField('iconProperty', {
                  label: strings.IconPropertyFieldLabel
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  multiline: true
                }),
                PropertyPaneToggle('isloadDemoData', {
                  label: strings.DemoDataOptionFieldLabel,
                  onText:strings.DemoDataLabel,
                  offText:strings.LiveDataLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
