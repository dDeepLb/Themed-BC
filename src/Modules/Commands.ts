import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { ShareModule } from './Share';

export class CommandsModule extends BaseModule {
  Load(): void {
    CommandCombine([
      {
        Tag: 'share-theme',
        Description: ': Shares your theme with other people that have Themed installed!',
        Action() {
          getModule<ShareModule>('ShareModule').share();
        }
      }
    ]);
  }

  Run(): void { }
}
