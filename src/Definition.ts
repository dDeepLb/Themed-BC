import bcMod from 'bondage-club-mod-sdk'

function buildVersion(v1: number, v2: number, v3: number) {
    return `${v1}.${v2}.${v3}`;
}

export const HOOK_PRIORITY = ({
	OBSERVE: 0,
	ADD_BEHAVIOR: 1,
	MODIFY_BEHAVIOR: 5,
	OVERRIDE_BEHAVIOR: 10,
	TOP: 100,
})

export const DarkBCVersion = buildVersion(0, 0, 1);
export const ModName = 'Dark BC';
export const ModFullName = 'Dark Bondage Club';
export const Repository = 'https://github.com/dDeepLb/Dark-BC';

export const mod = bcMod.registerMod({
    name: ModName,
    fullName: ModFullName,
    version: DarkBCVersion,
    repository: Repository 
});

export const DebugMode = false;
