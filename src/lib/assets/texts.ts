export const bios = [
	'pansexual',
	'AlexTanukii',
	'Alekuso',
	'Alekuso_',
	'Rust lover',
	'Non-binary',
	'Werkloos waalse',
	'UwU'
];

export function getRandomText(): string {
	return bios[Math.floor(Math.random() * bios.length)];
}
