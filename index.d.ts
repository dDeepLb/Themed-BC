interface ResponsiveSetting {
    background: string;
    buttonColor: string;
	buttonHoverColor: string;
	buttonBorderColor: string;
    imageColor: string;
    textColor: string;
    textShadowColor: string;
}

interface ResponsiveSolidSetting extends ResponsiveSetting {
	settings: { enable: boolean };
	isNewInput: {
		background: boolean;
    	buttonColor: boolean;
		buttonHoverColor: boolean;
		buttonBorderColor: boolean;
   	 	imageColor: boolean;
    	textColor: boolean;
    	textShadowColor: boolean;
	};
}

type ResponsivePartialSetting = Partial<ResponsiveSolidSetting>;

type ModSetting = {
	DarkBC?: string
};

interface Window {
    DarkBC_Loaded?: boolean;
	BCResponsive_Loaded?: boolean;
}