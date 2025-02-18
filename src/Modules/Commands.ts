import { BaseModule } from '../Base/BaseModule';
import { getModule } from '../Base/Modules';
import { ShareModule } from './Share';
import { sendLocalSmart } from '../Utilities/Other';

export class CommandsModule extends BaseModule {
  Load(): void {
    CommandCombine([
      {
        Tag: 'share-theme',
        Description: '[member number]: Shares your theme with other people that have Themed installed!',
        Action(args) {
          if (!args) return getModule<ShareModule>('ShareModule').share(null);

          const targetNumber = parseInt(args, 10);
          const target = ChatRoomCharacter.find((c) => c.MemberNumber == targetNumber);
          if (!target)
            sendLocalSmart('theme-share-error', `No character with MemberNumber ${targetNumber} found!`);
          else
            getModule<ShareModule>('ShareModule').share(target.MemberNumber);
        }
      }
    ]);
  }

  Run(): void { }
}
